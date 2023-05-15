import { useState } from "react";
import { addUser } from "../service/api";
import {useNavigate} from 'react-router-dom';

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

const AddUser = () => {

    const [user , setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e)=>{
        console.log(e.target.name ,e.target.value);
        setUser({...user,[e.target.name] :e.target.value});
        console.log(user);
      }
    
    const addUserDetails = async () =>{
        //call api
        await addUser(user);
        navigate('/all');
    }

      
    return (
        <Container>
            <Typography variant="h4">Add Product</Typography>
            <FormControl>
              <InputLabel>Product ID</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name ="ProductId"/>
            </FormControl>
            <FormControl>
              <InputLabel>Product Name</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name ="ProductName"/>
            </FormControl>
            <FormControl>
              <InputLabel>Price</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name ="Price"/>
            </FormControl>
            <FormControl>
              <InputLabel>Quantity</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name ="Quantity"/>
            </FormControl>
            <FormControl>
              <InputLabel>Brand</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name ="Brand"/>
            </FormControl>
            <FormControl>
              <Button variant="contained" onClick={()=>addUserDetails()}>Add</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;