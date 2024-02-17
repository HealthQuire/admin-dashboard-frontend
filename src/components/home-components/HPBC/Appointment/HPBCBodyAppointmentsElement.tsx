import {
    HPBCBodyElement,
    HPBCHeader,
    UserImage,
    MainData,
    Txt,
    AddData,
    ButtonEdit,
    Confirmation
} from "./styles.ts";
import {nanoid} from "@reduxjs/toolkit";
import theme from "../../../../styles/theme.ts";

interface Appointment {
    id: string,
    clientFullName: string,
    serviceName: string,
    dt: Date,
    isConfirmed: boolean,
    avatarUrl: string
}

export default function HPBCBodyAppointmentsElement(element: Appointment) {

    return(
        <HPBCBodyElement key={nanoid()}>
            <HPBCHeader>
                <UserImage alt="U" src={element.avatarUrl}></UserImage>
                <MainData>
                    <Txt>{element.clientFullName}</Txt>
                    <Txt style={{color: theme.colors.accentTwo, fontSize: "14px"}}>{element.serviceName}</Txt>
                </MainData>
            </HPBCHeader>
            <AddData>
                <Confirmation style={{
                    backgroundColor: element.isConfirmed ? theme.colors.accentTwo : theme.colors.declineColor
                }}/>
                <Txt>{element.dt.toISOString().slice(0, 10)} {element.dt.getHours()}:{element.dt.getMinutes()}</Txt>
                <ButtonEdit to={`/appointments/${element.id}`}>Edit</ButtonEdit>
            </AddData>
        </HPBCBodyElement>
    )
}