import styled from "styled-components";
import { keyframes } from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import theme from "../../styles/theme.ts";

export const fadeInAnim = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const slideAnim = keyframes`
  0% {
    transform: translateY(-50%);
  }
  100%{
    transform: translateY(0%);
  }
`

export const ModalWindowWrapper = styled.div`
  position: fixed;
  display: flex;
  z-index: 100;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  animation: ${fadeInAnim} 0.5s ease backwards;
`;

export const ContentContainer = styled.div`
  width: 50vw;
  height: fit-content;
  max-height: 80vh;
  overflow-y: auto;
  min-width: 500px;
  background-color: ${(props) => props.theme.colors.bgPrimary};
  padding: 24px;
  animation: ${slideAnim} 0.5s ease backwards;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 32px;
  height: fit-content;
`;

export const CloseButton = styled(FontAwesomeIcon)`
  background-size: cover;
  height: 24px;
  width: 24px;
  cursor: pointer;
  transition: transform 0.5s ease;

  &:hover {
    opacity: 0.6;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 1.5em;
  color: ${theme.colors.accentTwo};
`;