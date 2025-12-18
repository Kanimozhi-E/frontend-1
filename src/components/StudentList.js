import { useEffect,useState } from "react";
import {getStudents} from "../api";
import{Link} from "react-router-dom";
import { deleteStudent } from "../api";

function StudentList(){
    const[students,setStudents]=useState([]);
    const loadStudents=()=>{
        getStudents().then(res=>setStudents(res.data));
    };
    useEffect(()=>{
        loadStudents();
    },[]);
    const removeStudent=async(rollno)=>{
        await deleteStudent(rollno)
        loadStudents();
    };
    return(
        <div>
        <h2>Student List</h2>
        <Link to="/add" >Add Student</Link>
        <table border='2'>

        <thead>
            <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                students.map(s=>(
                    <tr key={s.rollno}>
                        <td>{s.rollno}</td>
                        <td>{s.name}</td>
                        <td>{s.email}</td>
                        <td>
                            <Link to={`/edit/${s.rollno}`}>Edit</Link>
                            <button onClick={()=>removeStudent(s.rollno)}>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
        </table>
        </div>
    );
}
export default StudentList;