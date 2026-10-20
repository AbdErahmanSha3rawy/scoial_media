import axios from "axios";
import toast from "react-hot-toast";

export function register(formData,navigate) {
   
 axios.post(
        "https://tarmeezacademy.com/api/v1/register",
        formData
    )    
     .then((response) => {


           toast.success('register successfully !');

setTimeout(()=>{
        navigate("/login");
},1000);
       

        })
        .catch((error) => {
            console.log(error.response.data);
        });




}