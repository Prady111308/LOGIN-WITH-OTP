import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onSubmitOtp = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const inputRef = useRef([]);

  useEffect(() => {
    //focus first input field by default
    if (inputRef.current[0]) inputRef.current[0].focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return; // check if otp entered is not a number

    const newOtp = [...otp];

    //allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    //combine entered input
    const combineOtp = newOtp.join("");

    //trigger submit function if OTP entered
    if (combineOtp.length == length) {
      onSubmitOtp(combineOtp);
    }

    //move to the next empty input field
    if (value && index < length - 1 && inputRef.current[index + 1]) {
      //inputRef.current[index + 1].focus();
      const nextEmptyInput = newOtp.indexOf('',index);
      if(inputRef.current[nextEmptyInput])
         inputRef.current[nextEmptyInput].focus();
    }
  };
  const handleClick = (index) => {
    inputRef.current[index].setSelectionRange(1,1);
    if(index>0 && !otp[index-1])
    {
        inputRef.current[otp.indexOf('')].focus();
    }
  };

  const handleKeydown = (e, index) => {
    if (
      e.key === "Backspace" &&
      index > 0 &&
      !otp[index] &&
      inputRef.current[index - 1]
    ) {
      inputRef.current[index - 1].focus();
    }
  };

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            className="inputOtp"
            type="text"
            value={value}
            ref={(input) => (inputRef.current[index] = input)}
            onChange={(e) => handleChange(e, index)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeydown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
