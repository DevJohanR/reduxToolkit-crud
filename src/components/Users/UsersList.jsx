import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import axios from "axios";
import { fetchUsers } from "../redux/usersSlice";
const UsersList = ()=>{
    const users = useSelector(state=> state.usersList)
    const dispatch = useDispatch();
 
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                dispatch(fetchUsers(res.data))
            })
            .catch(err => console.error(err));
    }, [dispatch])
    

    return(
        <>
       <h2>Lista de usuarios de JSON PlaceHolder</h2>
       <ul>
      {
       users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })
      
      }
        <li>
            Usuarios
        </li>
       </ul>
        </>
    )
}

export default UsersList;