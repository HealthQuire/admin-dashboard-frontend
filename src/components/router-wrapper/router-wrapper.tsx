import { Outlet } from "react-router-dom";
import Header from "../header";
import { RouterWrapperDiv } from "./styles";

export default function RouterWrapper() {
  return (
    <RouterWrapperDiv>
        <Header/>
        <Outlet/>
    </RouterWrapperDiv>
  )
}
