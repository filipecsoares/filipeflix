import { useState } from 'react';

function useForm(initialFormFields) {
  const [values, setValues] = useState(initialFormFields);

  function setValue(field, value) {
    setValues({
      ...values,
      [field]: value,
    });
  }

  function clearForm() {
    setValues(initialFormFields);
  }

  function handleChange({ target }) {
    setValue(target.getAttribute('name'), target.value);
  }
  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
