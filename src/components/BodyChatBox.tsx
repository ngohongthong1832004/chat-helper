
import '../../scss/_BodyChatBox.scss';
import Message from './Message';

const BodyChatBox = () => {
    return (
        <div className="body-chat-box">
            <Message message='helloasdkjsadkkjasndkkjasdkjasdkjasdhkjasdkajsdhkjasdhelloasdkjsadkkjasndkkjasdkja8◘sdkjasdhkjasdkajsdhkjasdhelloasdkjsadkkjasndkkjasdkjasdkjasdhkjasdkajsdhkjasd' time='15:64'/>
            <Message myMessage = {true} message='hello asdkjsadk kjasndk ' time='15:64'/>
            <Message message='hello aasdasjd asdb  kajsdhkjasd ' time='15:64'/>
            <Message myMessage = {true} message='hello asdkjsadk kjasndk' time='15:64'/>
            <Message message='hello ' time='15:64'/>
            <Message myMessage = {true} message='hello' time='15:64'/>
            <Message message='hello asdkjsadk kjasndk kjasdkjasd kjasdhkjasd kajsdhkjasd ' time='15:64'/>
            <Message message='hello asdkjsadk kjasndk kjasdkjasd kjasdhkjasd kajsdhkjasd ' time='15:64'/>
            <Message message='hello asdkjsadk kjasndk kjasdkjasd kjasdhkjasd kajsdhkjasd ' time='15:64'/>
            <Message message='hello asdkjsadk kjasndk kjasdkjasd kjasdhkjasd kajsdhkjasd ' time='15:64'/>
        </div>
    )
}

export default BodyChatBox;