import React, { useState } from "react";
import SecondComponent from "./secondComponent";

const FirstComponent = () => {
    const [penName, setPenName] = useState("Blue Gel Pen");
    return ( 
        <div>
            <h1>I'm the First Component</h1>
            <SecondComponent penName={penName}/>
        </div>
     );
}
 
export default FirstComponent;