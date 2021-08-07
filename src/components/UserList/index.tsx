import React from 'react'

import { Container, Role, User, Avatar } from './styles'

interface UserProps{
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot }) => {
    return(
        <User>
            <Avatar className={isBot ? 'Bot' : ''}/>

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
};

const UserList: React.FC = () => {
    return(
       <Container>
           <Role>Disponível - 1</Role>
           <UserRow nickname="Syü" />

           <Role>Offline - 18</Role>
           <UserRow nickname="One táxi" isBot/>
           <UserRow nickname="Phersya" isBot/>
           <UserRow nickname="Sqnt"/>
           <UserRow nickname="Ratt" />
           <UserRow nickname="Nshk" />
           <UserRow nickname="Second" />
           <UserRow nickname="Random" />
           <UserRow nickname="Random" />
           <UserRow nickname="Random" />
           <UserRow nickname="Random" />
           <UserRow nickname="Random" />
           <UserRow nickname="Random" />
           <UserRow nickname="Random" />
           <UserRow nickname="Random" />
           <UserRow nickname="Random" />
           <UserRow nickname="Random" />
           <UserRow nickname="Random" />
       </Container>
    )
};

export default UserList;