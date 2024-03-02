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
            statuses: ["used", "unused"],
            icon: faBriefcase
        }
    ]
];