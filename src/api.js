import axios from "axios"
const API="http://localhost:5000/api/students";
export const getStudents=async()=>axios.get(API);//export const getStudents=async()=>axios.get(`${API}/getadddata`);
export const createStudent =(data)=>axios.post(API,data)
export const deleteStudent=(id)=>axios.delete(`${API}/${id}`)
export const getStudent=(id)=>axios.get(`${API}/${id}`) 
export const updateStudent=(id,data)=>axios.put(`${API}/${id}`,data)    