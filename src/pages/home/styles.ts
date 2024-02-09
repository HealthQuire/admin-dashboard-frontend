import styled from "styled-components";
import theme from "../../styles/theme.ts";

export const HomePageWrapper = styled.div`
  //position: relative;
  width: calc(100vw - 268px);
  min-height: 101vh;
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
  background-color: ${theme.colors.textSecondary};
  margin-bottom: 30px;
`;

export const HomePageBlock = styled.div`
  width: 92%;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.textSecondary};
  margin: 0 15px 30px;
`;

export const HomePageBlockCentral = styled.div`
  width: 92%;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${theme.colors.textSecondary};
  margin: 0 15px 30px;
`;

export const HomePageBlockElement = styled.div`
  width: 360px;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.accentOne};
`;
