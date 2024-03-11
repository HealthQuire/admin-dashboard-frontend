export interface IOrganization {
    id: string;
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
    id: "",
    ownerId: "",
    name: "",
    status: ""
}