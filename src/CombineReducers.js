import {countNumber} from './Reducers'
import {combineReducers} from 'redux';

export const rootReducers=combineReducers({
    countNumber:countNumber
})
