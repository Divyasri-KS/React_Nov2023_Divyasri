import React,{ useState } from "react";
function Message() {
    const [showmessage, setShowMessage] = useState(false);
    const message = () => {
        setShowMessage(!showmessage);
    };
    return (
        <div>
            <h1>Dashboard</h1>
            <hr></hr>
            <button onClick ={message}>{showmessage ? "Hide Message" : "show Message"}
            </button>
            {showmessage && <p>Hi! How are You !!!</p>}
        </div>
    );
}
export default Message;