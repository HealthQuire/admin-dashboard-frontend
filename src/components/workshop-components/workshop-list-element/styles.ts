import styled from "styled-components";
import theme from "../../../styles/theme.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ElementWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-color: ${theme.colors.br};
`;

export const ElementMain = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  font-size: 16px;
  margin-left: 15px;
`;

export const ElementInteraction = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-right: 15px;
`;

export const ElementButton = styled(FontAwesomeIcon)`
  width: 18px;
  height: 18px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.accentTwo};
  cursor: pointer;
  
  &:hover{
    opacity: 0.5;
  }
`;
