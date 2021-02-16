import React from "react";

import "./inputComponent.scss";

interface InputComponentProps {
  inputType: string;
  id: string;
  label: string;
  placeholder: string;
  pattern: string;
  errors: string;
  inputName: string;
  value: string;
  onChange?: (evt: any) => void;
}

const InputComponent = ({
  inputType,
  id,
  label,
  placeholder,
  pattern,
  errors,
  inputName,
  value,
  onChange,
}: InputComponentProps): JSX.Element => {
  return (
    <>
      <label htmlFor={id} className="input-label">
        {label}
        <input
          type={inputType}
          id={id}
          name={inputName}
          placeholder={placeholder}
          pattern={pattern}
          onChange={onChange}
          value={value}
          required
        />
        <svg width="14px" height="12px" viewBox="0 0 14 12" className="check">
          <path d="M1 7 5.5 11 L13 1"></path>
        </svg>
        <svg
          className="invalid-check"
          width="15px"
          height="12px"
          viewBox="0 0 350 350"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#f44336">
            <path d="m21.339844 329.398438c-5.460938 0-10.925782-2.089844-15.082032-6.25-8.34375-8.339844-8.34375-21.824219 0-30.164063l286.589844-286.59375c8.339844-8.339844 21.824219-8.339844 30.164063 0 8.34375 8.339844 8.34375 21.824219 0 30.164063l-286.589844 286.59375c-4.183594 4.179687-9.621094 6.25-15.082031 6.25zm0 0" />
            <path d="m307.929688 329.398438c-5.460938 0-10.921876-2.089844-15.082032-6.25l-286.589844-286.59375c-8.34375-8.339844-8.34375-21.824219 0-30.164063 8.339844-8.339844 21.820313-8.339844 30.164063 0l286.589844 286.59375c8.34375 8.339844 8.34375 21.824219 0 30.164063-4.160157 4.179687-9.621094 6.25-15.082031 6.25zm0 0" />
          </g>
        </svg>
        {errors.length > 0 ? (
          <span className="tooltip">{errors}</span>
        ) : (
          null
        )}
      </label>
    </>
  );
};

export default InputComponent;
