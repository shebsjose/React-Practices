import React, { useState, useContext } from "react";

//FIRST COMPONENT
const TeacherContext = React.createContext();
const LastBench = () => {
  const [penName, setPenName] = useState("Blue Gel Pen");
  return (
    <>
      <h1>Hello I am Last Bench</h1>
      <br />
      <TeacherContext.Provider value={{ penName }}>
        <NextBench />
      </TeacherContext.Provider>
    </>
  );
};

//SECOND COMPONENT
const NextBench = () => {
  return (
    <>
      <h1>Hello I am Next Bench.</h1>
      <FirstBench />
    </>
  );
};

//THIRD COMPONENT
const FirstBench = () => {

    const { penName } = useContext(TeacherContext);

  return (
    <>
      <h1>Hey I am First Bench</h1>
      <h4>{penName} Here i got My Pen</h4>
    </>
  );
};

export default LastBench;