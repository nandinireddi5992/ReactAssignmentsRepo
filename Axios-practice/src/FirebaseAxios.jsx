import axios from "axios";

function FirebaseAxios(){

    const newStudent={
        name: "Ani",
        course:"React",
        age:27

    };
     useEffect(()=>{
    axios.post("/student.json",newStudent)
    .then(response=>Console.log("Data added sucessfully",response.data))
    })
return (
    <h2>Student data is being added...</h2>
)

}
export default FirebaseAxios;