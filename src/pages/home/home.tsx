import {
    HomePageBlock,
    HomePageBlockCentral,
    HomePageBlockCentralElementLeft,
    HomePageBlockCentralElementRight,
    HomePageBlockElement, HomePageBlockElementHQ,
    HomePageHeader, HomePageHeaderBox,
    HomePageWrapper
} from "./styles";
import theme from "../../styles/theme.ts";

export default function Home() {
  return (
      <HomePageWrapper>
          <HomePageHeader>
              <HomePageHeaderBox>
                  <p>Home </p>
                  <h1 style={{color : theme.colors.accentTwo}}>ADD LOGIN AND REGISTRATION</h1>
              </HomePageHeaderBox>
          </HomePageHeader>
          <HomePageBlock>
              <HomePageBlockElement >
                  Organizations
              </HomePageBlockElement>
              <HomePageBlockElement>
                  Doctors
              </HomePageBlockElement>
              <HomePageBlockElement>
                  Clients
              </HomePageBlockElement>
          </HomePageBlock>
          <HomePageBlock>
              <HomePageBlockElement>
                  Appointments
              </HomePageBlockElement>
              <HomePageBlockElement >
                  Cards
              </HomePageBlockElement>
              <HomePageBlockElementHQ>
                  Open HealthQuire
              </HomePageBlockElementHQ>
          </HomePageBlock>
          <HomePageBlockCentral>
              <HomePageBlockCentralElementLeft>
                  recent appointments
              </HomePageBlockCentralElementLeft>
              <HomePageBlockCentralElementRight>
                  top popular medicine centers
              </HomePageBlockCentralElementRight>
          </HomePageBlockCentral>
      </HomePageWrapper>
  );
}