import { useSelector } from "react-redux";
import AccountOperations from "./features/accounts/account-operations";
import BalanceDisplay from "./features/accounts/balance-display";
import CreateCustomer from "./features/customers/create-customer";
import Customers from "./features/customers/Customers";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);
  return (
    <>
      <h1>Redux Bank</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customers />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </>
  );
}

export default App;
