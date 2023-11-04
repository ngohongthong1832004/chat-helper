import {useRef, useEffect} from 'react';

import '../../scss/_BodyChatBox.scss';
import DefaultMessage from './DefaultMessage';
import Message from './Message';

const BodyChatBox = () => {

    const bodyChatBox = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (bodyChatBox.current) {
            bodyChatBox.current.scrollTop = bodyChatBox.current.scrollHeight;
        }
    }
    , [])

    return (
        <div className="body-chat-box" ref = { bodyChatBox }>
            <DefaultMessage message='Can I help you !!!' time='15:64' optionsInfo={["hello", "wherewherewherewherewhere", "hello thie la ghe qua di khong biet lam may cai nay", "testchioitestchioitesttestchioitestchioitest"]}/>
            <Message myMessage = {true} message='hello asdkjsadk kjasndk ' time='15:64'/>
            <Message myMessage = {true} message='hello asdkjsadk kjasndk asdkjsadk kjasndk asdkjsadk kjasndk ' time='15:64'/>
            <Message message='hello asdkjsadk kjasndk ' time='15:64'/>
            <Message imgUrl = {"https://picsum.photos/350/1500"} message='hello as asdkjsadk kjasndk asdkjsadk kjasndk ' time='15:64'/>
            <Message imgUrl = {""} message='hello asdkjsadk kjasndk asdkjsadk kjasndk ' time='15:64'/>
            <Message imgUrl = {""} message='hello asdkjsadk kjasndk asdkjsadk kjasndk ' time='15:64'/>
            <Message imgUrl = {"data:image/jpeg;base64,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"} linkUrl = {"/age"} message='hello asdkjsadk kjasndk asdkjsadk kjasndk asdjsah ' time='15:64'/>
        </div>
    )
}

export default BodyChatBox;