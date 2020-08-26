import React from 'react';
import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  FollowAge, 
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined> Editar Perfil </EditButton> 
        <h1>Augusto Neves</h1>
        <h2>@augusto_neves</h2>

        <p>Desenvolvedor Frontend</p>

        <ul>
          <li>
            <LocationIcon />
            Petrolina, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 09 de Março de 1995
          </li>
        </ul>
        <FollowAge>
          <span>
            Seguindo <strong>100</strong>
          </span>
          <span>
            <strong>1M </strong>Seguindores
          </span>
        </FollowAge>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
