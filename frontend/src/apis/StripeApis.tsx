import axios from "axios";

export  const createPaymentIntent:any = async(data:any)=>{

    try {

        const response= await axios.post("http://localhost:8000/payment-sheet",data)
        console.log(response,"response")
    } catch (error) {
        console.log(error)
        
    }

}