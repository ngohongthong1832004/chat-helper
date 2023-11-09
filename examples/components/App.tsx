import React, { useState } from "react";
import "./App.css";

import ChatHelper from "../../src/components/ChatHelper";
import { ConfigChatHelper } from "../../src/utils/ReadConfid";

export const  App:React.FC = () => {

    return (
        <div className="main">
            <ChatHelper 
                config={ ConfigChatHelper() }
                position="bottom-right"
                brandName = "Google 2"
                brandUrl="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            />
        </div>
    );
}