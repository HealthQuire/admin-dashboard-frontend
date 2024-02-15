import styled from "styled-components";
import theme from "../../../../styles/theme.ts";

export const HPBCBodyElement = styled.div`
  width: 100%;
  height: 78px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  cursor: pointer;
  border-bottom: 1px solid;
  border-color: ${theme.colors.br};
  overflow: hidden;
`;

export const HPBCHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`;

export const UserImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 30px;
    margin: 0 15px 0 30px;
`;

export const MainData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
`;

export const Txt = styled.p`
    margin: 2px
`;
export const Confirmation = styled.div`
  width: 10px;
  height: 10px;
  margin-right: 30px;
  border-radius: 20px;
`;
