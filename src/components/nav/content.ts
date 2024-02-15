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
        to: "/services",
        icon: faReceipt,
        text: "Services"
    }
];

export const OptionContainersSupport = [
    {
        to: "/documentation",
        icon: faFileCode,
        text: "API Documentation"
    }
];