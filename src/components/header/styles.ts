import styled from "styled-components";

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