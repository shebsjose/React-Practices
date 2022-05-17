import ThirdComponent from "./thirdComponent";

const SecondComponent = ({ penName }) => {
    return ( 
        <div>
            <h1>I'm the Second Component</h1>
            <ThirdComponent penName={penName}/>
        </div>
     );
}
 
export default SecondComponent;