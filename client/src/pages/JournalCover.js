import React from 'react';
import styled from '@emotion/styled';
import JournalLabel from '../components/JournalLabel';
import washitapegreenvert from '../../public/images/washitapegreentexturevert.png';
import washitapebluehor from '../../public/images/washitapebluevert.png';
import washitapegreenhappy from '../../public/images/maskingtapebehappy.png';
import paperclipclover from '../../public/images/paperclipclover.png';
import TreeIcon from '../components/TreeIcon';
import orangesplash1 from '../../public/images/orangesplash1.png';

const CoverPageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: ${props => props.theme.colors.background};
`;

const JournalCoverBackground = styled.div`
  height: 667px;
  width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  background-color: ${props => props.theme.colors.primary};
  align-self: center;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 12px 12px 11px 0px rgba(99, 164, 183, 0.8);
`;

const WashiTapeImgGreenVertical = styled.img`
  height: 98px;
  width: 50px;
  object-fit: cover;
  position: absolute;
  margin-top: none;
  margin-left: 45px;
  overflow: hidden;
`;

const WashiTapeImgBlueHorizontal = styled.img`
  height: 45px;
  width: 270px;
  object-fit: cover;
  position: absolute;
  margin-top: 450px;
  margin-left: -20px;
  overflow: hidden;
`;

const WashiTapeImgGreenHappy = styled.img`
  height: 40px;
  width: 210px;
  object-fit: cover;
  position: absolute;
  margin-top: 430px;
  margin-left: 0px;
  overflow: hidden;
`;

const PaperclipClover = styled.img`
  height: 90px;
  width: 100px;
  position: absolute;
  margin-top: 417px;
  margin-left: 135px;
`;

const SpecialHomeButton = styled.button`
  height: 62px;
  width: 62px;
  background: transparent;
  border: none;
  outline: none;
  &:active {
    fill: ${props => props.theme.colors.tertiary};
  }

  &:hover {
    fill: ${props => props.theme.colors.tertiary};
  }
`;

const SplashOrange = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 25px;
  align-items: center;
  height: 154px;
  width: 154px;
  position: absolute;
  margin-top: 450px;
  margin-left: 222px;
  opacity: 0.9;
  background-image: url(${orangesplash1});
  background-origin: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

function JournalCover(props) {
  return (
    <CoverPageWrapper>
      <JournalCoverBackground>
        <WashiTapeImgGreenVertical src={washitapegreenvert} />
        <JournalLabel />
        <WashiTapeImgBlueHorizontal src={washitapebluehor} />
        <WashiTapeImgGreenHappy src={washitapegreenhappy} />
        <PaperclipClover src={paperclipclover} />
        <SplashOrange>
          <SpecialHomeButton {...props}>
            <TreeIcon />
          </SpecialHomeButton>
        </SplashOrange>
      </JournalCoverBackground>
    </CoverPageWrapper>
  );
}

export default JournalCover;