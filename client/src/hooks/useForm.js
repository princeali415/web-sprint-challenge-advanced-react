// write your custom hook here to control your checkout form
import React, { useState } from "react";
import CheckoutForm from '../components/CheckoutForm'

const useForm = (intitialValues) => {
  const [values, setValues] = useState(intitialValues);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, handleChanges];
};

export default useForm