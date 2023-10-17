
import "../../scss/_message.scss"

interface MessageProps {
    message?: string;
    time?: string;
    myMessage? : boolean;
    isImg?: boolean;
}

const Message = ({ message, time, myMessage, isImg } : MessageProps) => {
    return (
        <div className={`message${myMessage ? "__me" : ""}`}>
            { !myMessage && <div className="message-left">
                <img src="https://picsum.photos/50/50" alt="" />
            </div>}
            <div className="message-right">
                <p className="message-content">
                    {message}
                    <span className="message-info-time">{time}</span>
                </p>
                { isImg && <img className="message-img" src="https://picsum.photos/1250/2350" alt="" /> }
            </div>
        </div>
    )
}

export default Message;