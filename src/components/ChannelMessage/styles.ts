import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 4px 16px;
  margin-right: 4px;

  background-color: transparent;

  &.mention {
    background-color: rgba(153, 0, 0, 0.2);
    border-left: 2px solid crimson;

    padding-left: 14px;
  }

  & + div {
    margin-top: 13px;
  }
`;


export const Avatar = styled.div`
  width: 40px;
  height: 40px;

  background-color: var(--secondary);
  border-radius: 50%;

  &.bot {
    background-color: crimson;
  }
`;


export const Message = styled.div`
  min-height: 40px;
  display: flex;

  flex-direction: column;
  justify-content: space-between;

  margin-left: 17px;
`;


export const Header = styled.div`
  display: flex;
  align-items: center;

  > strong {
    color: #fff;
    font-size: 16px;
  }

  > span{
    margin-left: 6px;

    background-color: crimson;
    color: #fff;
    border-radius: 4px;
    padding: 4px 5px;

    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }

  > time {
    margin-left: 6px;
    color: var(--gray);
    font-size: 13px;
  }
`;


export const Content = styled.div`
  text-align: left;
  font-size: 16px;
  color: #fff;
`;

export const Mention = styled.span`
  color: #99004d;
  cursor: pointer;

  &:hover{
    text-decoration: underline;
  }
`;


