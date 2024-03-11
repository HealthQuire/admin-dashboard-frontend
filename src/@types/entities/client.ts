export interface IClient {
    id: string;
    userId: string,
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
    avatarUrl: string,
}
export const initClient: IClient = {
    id: "",
    userId: "",
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
