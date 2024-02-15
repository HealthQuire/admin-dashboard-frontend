import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faHome } from '@fortawesome/free-solid-svg-icons'
import { OptionContainers, OptionContainersSupport} from "./content.ts";
import {nanoid} from "@reduxjs/toolkit";

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
    NonActiveZone,
    optionIconStyle,
    arrowIconStyle
} from "./styles";

export default function Nav() {

    return (
        <HeaderWrapper>
            <HeaderTop>
                <HeaderTitleContainer to="/">
                    <HeaderTitle>
                        <img style={{width: "30px", height: "30px"}} alt="AP" src="/logo.png"/>
                        <Title>HealthQuire AP</Title>
                    </HeaderTitle>
                </HeaderTitleContainer>
                <HeaderUnName>
                    MAIN
                </HeaderUnName>
                <HeaderBox>
                    <OptionContainer to="">
                        <LeftWall/>
                        <NonActiveZone>
                            <OptionBody>
                                <FontAwesomeIcon style={optionIconStyle} icon={faHome} />
                                <p>Home</p>
                            </OptionBody>
                        </NonActiveZone>
                    </OptionContainer>
                </HeaderBox>
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
                HealthQuire
            </HeaderBottom>
        </HeaderWrapper>
    );
}
