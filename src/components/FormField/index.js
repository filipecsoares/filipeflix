import React from 'react';

const FormField = ({ value, onChange, type, name, label }) => {
  const tag = () => {
    if (type === 'textarea') {
      return <textarea name={name} value={value} onChange={onChange} />;
    } else {
      return (
        <input name={name} type={type} value={value} onChange={onChange} />
      );
    }
  };

  return (
    <div>
      <label>
        {label}: {tag()}
      </label>
    </div>
  );
};

export default FormField;
