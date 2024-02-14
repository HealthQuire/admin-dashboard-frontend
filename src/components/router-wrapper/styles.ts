import styled from "styled-components";
import theme from "../../styles/theme.ts";

export const RouterWrapperDiv = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: row;
    align-items: start;
    justify-content: end;
    background-color: ${theme.colors.bgPrimary};
`