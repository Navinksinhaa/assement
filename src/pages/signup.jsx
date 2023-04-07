import {React, useState} from 'react'
import logo from '../assets/logo.jpg'
import {useNavigate } from 'react-router-dom'


const Signup = () => {
  const navigate = useNavigate();
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [profession, setProfession] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        let creds = { name,email,password,phone,profession }

            localStorage.setItem('user', JSON.stringify(creds))
           navigate('/login')
    }

  return (
    <section>
        <div className='row d-flex justify-content-center align-item-center bg-warning'>
        <div className='col-6 d-flex justify-content-center bg-warning-emphasis'>
          <div className='col-6 d-flex bg-white' style={{ height: '450px', margin: '70px 0 0 0',padding:'20px' }}>
            <form onSubmit={handleSubmit}>
              <h1 className='text-center'>Welcome To Geeksynergy</h1>
              <div className='d-flex justify-content-center my-2'>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
              </div>
              <div className='d-flex justify-content-center my-2'>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Valid email' />
              </div>
              <div className='d-flex justify-content-center my-2'>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
              </div>
              <div className='d-flex justify-content-center my-2'>
                <input type='phone' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter your Phone' />
              </div>
              <div className='d-flex justify-content-center my-4'>
              <label>Choose a profession:</label>
                    <select value={profession} onChange={ (e) => setProfession(e.target.value)}>
                    <option value="">Select an Option</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Scientist" >Scientist</option>
                    <option value="Athlete" >Athlete</option>
                    <option value="Actor" >Actor</option>
                    </select>
              </div>
              <div className='form-check form-check-inline d-flex justify-content-center my-2'>
                <input type='checkbox' />
                <label>I accept Terms of Use</label>
              </div>
              <div className='d-flex justify-content-center my-2' style={{ margin: '0 100px' }}>
                <button type='submit' className='btn btn-primary'>Register Now</button>
              </div>
            </form>
          </div>

        </div>


        <div className='col-6 d-flex justify-content-center'>
          <img src={logo} style={{width:'750px',height:'700px'}} alt="logo" />
        </div>
      </div>
    </section>
  )
}
export default Signup