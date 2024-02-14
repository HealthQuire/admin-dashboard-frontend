import styled from "styled-components";
import theme from "../../styles/theme.ts";
import {Link} from "react-router-dom";

export const HomePageWrapper = styled.div`
  width: calc(100vw - 268px);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomePageHeader = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 20px;
`;

export const HomePageHeaderBox = styled.div`
  width: 92%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const HomePageHeaderLogout = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 12px 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;


export const HomePageBlock = styled.div`
  width: 92%;
  height: 240px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 15px;
  cursor: pointer;
`;

export const HomePageBlockElement = styled.div`
  width: 32%;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.bgSecondary};
`;

export const HomePageBlockElementToApp = styled(Link)`
  width: 32%;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.accentOne};
  overflow: hidden;
  &:hover {
    opacity: 0.5;
  }
`;

export const HPBHeaderToApp = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.accentBr};
  margin: 0;
`;

export const HPBHeader = styled(Link)`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.br};
  margin: 0;
  &:hover {
    opacity: 0.5;
  }
`;

export const HPBHeaderText = styled.div`
  width: fit-content;
  height: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-left: 4px solid;
  border-color: ${theme.colors.bgPads};
  color: ${theme.colors.textSecondary};
  padding: 0 15px;
  margin: 0;
`;

export const HPBBody = styled.div`
  width: 90%;
  height: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const HomePageBlockCentral = styled.div`
  width: 92%;
  height: 450px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 15px 30px 15px;
`;

export const HPBCHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  border-bottom: 1px solid ${theme.colors.br};
  margin: 0;
  cursor: pointer;
`;

export const HPBCBody = styled.div`
  width: 100%;
  height: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin: 0;
  cursor: pointer;
`;
export const HPBCBodyElement = styled.div`
  width: 100%;
  height: 78px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  cursor: pointer;
`;

export const HomePageBlockCentralElementLeft = styled.div`
  width: 66%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background-color: ${theme.colors.bgSecondary};
`;

export const HomePageBlockCentralElementRight = styled.div`
  width: 32%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background-color: ${theme.colors.bgSecondary};
`;
