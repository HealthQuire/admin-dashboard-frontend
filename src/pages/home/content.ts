import {faBriefcase, faCalendarCheck, faHospital, faUserDoctor, faUsers} from "@fortawesome/free-solid-svg-icons";

export const HPBlocks = [
    [
        {
            text: "Organizations",
            to: "/organizations",
            statuses: ["opened", "closed"],
            icon: faHospital
        },
        {
            text: "Doctors",
            to: "/doctors",
            statuses: ["active", "inactive"],

            icon: faUserDoctor
        },
        {
            text: "Clients",
            to: "/clients",
            statuses: ["active", "inactive"],
            icon: faUsers
        }
    ],
    [
        {
            text: "Appointments",
            to: "/appointments",
            statuses: ["current", "past"],
            icon: faCalendarCheck
        },
        {
            text: "Managers",
            to: "/managers",
            statuses: ["active", "inactive"],
            icon: faBriefcase
        }
    ]
];

export interface Appointment {
    id: string,
    clientFullName: string,
    serviceName: string,
    dt: Date,
    isConfirmed: boolean,
    avatarUrl: string
}

export interface Organization {
    id: string,
    name: string,
    status: boolean,
    avatarUrl: string
}

export const rA: Appointment[] = [
    {
        id: "1",
        clientFullName: "Client Jackson",
        serviceName: "Full observation",
        dt: new Date(),
        isConfirmed: true,
        avatarUrl: "/userDefault.avif"
    },
    {
        id: "2",
        clientFullName: "Bob Carti",
        serviceName: "Stomach check",
        dt: new Date(),
        isConfirmed: false,
        avatarUrl: "/userDefault.avif"
    },
    {
        id: "3",
        clientFullName: "Jennie O",
        serviceName: "Uzi",
        dt: new Date(),
        isConfirmed: true,
        avatarUrl: "/userDefault.avif"
    },
    {
        id: "4",
        clientFullName: "Benedikt Cumberbatch",
        serviceName: "Teeth check",
        dt: new Date(),
        isConfirmed: true,
        avatarUrl: "/userDefault.avif"
    },
    {
        id: "5",
        clientFullName: "Ivanov Ivan",
        serviceName: "Ear check",
        dt: new Date(),
        isConfirmed: false,
        avatarUrl: "/userDefault.avif"
    }
]

export const mPO: Organization[] = [
    {
        id: "1",
        name: "HealthQuired",
        status: true,
        avatarUrl: "/orgDefault.avif"
    },
    {
        id: "2",
        name: "MedHouse",
        status: true,
        avatarUrl: "/orgDefault.avif"
    },
    {
        id: "3",
        name: "GoAndHeal",
        status: true,
        avatarUrl: "/orgDefault.avif"
    },
    {
        id: "4",
        name: "HealthyHeart",
        status: false,
        avatarUrl: "/orgDefault.avif"
    },
    {
        id: "5",
        name: "FamilyTherapy",
        status: true,
        avatarUrl: "/orgDefault.avif"
    },
]