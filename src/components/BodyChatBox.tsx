
import '../../scss/_BodyChatBox.scss';
import DefaultMessage from './DefaultMessage';
import Message from './Message';

const BodyChatBox = () => {
    return (
        <div className="body-chat-box">
            <DefaultMessage message='Can I help you !!!' time='15:64' optionsInfo={["hello", "wherewherewherewherewhere", "hello thie la ghe qua di khong biet lam may cai nay", "testchioitestchioitesttestchioitestchioitest"]}/>
            <Message myMessage = {true} message='hello asdkjsadk kjasndk ' time='15:64'/>
            <Message myMessage = {true} message='hello asdkjsadk kjasndk ' time='15:64'/>
            <Message message='hello asdkjsadk kjasndk ' time='15:64'/>
            {/* <Message message='helloasdkjsadkkjasndkkjasdkjasdkjasdhkjasdkajsdhkjasdhelloasdkjsadkkjasndkkjasdkja8◘sdkjasdhkjasdkajsdhkjasdhelloasdkjsadkkjasndkkjasdkjasdkjasdhkjasdkajsdhkjasd' time='15:64'/>
            <Message myMessage = {true} message='hello asdkjsadk kjasndk ' time='15:64'/>
            <Message message='hello aasdasjd asdb  kajsdhkjasd ' time='15:64'/>
            <Message myMessage = {true} message='hello asdkjsadk kjasndk ' time='15:64'/>
            <Message message='hello aasdasjd asdb  kajsdhkjasd ' time='15:64'/>
            <Message myMessage = {true} message='hello asdkjsadk kjasndk' time='15:64'/>
            <Message myMessage = {true} message='hello asdkjsadk kjasndk hello asdkjsadk kjasndk hello asdkjsadk kjasndkhello asdkjsadk kjasndk' time='15:64'/>
            <Message myMessage = {true} message='hello asdkjsadk kjasndk hello asdkjsadk kjasndk hello asdkjsadk kjasndkhello asdkjsadk kjasndk' time='15:64'/> */}
        </div>
    )
}

export default BodyChatBox;