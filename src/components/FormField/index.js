import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 130px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;
Label.Text = styled.span`
  color: #E5E5E5;
  height: 50px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  width: 100%;
  height: 50px;
  margin-bottom: 2%;
  display: block;
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  border-style: solid none;
  padding: 15px 15px;
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
}
`;

const FormField = ({
  value, onChange, type, name, label,
}) => {
  const fieldId = `id_${name}`;
  const isTextarea = type === 'textarea';
  const tag = isTextarea ? 'textarea' : 'input';

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input as={tag} id={fieldId} name={name} type={type} value={value} onChange={onChange} />
        <Label.Text>
          {label}
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
};

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
};

FormField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormField;
