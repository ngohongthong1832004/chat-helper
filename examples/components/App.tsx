import React, { useState } from "react";
import "./App.css";

import ChatHelper from "../../src/components/ChatHelper";

export const  App:React.FC = () => {
    return (
        <div className="main">
            <h1>Example Chat-helper</h1>
            <ChatHelper 
                // brandUrl="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            />
        </div>
    );
}