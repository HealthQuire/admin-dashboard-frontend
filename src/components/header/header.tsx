import {HomePageHeader, HomePageHeaderBox, HomePageHeaderLogout} from "./styles.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {useLocation, useNavigate} from "react-router-dom";

const title: { [name: string]: string } = {
    "": "Home",
    "organizations": "Organizations",
    "doctors": "Doctors",
    "clients": "Clients",
    "appointments": "Appointments",
    "managers": "Managers"
};

export default function Header() {

    const location = useLocation();
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("hq_id")
        navigate("/login")
    }

    return(
        <HomePageHeader>
            <HomePageHeaderBox>
                <p>{title[location.pathname.split('/')[1]]}</p>
                <HomePageHeaderLogout onClick={() => logout()}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
                </HomePageHeaderLogout>
            </HomePageHeaderBox>
        </HomePageHeader>
    )
}
