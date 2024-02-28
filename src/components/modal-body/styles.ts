import styled from "styled-components";
import theme from "../../styles/theme.ts";

export const InputField = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1px solid ${theme.colors.br};
  padding: 10px;
  height: 100%;
  outline: none;
  font-size: 15px;

  &:focus {
    border: 2px solid ${theme.colors.accentBr};
    padding: 9px;
  }
`;

export const ModalButton = styled.div`
  font-size: 16px;
  color: ${theme.colors.textPrimary};
  background-color: ${theme.colors.accentOne};
  padding: 8px 15px;
  cursor: pointer;
  width: fit-content;
  margin-top: 30px;
  
  &:hover{
    opacity: 0.3;
  }
`;
