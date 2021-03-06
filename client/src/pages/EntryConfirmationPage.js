import React from 'react';
import styled from '@emotion/styled';
import UniversalButton from '../components/UniversalButton';
import EntryConfirmationCard from '../components/EntryConfirmationCard';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageTitle from '../components/PageTitle';
import { useLocation } from 'react-router-dom';

const Origamibird = styled.img`
  height: 65px;
  width: 85px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 34px;
`;

function EntryConfirmationPage(props) {
  const location = useLocation();
  return (
    <PageWrapperCenterSpEvenly {...props}>
      <WrapperTitleBird>
        <PageTitle>Thank you!</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      <EntryConfirmationCard></EntryConfirmationCard>
      <ButtonContainer>
        <UniversalButton to="/new" active={location.pathname === '/new'}>
          Back
        </UniversalButton>
      </ButtonContainer>
    </PageWrapperCenterSpEvenly>
  );
}

export default EntryConfirmationPage;
