import {
    faHospital,
    faUserDoctor,
    faUsers,
    faCalendarCheck,
    faReceipt,
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