export interface IManager {
    id: string;
    userId: string,
    avatarUrl: string,
    email: string,
    password: string,
    role: number,
    phone: string,
    status: string,
    medCentreId: string,
    firstName: string,
    lastName: string,
    fatherName: string
}

export interface INewManager {
    email: string,
    password: string,
    role: number,
    phone: string,
    status: string,
    medCentreId: string,
    firstName: string,
    lastName: string,
    fatherName: string
    avatarUrl: string,
}

export const initManager: IManager = {
    id: "",
    userId: "",
    avatarUrl: "",
    email: "",
    password: "",
    role: 0,
    phone: "",
    status: "",
    medCentreId: "",
    firstName: "",
    lastName: "",
    fatherName: ""
}