export interface IClient {
    id: number;
    userId: number,
    avatarUrl: string,
    email: string,
    password: string,
    role: string,
    phone: string,
    status: string,
    firstName: string,
    lastName: string,
    fatherName: string
}

export interface INewClient {
    email: string,
    password: string,
    phone: string,
    status: string,
    firstName: string,
    lastName: string,
    fatherName: string
}
export const initClient: IClient = {
    id: 0,
    userId: 0,
    avatarUrl: "",
    email: "",
    password: "",
    role: "",
    phone: "",
    status: "",
    firstName: "",
    lastName: "",
    fatherName: ""
}
