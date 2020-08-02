import React from "react";

type Props = {
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormField: React.FC<Props> = ({ placeholder, value, name, onChange }) => {
  return (
    <div className="field">
      <input
        className="field__input"
        type="text"
        onChange={onChange}
        value={value}
        name={name}
      />
      <span className="placeholder">{placeholder}</span>
    </div>
  );
};

export default FormField;
