import React,{useState, useContext} from 'react'
import { AuthContext } from './AuthcontextProvider'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {login} = useContext(AuthContext);
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const result = await login(email, password);
        if (result.success){
            navigate("/");
        }
        else{
            alert(result.message);
        }
    };

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="email"
             placeholder='Enter your email id'
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             required
            />
            <input
             type='password'
             placeholder='Enter your password'
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
             required
            />
            <button type="submit">Submit</button>

        </form>
      
    </div>
  )
};

export default Login;
