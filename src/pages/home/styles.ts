import styled from "styled-components";
import theme from "../../styles/theme.ts";

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
  //background-color: ${theme.colors.accentOne};
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

export const HomePageBlock = styled.div`
  width: 92%;
  height: 170px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 15px;
  cursor: pointer;
`;

export const HomePageBlockElement = styled.div`
  width: 32%;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.bgThird};
  &:hover {
    opacity: 0.5;
  }
`;

export const HomePageBlockElementHQ = styled.div`
  width: 32%;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.accentOne};
  &:hover {
    opacity: 0.5;
  }
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

export const HomePageBlockCentralElementLeft = styled.div`
  width: 66%;
  height: 450px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.bgThird};
`;

export const HomePageBlockCentralElementRight = styled.div`
  width: 32%;
  height: 450px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.bgThird};
`;
