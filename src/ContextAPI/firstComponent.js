import React, { useState } from "react";
import SecondComponent from "./secondComponent";

const ExampleContext = React.createContext();

const FirstComponent = () => {
    const [penName, setPenName] = useState("Blue Gel Pen");
    return (  <div>
        <h1> First Component</h1>
        <ExampleContext.Provider value={{penName}}>
           <SecondComponent/>
        </ExampleContext.Provider>
    </div>
    );
}
 
export default FirstComponent;