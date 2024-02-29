export interface IAppointment {
    id: number;
    timeCellId: string;
    description: string;
}

export interface INewAppointment {
    timeCellId: string;
    description: string;
}

export const initAppointment: IAppointment = {
    id: 0,
    timeCellId: "",
    description: ""
}
