import { useState , useEffect } from 'react'
import './App.css'
import UsersForm from './Components/UsersForm'
import UsersList from './Components/UsersList'
import axios from 'axios'
import swal from "sweetalert"




function App() {
  const [listUsers, setListUsers] = useState([])
  const [userSelected , setUserSelected]= useState(null)

  useEffect(()=>{
    getAllUsers()
  },[])

  const getAllUsers=()=>{
    axios
    .get("https://users-crud.academlo.tech/users/")
    .then(resp=>setListUsers(resp.data))
    .catch(error=>console.log(error))
  }

  const addUser = newUser=>{
    axios
    .post("https://users-crud.academlo.tech/users/" , newUser)
    .then(()=>{
      getAllUsers()
      swal({
      title: "Usuario Agregado Exitosamente" , 
      icon: "success", 
      timer: "500"

      })
      setUserSelected(undefined)
    })
    .catch(error=>console.error(error))

  }

  const deleteUser = idUser =>{

    swal({
      title : "Estas Eliminando" , 
      icon : "warning", 
      buttons : ["No" , "Si"]
      }).then(respuesta=>{
             if(respuesta){
                axios
               .delete(`https://users-crud.academlo.tech/users/${idUser}/`)
               .then(()=>{
                getAllUsers()
 
      })
        .catch(error=> console.error(error))
      
      swal({text: "El usuario se ha borrado",
            icon:"success"})
              }else{
                    setUserSelected(undefined)
                   }
  })}

  const selectUser = user=>{
    console.log()
    setUserSelected(user)
  }

  const editUser = user=>{

    axios
    .put(`https://users-crud.academlo.tech/users/${user.id}/`,user)
    .then(()=> {
      getAllUsers()
      setUserSelected(null)
    })
    .catch(error=>console.error(error))

  }

  return (
    <main className='container'>
      <UsersForm
      addUser={addUser}
      userSelected={userSelected}
      editUser={editUser}
      />
      <UsersList
      usersList={listUsers}
      deleteUser={deleteUser}
      selectUser={selectUser}
      />
     
     
     
    </main>
  )
}

export default App
