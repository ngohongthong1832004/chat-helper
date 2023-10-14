import React, { useState } from "react";
import "./App.css";

import ChatHelper from "../../src/components/ChatHelper";

export const  App:React.FC = () => {
    const [isHook, setIsHook] = useState(0);
    return (
        <div className="main">
            <h1>Example Chat-helper</h1>
            <h2>{isHook}</h2>
            <button onClick={() => setIsHook(isHook + 1)}>Add 1 +</button>
            <ChatHelper />
        </div>
    );
}