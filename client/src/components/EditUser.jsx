import { useState, useEffect } from "react";
import { editUser , getUser } from "../service/api";
import {useNavigate, useParams} from 'react-router-dom';
//import { Link } from "react-router-dom";


import { FormGroup , FormControl, InputLabel, Input, Typography, styled, Button} from "@mui/material";

const Container = styled(FormGroup)`
   width : 50%;
   margin : 5% auto 0 auto;
   & > div {
    margin-top : 20px;
   }
`;

const defaultValue = {
    ProductId : "",
    ProductName : "",
    Price : "",
    Quantity : "",
    Brand :   ""

}    

const EditUser = () => {

    const [user , setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
      loadUserDetails();
    },[])

    const loadUserDetails = async ()=>{
      const response = await getUser(id);
      setUser(response.data);
    };

    const onValueChange = (e)=>{
        console.log(e.target.name ,e.target.value);
        setUser({...user,[e.target.name] :e.target.value});
        console.log(user);
      }
    
    const editUserDetails = async () =>{
        //call api
        await editUser(user,id);
        navigate('/all');
    }

      
    return (
        <Container>
            <Typography variant="h4">Edit</Typography>
            <FormControl>
              <InputLabel>Product ID</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name ="ProductId" value={user.ProductId}/>
            </FormControl>
            <FormControl>
              <InputLabel>Product Name</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name ="ProductName" value={user.ProductName}/>
            </FormControl>
            <FormControl>
              <InputLabel>Price</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name ="Price" value={user.Price}/>
            </FormControl>
            <FormControl>
              <InputLabel>Quantity</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name ="Quantity" value={user.Quantity}/>
            </FormControl>
            <FormControl>
              <InputLabel>Brand</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name ="Brand" value={user.Brand}/>
            </FormControl>
            <FormControl>
              <Button variant="contained" onClick={()=>editUserDetails()}>Edit</Button>
            </FormControl>
        </Container>
    )
}
export default EditUser;