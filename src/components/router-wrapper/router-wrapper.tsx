import { Outlet } from "react-router-dom";
import Nav from "../nav";
import {BodyContainer, RouterWrapperDiv} from "./styles";
import Header from "../header/header.tsx";


export default function RouterWrapper() {
  return (
    <RouterWrapperDiv>
        <Nav/>
        <BodyContainer>
            <Header/>
            <Outlet/>
        </BodyContainer>
    </RouterWrapperDiv>
  )
}
