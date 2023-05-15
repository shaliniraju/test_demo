//ways to call an api
// 1.js request function
// 2. fetch function(js ES6 concept)
// 3. can use axios library (we use this)
//Note : whenever you call an api, do the ERROR HANDLING

import axios from 'axios';

const URL = "http://localhost:8002";


export const addUser = async (data)=>{
try{
return await axios.post(`${URL}/add`,data)
} catch(error){
    console.log("error while calling add user api",error);
}
}

export const getUsers = async ()=> {
    try{
    return await axios.get(`${URL}/all`)
    }
    catch(error){
        console.log("Error while calling getUsers API ",error);
    }
}

export const getUser = async (id)=>{
    try{
      return await axios.get(`${URL}/${id}`);
    }catch(error){
        console.log("Error while calling getUser API ",error);
    }
}

export const editUser = async (user , id) => {
  try{
     return await axios.put(`${URL}/${id}`,user);
  }
  catch(error){
    console.log("error while calliing editUser API ",error);
  }
}

export const deleteUser = async (id) =>{
    try{
    return await axios.delete(`${URL}/${id}`);
    }catch(error){
        console.log("error while calling deleteuser API ",error);
    }
}