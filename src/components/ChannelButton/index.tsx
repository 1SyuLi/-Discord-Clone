import React from 'react'

import { ContainerH, HashTag, InviteIcon, SettingsIcon } from './styles'

export interface Props {
    channelName: string;
    selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({
    channelName,
    selected,
}) => {
    return(
       <ContainerH className={selected ? 'active' : ''}>
           <div>
                <HashTag />
                <span>{channelName}</span>
           </div>

           <div>
                <InviteIcon />
                <SettingsIcon />
           </div>
       </ContainerH>
    )
};

export default ChannelButton;