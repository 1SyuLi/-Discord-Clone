import React from 'react'

import { Container, Category, AddCategoryIcon } from './styles'
import ChannelButton from '../ChannelButton'

const ChannelList: React.FC = () => {
    return(
       <Container>
           <Category>
               <span>CANAIS DE TEXTO</span>
               <AddCategoryIcon />
           </Category>

           <ChannelButton channelName="Bem-Vindo"/>
           <ChannelButton channelName="Geral"/>
           <ChannelButton channelName="Bot"/>
           <ChannelButton channelName="Jogos-Gratis"/> 
       </Container>
    )
};

export default ChannelList;