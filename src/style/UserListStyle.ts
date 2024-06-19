import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sub_container: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: 'red',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#6c7fe0',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    height: 50,
  },
  tableRow: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  columnHeader: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnHeaderTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
  columnRowTxt: {
    width: '34%',
    textAlign: 'center',
  },
  highlightText: {
    color: 'red',
  },
  inputStyle: {
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#6c7fe0',
  },
  searchbtnStyle: {
    alignItems: 'center',
    backgroundColor: '#6c7fe0',
    padding: 10,
    marginTop: 20,
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
    width: '45%',
  },
  fuzzysearchbtnStyle: {
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
    width: '45%',
    borderColor: '#6c7fe0',
    borderWidth: 1,
  },
});
export default styles;
