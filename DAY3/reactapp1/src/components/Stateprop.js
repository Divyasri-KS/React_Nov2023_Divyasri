import { useState } from "react";

function Stateprop () {

    const [name, setName] = useState("Divya");
    const [num, setNum] = useState(12);
    const [Student, setStudent] = useState({name:"MillieBobbyBrown",num:15});

    const nameHandler = () => {

        setName("Mike");
    };
    const numberHandler = () => {

        let value = num;
        setNum(++value);
    };
    const StudentHandler = () => {
    
        let v=Student.num;
        setStudent({name:"Sri",num:++v});
    };
    return (
          
        <div>
            <h1>State & props</h1><hr></hr>
            <h2> Hi {name} </h2>   
            <h2>Number is {num}</h2> 
            <h2>Student name is <u>{Student.name}</u> and age is {Student.num}</h2> 
            <button onClick={nameHandler}>ChangeName</button><space></space>
            <button onClick={numberHandler}>Change Number</button><br></br>
            <button onClick={StudentHandler}>Change_Name</button>
             </div>
    );

}
export default Stateprop;