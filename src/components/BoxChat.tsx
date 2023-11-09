import '../../scss/_boxChat.scss';
import BoxInput from './BoxInput';
import CloseButton from './CloseButton';
import BodyChatBox from './BodyChatBox';
import { IconBrandDefault } from './Icon';


interface BoxChatProps {
    config?: any;
    handleShowChat: (isShowChat: boolean) => void;
    isShowChat: boolean;
    brandUrl?: string;
    brandName?: string;
}

const BoxChat = ({config, handleShowChat, isShowChat, brandName, brandUrl} : BoxChatProps ) => {
    console.log(config)
    return (
        <div className='box-chat'>
            <div className='header'>
                <div className='header-left'>
                    { brandUrl ? <img src={brandUrl} alt="logo" /> : <IconBrandDefault />}
                    {brandName && <h3>{brandName}</h3>}
                </div>
                <CloseButton isShowChat = {isShowChat} handleShowChat = {handleShowChat} />
            </div>
            <BodyChatBox />
            <BoxInput />
        </div>
    )
}

export default BoxChat;