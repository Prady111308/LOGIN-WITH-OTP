import React, { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneOtpForm = () => {
  const [phoneNumber,setPhoneNumber] = useState();
  const[showOtpInput,setOtpInput] = useState(false);

   const handleChange=(event)=> {
    setPhoneNumber(event.target.value)
};

   const handleSubmit = (event) => { 
     event.preventDefault();
     const regex = new RegExp('/^[0-9]{10}$/g');
     if(phoneNumber.length<10 || regex.test(phoneNumber))
     {
        alert('Invalid Phone Number!!!');
        return;
     }
       console.log(phoneNumber)
        setOtpInput(true);
      };
    const onSubmitOtp = (otp) =>{
        console.log('Entered Otp is : '+otp);
    }

  return (
    <div>
      <h2>Login with OTP</h2>
      {!showOtpInput ? <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Phone Number" onChange={handleChange}/>
        <button type="submit"> Get OTP</button>
      </form> : 
       <div>
        <p>Enter OTP sent on {phoneNumber}</p>
        <OtpInput length={4} onSubmitOtp={onSubmitOtp} />
       </div>
      }
    </div>
  );
};

export default PhoneOtpForm;
