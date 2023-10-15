import '../../scss/_boxChat.scss';
import BoxInput from './BoxInput';
import CloseButton from './CloseButton';
import BodyChatBox from './BodyChatBox';


interface BoxChatProps {
    handleShowChat: (isShowChat: boolean) => void;
    isShowChat: boolean;
}

const BoxChat = ({handleShowChat, isShowChat} : BoxChatProps ) => {
    return (
        <div className='box-chat'>
            <div className='header'>
                <div className='header-left'>
                    <img src="https://picsum.photos/50/50" alt="logo" />
                    <h3>Chat helper</h3>
                </div>
                <CloseButton isShowChat = {isShowChat} handleShowChat = {handleShowChat} />
            </div>
            <BodyChatBox />
            <BoxInput />
        </div>
    )
}

export default BoxChat;