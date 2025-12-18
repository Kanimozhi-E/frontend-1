import{useNavigate} from "react-router-dom"
import{useState} from "react"
import {createStudent} from "../api";  

function AddStudent(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("")
    const navigate=useNavigate();//hook

    const submit=async(e)=>{
        e.preventDefault();
        await createStudent({name,email});
        navigate("/");
    };
    return(
        <>
        <h2>Add Student</h2>
        <form onSubmit={submit}>
            <label>Name</label>
            <input required value={name} onChange={e=>setName(e.target.value)}/>
            <label>Email</label>
            <input required value={email} onChange={e=>setEmail(e.target.value)}/>
            <button>Save</button>
        </form>
        </>
    )
}
export default AddStudent;