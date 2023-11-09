
import '../../scss/_buttonLogoChat.scss';
import { IconClose, IconBrandDefault } from './Icon.tsx';

interface ButtonLogoChatProps {
    config?: any;
    handleShowChat: (isShowChat: boolean) => void;
    isShowChat: boolean;
    brandUrl?: string;
}

const ButtonLogoChat = ({config, handleShowChat, isShowChat, brandUrl }: ButtonLogoChatProps) => {
    console.log(config)
    return (
        <button className='button-logo-chat' onClick={() => handleShowChat(!isShowChat)}>
            {  brandUrl ? <img className='brandImg' src={brandUrl} alt="logo" />
            : <IconBrandDefault />}
        </button>
    );
};

export default ButtonLogoChat;