export interface IManager {
    id: number;
    userId: number,
    avatarUrl: string,
    email: string,
    password: string,
    role: string,
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
    role: string,
    phone: string,
    status: string,
    medCentreId: string,
    firstName: string,
    lastName: string,
    fatherName: string
}

export const initManager: IManager = {
    id: 0,
    userId: 0,
    avatarUrl: "",
    email: "",
    password: "",
    role: "",
    phone: "",
    status: "",
    medCentreId: "",
    firstName: "",
    lastName: "",
    fatherName: ""
}