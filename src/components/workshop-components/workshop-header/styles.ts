import styled from "styled-components";
import theme from "../../../styles/theme.ts";

export const WSHeaderWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: end;
`;

export const InputField = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${theme.colors.br};
  padding: 10px;
  height: 100%;
  outline: none;
  font-size: 15px;

  &:focus {
    border: 0;
    border-bottom: 2px solid ${theme.colors.accentBr};
    padding: 9px 10px 10px 10px;
  }
`;

export const CreateButton = styled.div`
  margin-left: 30px;
  font-size: 16px;
  color: ${theme.colors.textPrimary};
  background-color: ${theme.colors.accentOne};
  padding: 8px 15px;
  cursor: pointer;
  
  &:hover{
    opacity: 0.3;
  }
`;
