import {HomePageHeader, HomePageHeaderBox, HomePageHeaderLogout} from "./styles.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {useLocation} from "react-router-dom";

const title: { [name: string]: string } = {
    "": "Home",
    "organizations": "Organizations",
    "doctors": "Doctors",
    "clients": "Clients",
    "appointments": "Appointments",
    "services": "Services",
    "documentation": "API Documentation",
};

export default function Header() {

    const location = useLocation();

    return(
        <HomePageHeader>
            <HomePageHeaderBox>
                <p>{title[location.pathname.split('/')[1]]}</p>
                <HomePageHeaderLogout onClick={() => console.log("here will be logout")}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
                </HomePageHeaderLogout>
            </HomePageHeaderBox>
        </HomePageHeader>
    )
}
