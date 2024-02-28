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

import { HPBlocks } from "./content.ts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faRoute, faExpand } from '@fortawesome/free-solid-svg-icons'

import Chart from "../../components/home-components/Chart";
import theme from "../../styles/theme.ts";
import {nanoid} from "@reduxjs/toolkit";
import {useNavigate} from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    interface Appointment {
        id: string,
        clientFullName: string,
        serviceName: string,
        dt: Date,
        isConfirmed: boolean,
        avatarUrl: string
    }

    interface Organization {
        id: string,
        name: string,
        status: boolean,
        avatarUrl: string
    }

    const rA: Appointment[] = [
        {
            id: "1",
            clientFullName: "Client Jackson",
            serviceName: "Full observation",
            dt: new Date(),
            isConfirmed: true,
            avatarUrl: "/userDefault.avif"
        },
        {
            id: "2",
            clientFullName: "Bob Carti",
            serviceName: "Stomach check",
            dt: new Date(),
            isConfirmed: false,
            avatarUrl: "/userDefault.avif"
        },
        {
            id: "3",
            clientFullName: "Jennie O",
            serviceName: "Uzi",
            dt: new Date(),
            isConfirmed: true,
            avatarUrl: "/userDefault.avif"
        },
        {
            id: "4",
            clientFullName: "Benedikt Cumberbatch",
            serviceName: "Teeth check",
            dt: new Date(),
            isConfirmed: true,
            avatarUrl: "/userDefault.avif"
        },
        {
            id: "5",
            clientFullName: "Ivanov Ivan",
            serviceName: "Ear check",
            dt: new Date(),
            isConfirmed: false,
            avatarUrl: "/userDefault.avif"
        }
    ]

    const mPO: Organization[] = [
        {
            id: "1",
            name: "HealthQuired",
            status: true,
            avatarUrl: "/orgDefault.avif"
        },
        {
            id: "2",
            name: "MedHouse",
            status: true,
            avatarUrl: "/orgDefault.avif"
        },
        {
            id: "3",
            name: "GoAndHeal",
            status: true,
            avatarUrl: "/orgDefault.avif"
        },
        {
            id: "4",
            name: "HealthyHeart",
            status: false,
            avatarUrl: "/orgDefault.avif"
        },
        {
            id: "5",
            name: "FamilyTherapy",
            status: true,
            avatarUrl: "/orgDefault.avif"
        },
    ]


    return (
      <HomePageWrapper>
          {HPBlocks.map(block =>
              <HomePageBlock key={nanoid()}>
                  { block.map(element =>
                  <HomePageBlockElement key={nanoid()}>
                      <HPBHeader to={element.to}>
                          <HPBHeaderText>
                            {element.text}
                          </HPBHeaderText>
                          <FontAwesomeIcon style={{marginRight: "20px"}} icon={faSliders}></FontAwesomeIcon>
                      </HPBHeader>
                      <HPBBody>
                          {Chart(Math.floor(Math.random() * (300)), 300, element.statuses)}
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
                          <FontAwesomeIcon style={{marginRight: "23px", fontSize: "50px"}}
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
                          Recent appointments
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
                          Recent organizations
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