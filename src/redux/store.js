import {combineReducers, createStore} from 'redux';
import Accountreducer from '../features/accounts/account-slice';
import Customereducer from '../features/customers/customer-slice';

const rootReducer = combineReducers({
  account: Accountreducer,
  customer: Customereducer
})

const store = createStore(rootReducer);

export default store;