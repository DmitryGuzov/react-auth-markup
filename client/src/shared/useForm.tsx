import { useState, useEffect } from "react";

interface ValueModel {
  name?: string;
  email?: string;
  password?: string;
  repeatPassword?: string;
}

const useForm = (callback: any, validate: any) => {
  const [values, setValues] = useState<ValueModel>({});
  const [errors, setErrors] = useState<ValueModel>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setErrors(validate(values));
  }, [values]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, isSubmitting]);
  const handleSubmit = (event: any) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event: any) => {
    event.persist();
    setIsSubmitting(false);
    setValues((values: any) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
