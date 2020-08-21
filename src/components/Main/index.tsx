import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return(
    <Container>
        <Header>
            <button>
                <BackIcon />
            </button>

            <ProfileInfo>
                <strong>Augusto Neves</strong>
                <span>822 Tweets</span>
            </ProfileInfo>
        </Header>
        {/* <PofilePage />  */}

        {/* <BottomMenu>
            <HomeIcon />
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
        </BottomMenu> */}
    </Container>
  );
}

export default Main;