
import { combineReducers } from 'redux';
import userreducer from './UserReducer';

const appReducer= combineReducers({
    user:userreducer
})

export default appReducer

export type State=ReturnType<typeof appReducer>
