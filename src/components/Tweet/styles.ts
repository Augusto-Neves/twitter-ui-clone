import styled, { css } from 'styled-components';
import {Chat, Favorite, Retweet} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);
  max-width: 100%;
`;
export const Retweeted = styled.div`
    display: flex;
    align-items: center;

    font-size: 13px;
    color: var(--gray);
`;
export const RocketseatIcon = styled(Retweet)`
    width: 16px;
    height: 16px;

    margin-left: 35px;
    margin-right: 9px;

    > path{
        fill: var(--gray);
    }
`;
export const Body = styled.div`
    display: flex;
    margin-top: 3px;

    position: relative;     
`;
export const Avatar = styled.div`
    width: 49px;
    height: 49px;

    border-radius: 50%;
    flex-shrink: 0;
    background: var(--gray);

    position: absolute;
    top: 0;
    left: 0; 
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 2px;
    padding-left: 59px;
`;
export const Header = styled.div`

`;
export const Dot = styled.div`

`;
export const Description = styled.div`

`;
export const ImageContent = styled.div`

`;
export const Icons = styled.div`

`;
export const Status = styled.div`

`;

const IconCss = css`
    width: 19px;
    height: 19px;
`;

export const CommentIcon = styled(Chat)`
    ${IconCss}
`;
export const RetweetIcon = styled(Retweet)`
    ${IconCss}
`;
export const LikeIcon = styled(Favorite)`
    ${IconCss}
`;