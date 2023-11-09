import { useState } from 'react';

import '../../scss/_chatHelper.scss';
import '../../scss/main.scss';
import '../../scss/_variables.scss'
import '../../scss/animations/_zoom.scss'

import ButtonLogoChat from './ButtonLogoChat';
import BoxChat from './BoxChat';


interface ChatHelperProps {
    config?: any;
    brandUrl?: string;
    position?: string;
    brandName? : string;
}

const ChatHelper = ({ config, brandUrl, position, brandName } : ChatHelperProps) => {


    const [showChat, setShowChat] = useState<boolean>(false);
    const handleShowChat = (showChat : boolean) => {
        setShowChat(showChat);
    }
    

    return (
        <div className={`chat-helper chat-helper--${position}`}>
            { 
                showChat ? 
                <BoxChat config = {config} brandUrl={brandUrl ?  brandUrl : ""} brandName = {brandName} isShowChat = {showChat} handleShowChat = {handleShowChat}  /> 
                : 
                <ButtonLogoChat config = {config} brandUrl={brandUrl ?  brandUrl : ""} isShowChat = {showChat} handleShowChat = {handleShowChat}  />  
            }
        </div>
    )
}

export default ChatHelper;