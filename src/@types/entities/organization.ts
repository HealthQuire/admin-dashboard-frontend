export interface IOrganization {
    id: number;
    ownerId: string;
    name: string;
    status: string;
}

export interface INewOrganization {
    ownerId: string;
    name: string;
    status: string;
}

export const initOrganization: IOrganization = {
    id: 0,
    ownerId: "",
    name: "",
    status: ""
}