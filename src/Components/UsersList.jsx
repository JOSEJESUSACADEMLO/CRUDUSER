

const UsersList =({usersList , deleteUser , selectUser})=>{

   
    return(
        <section>
            <div className="titles">
                 <h1>Usuarios</h1>
                 { <img src="./grupo.png" alt="" className="imagin"/>}

            </div>
           
            <ul>
            {
                usersList?.map(user=>(
                    <li key={user.id}>
                       <h3>{user.first_name}{" "}{user.last_name}</h3>
                       <h3>{user.email}</h3>
                       <h3>{user.birthday}</h3>

                       <button
                       
                       onClick={()=>deleteUser(user.id)}
                       >Eliminar</button>
                       <button
                       onClick={()=>selectUser (user)}>
                        Editar
                       </button>
                    </li>
                ))
            }
            </ul>
        </section>
    )
}
export default UsersList