import { useEffect , useState} from "react";
import axios from "axios";


function Axiosget() {
    const [employees, setEmployees] =useState([]);
    useEffect(()=> {
        axios
        .get('http://localhost:3002/users')
        .then((res)=> {
            setEmployees(res.data)
        })
        .catch((err)=> {
            console.log(err);
        });
    },[]);
     return (
        <div>
            <h1>Axios</h1>
            <ul>
                {employees.map((employee) => (
                <li key={employee.id}>{employee.name}</li>
                ))}
            </ul>
        </div>
     );
}
export default Axiosget;