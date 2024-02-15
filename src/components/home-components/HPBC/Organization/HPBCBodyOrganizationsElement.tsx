import {HPBCBodyElement, UserImage, MainData, Txt, HPBCHeader} from "./styles.ts";
import {nanoid} from "@reduxjs/toolkit";
import {Organization} from "../../../../@types/Home/organization.ts";
import theme from "../../../../styles/theme.ts";
import {Confirmation} from "../Appointment/styles.ts";

export default function HPBCBodyOrganizationsElement(element: Organization) {

    return(
        <HPBCBodyElement key={nanoid()}>
            <HPBCHeader>
                <UserImage alt="U" src={element.avatarUrl}></UserImage>
                <MainData>
                    <Txt>{element.name}</Txt>
                </MainData>
            </HPBCHeader>
            <Confirmation style={{
                backgroundColor: element.status ? theme.colors.accentTwo : theme.colors.declineColor
            }}/>
        </HPBCBodyElement>
    )
}