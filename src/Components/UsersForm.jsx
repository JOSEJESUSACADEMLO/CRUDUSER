import { useForm } from "react-hook-form"
import { useEffect } from "react"






const UsersForm =({addUser , userSelected , editUser})=>{

    const{register , handleSubmit , reset}= useForm()

    useEffect(()=>{
        if(userSelected!=null){
            reset(userSelected)
        }else{
            reset({
                first_name : "" , 
                last_name : "" , 
                password : "" , 
                email : "" , 
                birthday : ""
            })
        }

    },[userSelected])
    
    
    const submit = data =>{
        console.log(data)
        if(userSelected!=null){
            editUser(data)
        }else{
            addUser(data)
        }

        
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <div className="titles">
                 <h1>Registrar</h1>
                 { <img src="./agregar-usuario.png" alt="" className="imagin"/>}
          
            </div>
            
            <div className="input-container">
               <label htmlFor="f-name">Nombre :</label>
               <input
                type="text"
                id="f-name"
                {...register("first_name",{required : true})}
               /> 
            </div>
            
            <div className="input-container">
                <label htmlFor="l-name">Apellido Paterno :</label>
                <input
                type="text"
                id="l-name"
                {...register("last_name",{required : true})}
                />
            </div>

            <div className="input-container">
                <label htmlFor="pass">Password :</label>
                <input
                type="password"
                id="pass"
                {...register("password",{required : true})}
                 />
            </div>
            
            <div className="input-container">
                <label htmlFor="email">Email :</label>
                <input
                type="text"
                id="email"
                {...register("email",{required : true})}
                />
            </div>
             
            <div className="input-container">
                <label htmlFor="birthday">Cumpleaños :</label>
                <input
                type="date"
                id="birthday"
                value="2023-07-10"
                {...register("birthday",{required : true})}
                 />
            </div> 
            <button className="btn-ok">Registrar</button>
            
             
        </form>
    ) 
}

export default UsersForm