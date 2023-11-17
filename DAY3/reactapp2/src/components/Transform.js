import { useState } from "react";
function Transform() {
    const [name, setName] = useState("Divya");
    const [count, setCount] = useState(0);
    const transformHandler = () => {
        let v=count;
        setCount(++v);
        if(count === 5) {
            if(name === "Divya")
            setName("Sri");
            else
            setName("Divya");
        }
    };
    return (
         <div>
            <h1>Toogle APP</h1>
            <hr></hr>
            <h2>{name}</h2>
            <button onClick={transformHandler}>Toogle</button>
         </div>
    );
}
export default Transform;