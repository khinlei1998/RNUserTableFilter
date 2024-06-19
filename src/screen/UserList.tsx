import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Alert,
} from 'react-native';
import leaderboard from '../API/leaderboard.json';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, connect} from 'react-redux';
import {searchUser} from '../redux/action';
import styles from '../style/UserListStyle';
import {Users} from '../type/User';
import {StateProps} from '../type/User';
function UserList({user_lists}: Users) {
  const [query, setQuery] = useState('');
  const [sortAscending, setSortAscending] = useState(true);
  const [showLowest, setShowLowest] = useState(false);
  const dispatch = useDispatch();

  const tableHeader = () => (
    <View style={styles.tableHeader}>
      {
        <>
          <View style={styles.columnHeader}>
            <TouchableOpacity onPress={handleSort}>
              <Text style={styles.columnHeaderTxt}>
                Name {sortAscending ? '▲' : '▼'}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={toggleRankOrder}>
            <Text style={styles.columnHeaderTxt}>
              Rank {showLowest ? '▼' : '▲'}
            </Text>
          </TouchableOpacity>
          <View style={styles.columnHeader}>
            <Text style={styles.columnHeaderTxt}>Number of bananas</Text>
          </View>
        </>
      }
    </View>
  );

  const toggleRankOrder = () => {
    setShowLowest(!showLowest);
    const sortedList = [...(user_lists || [])].sort((a, b) => {
      if (showLowest) {
        return b.stars - a.stars || a.name.localeCompare(b.name);
      } else {
        return a.stars - b.stars || a.name.localeCompare(b.name);
      }
    });
    dispatch(searchUser(sortedList));
  };

  const handleSort = () => {
    const sortedList = [...(user_lists || [])].sort((a, b) => {
      if (sortAscending) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setSortAscending(!sortAscending);
    dispatch(searchUser(sortedList));
  };

  const handleFuzzySearch = (query: string) => {
    const user_data = Object.values(leaderboard);

    const matchingUsers = query
      ? user_data.filter(val =>
          val.name.toLowerCase().includes(query.toLowerCase()),
        )
      : [];

    if (matchingUsers.length > 0) {
      const sortedMatchingUsers = matchingUsers.sort(
        (a, b) => b.stars - a.stars,
      );

      dispatch(searchUser(sortedMatchingUsers));
    } else {
      dispatch(searchUser([]));
      Alert.alert(
        'Alert',
        'No users match the search criteria. Please try again with a different name.',
      );
    }
  };
  const handleSearch = (query: string) => {
    const user_data = Object.values(leaderboard);

    const matchingUsers = query
      ? user_data.filter(val => val.name.toLowerCase() === query.toLowerCase())
      : [];
    let user_filtered = [];
    if (matchingUsers.length > 0) {
      const searchedUser = {...matchingUsers[0], isSearched: true};

      const top_users = user_data
        .filter(user => user.uid !== searchedUser.uid)
        .sort((a, b) => b.stars - a.stars)
        .slice(0, 9)
        .map(user => ({...user, isSearched: false}));

      user_filtered = [...top_users, searchedUser];

      user_filtered = user_filtered
        .sort((a, b) => b.stars - a.stars)
        .slice(0, 10);
      dispatch(searchUser(user_filtered));
    } else {
      dispatch(searchUser([]));
      Alert.alert(
        'Alert',
        'This user name does not exist!Please specify an existing user name!',
      );
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.inputStyle}>
          <Icon style={{padding: 10}} name="search" size={20} color="#000" />
          <TextInput
            onChangeText={text => setQuery(text)}
            style={{flex: 1}}
            placeholder="User Name"
          />
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => handleSearch(query)}
            style={styles.searchbtnStyle}>
            <Text style={{color: '#fff', fontWeight: '600'}}>Search </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleFuzzySearch(query)}
            style={styles.fuzzysearchbtnStyle}>
            <Text style={{color: '#6c7fe0', fontWeight: '600'}}>
              Fuzzy Search{' '}
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={user_lists}
          style={{marginTop: 10}}
          keyExtractor={(item, index) => index + ''}
          ListHeaderComponent={tableHeader}
          stickyHeaderIndices={[0]}
          renderItem={({item, index}) => {
            const {name, stars, bananas} = item || {};
            return (
              <View
                style={{
                  ...styles.tableRow,
                  backgroundColor: index % 2 == 1 ? '#dee2f8' : 'white',
                }}>
                <Text
                  style={[
                    styles.columnRowTxt,
                    item.isSearched ? styles.highlightText : null,
                  ]}>
                  {name}
                </Text>
                <Text style={styles.columnRowTxt}>{stars}</Text>
                <Text style={styles.columnRowTxt}>{bananas}</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const stateToProps = (state: any): StateProps => {
  return {
    user_lists: state.user.user_list,
  };
};
export default connect(stateToProps, null)(UserList);
