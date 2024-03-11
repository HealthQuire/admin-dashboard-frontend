export interface IAppointment {
    id: string;
    timeCellId: string;
    description: string;
}

export interface INewAppointment {
    timeCellId: string;
    description: string;
}

export const initAppointment: IAppointment = {
    id: "",
    timeCellId: "",
    description: ""
}
