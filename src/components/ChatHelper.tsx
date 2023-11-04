import { useState } from 'react';

import '../../scss/_chatHelper.scss';
import '../../scss/main.scss';
import '../../scss/_variables.scss'
import '../../scss/animations/_zoom.scss'

import ButtonLogoChat from './ButtonLogoChat';
import BoxChat from './BoxChat';


interface ChatHelperProps {
    brandUrl?: string;
}

const ChatHelper = ({brandUrl} : ChatHelperProps) => {


    const [showChat, setShowChat] = useState<boolean>(false);
    const handleShowChat = (showChat : boolean) => {
        setShowChat(showChat);
    }

    return (
        <div className='chat-helper'>
            { 
                showChat ? 
                <BoxChat isShowChat = {showChat} handleShowChat = {handleShowChat}  /> 
                : 
                <ButtonLogoChat brandUrl={brandUrl ?  brandUrl : ""} isShowChat = {showChat} handleShowChat = {handleShowChat} />  
            }
        </div>
    )
}

export default ChatHelper;