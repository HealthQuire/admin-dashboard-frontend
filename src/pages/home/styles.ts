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
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.accentOne};
  margin-bottom: 30px;
`;

export const HomePageBlock = styled.div`
  width: 92%;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px;  
`;

export const HomePageBlockElement = styled.div`
  width: 30%;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.accentOne};
`;

export const HomePageBlockCentral = styled.div`
  width: 92%;
  height: 430px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px 30px 15px;
`;

export const HomePageBlockCentralElementLeft = styled.div`
  width: 65%;
  height: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${theme.colors.accentOne};
`;

export const HomePageBlockCentralElementRight = styled.div`
  width: 30%;
  height: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${theme.colors.accentOne};
`;
