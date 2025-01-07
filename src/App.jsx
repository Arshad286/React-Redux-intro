import AccountOperations from "./features/accounts/account-operations"
import BalanceDisplay from "./features/balance-display"
import CreateCustomer from "./features/customers/create-customer"
import Customers from "./features/customers/Customers"


function App() {


  return (
    <>
      <h1>Redux Bank</h1>
      <CreateCustomer />
      <Customers />
      <AccountOperations />
      <BalanceDisplay />
    </>
  )
}

export default App
