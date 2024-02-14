import {
    faHospital,
    faUserDoctor,
    faUsers,
    faCalendarCheck,
    faReceipt,
    faFileCode,
} from '@fortawesome/free-solid-svg-icons'

export const OptionContainers = [
    {
        to: "/organizations",
        icon: faHospital,
        text: "Organizations"
    },
    {
        to: "/doctors",
        icon: faUserDoctor,
        text: "Doctors"
    },
    {
        to: "/clients",
        icon: faUsers,
        text: "Clients"
    },
    {
        to: "/appointments",
        icon: faCalendarCheck,
        text: "Appointments"
    },
    {
        to: "/cards",
        icon: faReceipt,
        text: "Cards"
    }
];

export const OptionContainersSupport = [
    {
        to: "/notimplemented",
        icon: faFileCode,
        text: "API Documentation"
    }
];