import {
    ExpandIcon,
    HomePageBlock,
    HomePageBlockCentral,
    HomePageBlockCentralElementLeft,
    HomePageBlockCentralElementRight,
    HomePageBlockElement,
    HomePageBlockElementToApp,
    HomePageWrapper,
    HPBBody,
    HPBCBody,
    HPBCHeader,
    HPBHeader,
    HPBHeaderText,
    HPBHeaderToApp
} from "./styles";

import HPBCBodyAppointmentsElement
    from "../../components/home-components/HPBC/Appointment/HPBCBodyAppointmentsElement.tsx";
import HPBCBodyOrganizationsElement
    from "../../components/home-components/HPBC/Organization/HPBCBodyOrganizationsElement.tsx";

import {HPBlocks, mPO, rA} from "./content.ts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faRoute, faExpand } from '@fortawesome/free-solid-svg-icons'

import Chart from "../../components/home-components/Chart";
import theme from "../../styles/theme.ts";
import {nanoid} from "@reduxjs/toolkit";
import {useNavigate} from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    return (
      <HomePageWrapper>
          {HPBlocks.map(block =>
              <HomePageBlock key={nanoid()}>
                  { block.map(element =>
                  <HomePageBlockElement key={nanoid()} to={element.to}>
                      <HPBHeader>
                          <HPBHeaderText>
                            {element.text}
                          </HPBHeaderText>
                          <FontAwesomeIcon style={{marginRight: "20px"}} icon={faSliders}></FontAwesomeIcon>
                      </HPBHeader>
                      <HPBBody>
                          {Chart((Math.random() * 70 + 20) % 100, 100, element.statuses)}
                          {/*<ElIcon icon={element.icon}></ElIcon>*/}
                      </HPBBody>
                  </HomePageBlockElement>
                  )}
                  { block.length == 2 ?
                  <HomePageBlockElementToApp to="https://github.com/HealthQuire">
                      <HPBHeaderToApp>
                          <HPBHeaderText style={{borderColor: theme.colors.accentTwo, color: "white"}}>
                              Open HealthQuire
                          </HPBHeaderText>
                      </HPBHeaderToApp>
                      <HPBBody style={{flexDirection: "column"}}>
                          <FontAwesomeIcon style={{marginRight: "23px", fontSize: "40px"}}
                                           icon={faRoute}></FontAwesomeIcon>
                          <div style={{marginTop: "20px"}}>https://github.com/HealthQuire</div>
                      </HPBBody>
                  </HomePageBlockElementToApp>
                  : null
                  }
              </HomePageBlock>
          )}
          <HomePageBlockCentral>
              <HomePageBlockCentralElementLeft>
                  <HPBCHeader>
                      <HPBHeaderText>
                          Recently added appointments
                      </HPBHeaderText>
                      <ExpandIcon onClick={() => navigate("/appointments")} icon={faExpand}/>
                  </HPBCHeader>
                  <HPBCBody>
                      {rA.map((element) =>
                          HPBCBodyAppointmentsElement(element)
                      )}
                  </HPBCBody>
              </HomePageBlockCentralElementLeft>
              <HomePageBlockCentralElementRight>
                  <HPBCHeader>
                      <HPBHeaderText>
                          Recently added organizations
                      </HPBHeaderText>
                      <ExpandIcon onClick={() => navigate("/organizations")} icon={faExpand}/>
                  </HPBCHeader>
                  <HPBCBody>
                      {mPO.map((element) =>
                          HPBCBodyOrganizationsElement(element)
                      )}
                  </HPBCBody>
              </HomePageBlockCentralElementRight>
          </HomePageBlockCentral>
      </HomePageWrapper>
  );
}