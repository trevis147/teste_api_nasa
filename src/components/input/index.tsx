import React, { MouseEventHandler } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Form,
  SearchButton,
  SearchInput,
  SearchLabel,
} from "./style";

interface InputProps {
  value: string;
  id: string;
  type: "text" | "password" | "email" | "number" | "search" | "tel" | "url";
  placeholder: string;
  required: boolean;
  btnText: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function Input({
  id,
  type,
  placeholder,
  required,
  onChange,
  btnText,
  onClick,
}: InputProps) {
  return (
    <Container>
      <Form>
        <SearchLabel htmlFor={id}>Search image for nasa</SearchLabel>
        <SearchInput
          id={id}
          type={type}
          placeholder={placeholder}
          autoFocus
          required={required}
          onChange={onChange}
        />
        <SearchButton type="button" onClick={(e) => onClick(e)}>
          {btnText}
        </SearchButton>
      </Form>
    </Container>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "password",
    "email",
    "number",
    "search",
    "tel",
    "url",
  ]),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  btnText: PropTypes.string,
};

Input.defaultProps = {
  value: "",
  id: "search",
  type: "text",
  placeholder: "Search",
  required: false,
  btnText: "Search 🔍",
};
export default Input;
