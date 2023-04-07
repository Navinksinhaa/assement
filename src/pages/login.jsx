import logo from '../assets/logo.jpg'
import {React,useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const selected = localStorage.getItem('user');
        if(selected) {
            setEmail(selected.email);
            setPassword(selected.password);
        }
        navigate('/Fetch')
    }

  return (
    <>
        <div className='row d-flex justify-content-center align-item-center bg-warning'>
        <div className='col-6 d-flex justify-content-center bg-warning-emphasis'>
          <div className='col-6 d-flex' style={{ height: '0px', margin: '150px 0 0 0' }}>
            <form onSubmit={handleSubmit}>
              <h1 className='text-center'>Welcome Back</h1>
              
              <div className='d-flex justify-content-center my-2'>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Valid email' />
              </div>
              <div className='d-flex justify-content-center my-2'>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
              </div>
              
             
              <div className='d-flex justify-content-center my-2' style={{ margin: '0 100px' }}>
                <button type='submit' className='btn btn-primary'>Login</button> 
                
              </div>
              <div className='d-flex justify-content-center my-2'>
                <Link to="/register">Register</Link>
              </div>
            </form>
          </div>

        </div>


        <div className='col-6 d-flex justify-content-center bg-danger'>
          {/* <img src={logo} style={{width:'780px',height:'680px'}}alt="logo" /> */}
        </div>
      </div>
    
    
    </>
  )
}
export default Login