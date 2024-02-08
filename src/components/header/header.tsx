import {
    HeaderBox,
    HeaderTitle,
    HeaderWrapper,
    Title,
    HeaderTitleContainer,
    OptionContainer,
    OptionBody,
    HeaderUnName,
    HeaderTop,
    HeaderBottom,
    LeftWall,
    NonActiveZone
} from "./styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHospital,
    faUserDoctor,
    faUsers,
    faCalendarCheck,
    faReceipt,
    faContactBook,
    faFileCode,
    faAnglesRight
} from '@fortawesome/free-solid-svg-icons'


const optionIconStyle = {
    marginRight: "10px",
    fontSize: "15px",
    width: "20px"
}

const arrowIconStyle = {
    fontSize: "13px",
    width: "20px",
    marginRight: "7px"
}


export default function Header() {

    return (
        <HeaderWrapper>
            <HeaderTop>
                <HeaderTitleContainer to="/">
                    <HeaderTitle>
                        <img style={{width: "30px", height: "30px"}} alt="AP" src="/img.png"/>
                        <Title>HealthQuire AP</Title>
                    </HeaderTitle>
                </HeaderTitleContainer>
                <HeaderUnName>
                    NAVIGATION
                </HeaderUnName>
                <HeaderBox>
                    <OptionContainer to="/organizations">
                        <LeftWall/>
                        <NonActiveZone>
                            <OptionBody>
                                <FontAwesomeIcon style={optionIconStyle} icon={faHospital} />
                                <p>Organizations</p>
                            </OptionBody>
                        </NonActiveZone>
                    </OptionContainer>
                    <OptionContainer to="/doctors">
                        <LeftWall/>
                        <NonActiveZone>
                            <OptionBody>
                                <FontAwesomeIcon style={optionIconStyle} icon={faUserDoctor} />
                                <p>Doctors</p>
                            </OptionBody>
                        </NonActiveZone>
                    </OptionContainer>
                    <OptionContainer to="/clients">
                        <LeftWall/>
                        <NonActiveZone>
                            <OptionBody>
                                <FontAwesomeIcon style={optionIconStyle} icon={faUsers} />
                                <p>Clients</p>
                            </OptionBody>
                        </NonActiveZone>
                    </OptionContainer>
                    <OptionContainer to="/appointments">
                        <LeftWall/>
                        <NonActiveZone>
                            <OptionBody>
                                <FontAwesomeIcon style={optionIconStyle} icon={faCalendarCheck} />
                                <p>Appointments</p>
                            </OptionBody>
                        </NonActiveZone>
                    </OptionContainer>
                    <OptionContainer to="/cards">
                        <LeftWall/>
                        <NonActiveZone>
                            <OptionBody>
                                <FontAwesomeIcon style={optionIconStyle} icon={faReceipt} />
                                <p>Cards</p>
                            </OptionBody>
                        </NonActiveZone>
                    </OptionContainer>
                </HeaderBox>
                <HeaderUnName>
                    SUPPORT
                </HeaderUnName>
                <HeaderBox>
                    <OptionContainer to="/aы">
                        <LeftWall/>
                        <NonActiveZone>
                            <OptionBody>
                                <FontAwesomeIcon style={optionIconStyle} icon={faFileCode} />
                                <p>Documentation</p>
                            </OptionBody>
                        </NonActiveZone>
                    </OptionContainer>
                    <OptionContainer to="/sd">
                        <LeftWall/>
                        <NonActiveZone>
                            <OptionBody>
                                <FontAwesomeIcon style={optionIconStyle} icon={faContactBook} />
                                <p>Contacts</p>
                            </OptionBody>
                        </NonActiveZone>
                    </OptionContainer>
                </HeaderBox>
            </HeaderTop>
            <HeaderBottom to="https://github.com/HealthQuire">
                <FontAwesomeIcon style={arrowIconStyle} icon={faAnglesRight} />
                <a>HealthQuire</a>
            </HeaderBottom>
        </HeaderWrapper>
    );
}
