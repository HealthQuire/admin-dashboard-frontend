import {
    HomePageBlock,
    HomePageBlockCentral,
    HomePageBlockCentralElementLeft,
    HomePageBlockCentralElementRight,
    HomePageBlockElement, HomePageBlockElementToApp,
    HomePageHeader, HomePageHeaderBox, HomePageHeaderLogout,
    HomePageWrapper, HPBBody, HPBCBody, HPBCBodyElement, HPBCHeader, HPBHeader, HPBHeaderText, HPBHeaderToApp
} from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faRoute, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'


import Chart from "../../components/home-components/Chart";
import { HPBlocks } from "./content.ts";
import theme from "../../styles/theme.ts";
import {nanoid} from "@reduxjs/toolkit";

export default function Home() {

    const logOut = () => {
        console.log("as")
    }

    const rA = [
        {
            name: "sd"
        },
        {
            name: "sd"
        },
        {
            name: "sd"
        },
        {
            name: "sd"
        },
        {
            name: "sd"
        },
    ]

    const mPO = [
        {
            name: "sd"
        },
        {
            name: "sd"
        },
        {
            name: "sd"
        },
        {
            name: "sd"
        },
        {
            name: "sd"
        },
    ]


    return (
      <HomePageWrapper>
          <HomePageHeader>
              <HomePageHeaderBox>
                  <p>Home</p>
                  <HomePageHeaderLogout onClick={logOut}>
                      <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
                  </HomePageHeaderLogout>
              </HomePageHeaderBox>
          </HomePageHeader>
          {HPBlocks.map(block =>
              <HomePageBlock key={nanoid()}>
                  {block.map(element =>
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
                  {
                      block.length == 2 ?
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
                  </HPBCHeader>
                  <HPBCBody>
                      {rA.map((element) =>
                          <HPBCBodyElement key={nanoid()}>
                              {element.name}
                          </HPBCBodyElement>
                      )}
                  </HPBCBody>
              </HomePageBlockCentralElementLeft>
              <HomePageBlockCentralElementRight>
                  <HPBCHeader>
                      <HPBHeaderText>
                          Most popular organizations
                      </HPBHeaderText>
                  </HPBCHeader>
                  <HPBCBody>
                      {mPO.map((element) =>
                          <HPBCBodyElement key={nanoid()}>
                              {element.name}
                          </HPBCBodyElement>
                      )}
                  </HPBCBody>
              </HomePageBlockCentralElementRight>
          </HomePageBlockCentral>
      </HomePageWrapper>
  );
}