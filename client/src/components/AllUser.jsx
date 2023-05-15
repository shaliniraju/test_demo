import { useEffect , useState} from 'react';
import {Table ,TableHead, TableBody, TableRow, TableCell, styled, Button} from '@mui/material';
import { getUsers , deleteUser } from '../service/api';
import {Link} from 'react-router-dom';

const StyledTable = styled(Table)`
width : 90%;
margin : 50px auto 0 auto;
`
const Thead = styled(TableRow) `
background : #000000;
& > th {
    color : #fff;
    font-size : 20px;
}`

const Tbody = styled(TableRow)`
& > td{
    font-size :20px;
}`
const AllUser = ()=>{

    const [users , setUsers] = useState([]);

    useEffect(()=>{
       getAllUsers();
    } , []);

    const getAllUsers = async ()=>{
        let response = await getUsers();
        setUsers(response.data);
        //console.log(response.data);
    }

    const deleteUserDetails = async(id)=>{
      await deleteUser(id);
      getAllUsers();
      
    }

    return (
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>sl.no</TableCell>
                    <TableCell>Product Id</TableCell>
                    <TableCell>Produce Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Brand</TableCell>
                    <TableCell></TableCell>

                    

                </Thead>
            </TableHead>
            <TableBody>
              {
                users.map(user => (
                    <Tbody key={user._id}>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.ProductId}</TableCell>
                        <TableCell>{user.ProductName}</TableCell>
                        <TableCell>{user.Price}</TableCell>
                        <TableCell>{user.Quantity}</TableCell>
                        <TableCell>{user.Brand}</TableCell>
                        <TableCell>
                            <Button variant='contained' style={{marginRight : 10}} component ={Link} to={`/edit/${user._id}`}>Update</Button>
                            <Button variant='contained' color='secondary' onClick={()=>deleteUserDetails(user._id)}>Delete</Button>
                        </TableCell>



                    </Tbody>
                ))
              }
            </TableBody>
        </StyledTable>
    )
}

export default AllUser;