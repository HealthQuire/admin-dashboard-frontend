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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faHome } from '@fortawesome/free-solid-svg-icons'

import { OptionContainers, OptionContainersSupport} from "./content.ts";
import {nanoid} from "@reduxjs/toolkit";


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
                    MAIN
                </HeaderUnName>
                <OptionContainer to="">
                    <LeftWall/>
                    <NonActiveZone>
                        <OptionBody>
                            <FontAwesomeIcon style={optionIconStyle} icon={faHome} />
                            <p>Home</p>
                        </OptionBody>
                    </NonActiveZone>
                </OptionContainer>
                <HeaderUnName>
                    WORKSHOPS
                </HeaderUnName>
                <HeaderBox>
                    {OptionContainers.map(option =>
                        <OptionContainer key={nanoid()} to={option.to}>
                            <LeftWall/>
                            <NonActiveZone>
                                <OptionBody>
                                    <FontAwesomeIcon style={optionIconStyle} icon={option.icon} />
                                    <p>{option.text}</p>
                                </OptionBody>
                            </NonActiveZone>
                        </OptionContainer>
                    )}
                </HeaderBox>
                <HeaderUnName>
                    SUPPORT
                </HeaderUnName>
                <HeaderBox>
                    {OptionContainersSupport.map(option =>
                        <OptionContainer key={nanoid()} to={option.to}>
                            <LeftWall/>
                            <NonActiveZone>
                                <OptionBody>
                                    <FontAwesomeIcon style={optionIconStyle} icon={option.icon} />
                                    <p>{option.text}</p>
                                </OptionBody>
                            </NonActiveZone>
                        </OptionContainer>
                    )}
                </HeaderBox>
            </HeaderTop>
            <HeaderBottom to="https://github.com/HealthQuire">
                <FontAwesomeIcon style={arrowIconStyle} icon={faAnglesRight} />
                <a>HealthQuire</a>
            </HeaderBottom>
        </HeaderWrapper>
    );
}
