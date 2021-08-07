import React from 'react'

import { Container, HashTag, Title, Separator, Description} from './styles'

const ChannelInfo: React.FC = () => {
    return(
       <Container>
           <HashTag />

           <Title>Geral</Title>

           <Separator/>

           <Description>Chat Geral  :D</Description>
       </Container>
    )
};

export default ChannelInfo;