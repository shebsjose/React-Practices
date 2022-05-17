import { useContext } from "react";

const ThirdComponent = () => {
    const { penName } = useContext(ExampleContext)
    return (  
        <div>
            <h1> Third Component</h1>
            <h3>Here i got the pent through useContext. {penName}</h3>
        </div>
    );
}
 
export default ThirdComponent;