import styled from "styled-components";

export const ReactFormWrapper = styled.div`
  position: relative;
  width: 100%;
  background: var(--tan);
  padding: 40px 20px;

  h2 {
    margin-bottom: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const FormGroup = styled.div`
  position: relative;

  &.select {
    display: grid;
    grid-template-areas: "select";
    align-items: center;
    position: relative;
    margin-bottom: 10px;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 12px;
  position: absolute;
  left: 0;
  bottom: 10px;
`;

export const Label = styled.label`
  color: var(--brown);
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  top: -30px;
  left: 0;
`;

export const FormInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 50px;
  font-size: 18px;
  padding: 15px 0 5px 10px;
  display: block;
  border: none;
  border-bottom: 1px solid var(--brown);

  &:focus ~ ${Label} {
    color: var(--dark-blue);
  }

  &:focus {
    outline: none;
  }

  &[type="submit"] {
    background-color: var(--brown);
    color: #fff;
    padding: 10px;
  }
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  color: var(--brown);
  margin-bottom: 15px;
  border: 1px solid var(--brown);
  background: #fff;
  min-height: 100px;

  &:focus ~ ${Label} {
    color: var(--dark-blue);
  }

  &:focus {
    outline: none;
  }
`;
