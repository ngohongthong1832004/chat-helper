import { useState } from 'react';

import '../../scss/_chatHelper.scss';
import '../../scss/main.scss';

import ButtonLogoChat from './ButtonLogoChat';
import BoxChat from './BoxChat';

const ChatHelper = () => {

    const [showChat, setShowChat] = useState(true);

    const handleShowChat = (showChat : boolean) => {
        setShowChat(showChat);
    }

    return (
        <div className='chat-helper'>
            { showChat ? <BoxChat isShowChat = {showChat} handleShowChat = {handleShowChat}  /> : <ButtonLogoChat isShowChat = {showChat} handleShowChat = {handleShowChat} />  }
        </div>
    )
}

export default ChatHelper;