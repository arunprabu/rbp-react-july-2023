import { useRef, useState } from "react";

const MyAccount = () => {
  // state = component wide updatable data
  const [accountName, setAccountName] = useState("arun"); // arun is initial state data
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneNumberRef = useRef('');

  const handleSavePhoneNumber = () => {
    console.log(phoneNumberRef.current.value);
    setPhoneNumber(phoneNumberRef.current.value);
  }

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

      <hr />
      {/* Uncontrolled component -- where form data is handled by the DOM itself.*/}
      <input type="text" placeholder="Enter your Phone" ref={phoneNumberRef} />
      <button type="button" onClick={handleSavePhoneNumber}>
        Save Phone Number
      </button>
      <p>Saved Phone Number: {phoneNumber}</p>
    </div>
  );
};

export default MyAccount;
