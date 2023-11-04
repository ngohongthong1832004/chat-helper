
import "../../scss/_message.scss"

interface MessageProps {
    message?: string;
    time?: string;
    myMessage? : boolean;
    imgUrl?: string;
    linkUrl?: string;
}

const Message = ({ message, time, myMessage, imgUrl, linkUrl } : MessageProps) => {
    return (
        <div className={`message${myMessage ? "__me" : ""}`}>
            { !myMessage && <div className="message-left">
                <img src="https://picsum.photos/50/50" alt="" />
            </div>}
            <div className="message-right">
                <p className="message-content">
                    {message}
                    { linkUrl && <button className="message-btn">
                        <a href={linkUrl} className="message-btn-text">Click me</a>
                    </button> } 
                    <span className="message-info-time">{time}</span>
                </p>
                { imgUrl && <img className="message-img" src={imgUrl} alt="" /> }
            </div>
        </div>
    )
}

export default Message;