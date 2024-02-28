import {
    faHospital,
    faUserDoctor,
    faUsers,
    faCalendarCheck,
    faBriefcase
} from '@fortawesome/free-solid-svg-icons'

export const OptionContainers = [
    {
        to: "/organizations",
        icon: faHospital,
        text: "Organizations"
    },
    {
        to: "/managers",
        icon: faBriefcase,
        text: "Managers"
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
    }
];