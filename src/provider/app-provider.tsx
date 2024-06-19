import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
import store from '../redux/store';
export default function Appprovider({children}:{children:React.ReactNode}) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}