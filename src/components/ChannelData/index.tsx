import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current;

    if (div){
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);
  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
            <ChannelMessage author="Syü" 
            date="06/05/2021" content="aurora - full performance is my religion"/>
        ))}
        
        <ChannelMessage author="One Táxi" 
        date="06/05/2021" hasMention isBot content={
          <>
            <Mention>@Syü</Mention>, Life Could Be A Dream
          </>
        }/>

        <ChannelMessage author="Phersya" 
        date="06/05/2021" content="aurora - full performance is my religion"/>
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversarem #Geral" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;