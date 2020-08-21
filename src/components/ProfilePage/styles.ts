import styled, { css } from 'styled-components';
import {LocationOn, Cake} from '../../styles/Icons'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 100%;
    overflow-y: auto;

    scrollbar-width: none; /* Firefox  and Chrome*/
    ::-webkit-scrollbar {
        display: none;        
    }
`;
export const Banner = styled.div`
    flex-shrink: 0;

    width: 100%;
    height: min(33vw, 199px);

    background: var(--twitter);
    position: relative;
`;
export const Avatar = styled.div``;
export const ProfileData = styled.div``;

const IconCss = css`
    width: 20px;
    height: 20px;

    color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`${IconCss}`;
export const CakeIcon = styled(Cake)`${IconCss}`;

export const FollowAge = styled.div``;