
import "../../scss/_message.scss"

interface MessageProps {
    message?: string;
    time?: string;
    myMessage? : boolean;
    optionsInfo?: any;
}

const DefaultMessage = ({ message, time, optionsInfo, myMessage = false } : MessageProps) => {
    return (
        <div className={`message${myMessage ? "__me" : ""}`}>
            { !myMessage && <div className="message-left">
                <img src="https://picsum.photos/50/50" alt="" />
            </div>}
            <div className="message-right">
                <p className="message-content">
                    { message }
                    <span className="message-info-time">{time}</span>
                </p>
                { optionsInfo && <div className="message-info-options">
                        <div className="row">
                            {
                                optionsInfo.map((option: any, index: number) => {
                                    return (
                                        <div className="col-6" key={index}>
                                            <button className="button-info-options">{option}</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }   
            </div>
        </div>
    )
}

export default DefaultMessage;