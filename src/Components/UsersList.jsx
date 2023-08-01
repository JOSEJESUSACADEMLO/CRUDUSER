

const UsersList =({usersList , deleteUser , selectUser})=>{

   
    return(
        <section className="users-box">
            <div className="titles">
                 <h1>Usuarios</h1>
                 { <img src="./grupo.png" alt="" className="imagin"/>}

            </div>
           
            <ul>
            {
                usersList?.map(user=>(
                    <li key={user.id} className="font-li">
                       <h3>{user.first_name}{" "}{user.last_name}</h3>
                       <h3>{user.email}</h3>
                       <h3>{user.birthday}</h3>

                       <section className="btn-section">
                       <button className="btn-drop"
                       
                       onClick={()=>deleteUser(user.id)}
                       ></button>
                       <button className="btn-edit"
                       onClick={()=>selectUser (user)}>
                        
                       </button>
                       </section>
                     
                    </li>
                ))
            }
            </ul>
        </section>
    )
}
export default UsersList