import { useState } from "react";

const MyAccount = () => {
  // state = component wide updatable data
  const [accountName, setAccountName] = useState("arun"); // arun is initial state data

  return (
    <div>
      <h2>MyAccount</h2>
      <p>Account Name: {accountName}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setAccountName((prevState) => {
            return "john";
          });
        }}
      >
        Update Account Name
      </button>
    </div>
  );
};

export default MyAccount;
