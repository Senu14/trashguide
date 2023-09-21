import { useForm } from "react-hook-form";
import style from './LoginForm.scss';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../App/AuthProvider/Auth';
import { useState, useEffect } from "react";



const Log = () => {
  // Destructor loginData + setter fra useAuth
  const { loginData, setLoginData } = useAuth()
  // Destructor elementer fra useForm
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [userDetails, setUserDetails] = useState(null);

  /**
   * Kaldes når form submittes
   * Samler form input values og kalder API endpoint med et POST request
   * @param {object} form Form som javascript objekt 
   */
  const onSubmit = async form => {
    // Samler data med URLSearchParams API
    const formData = new URLSearchParams()
    formData.append("username", form.username)
    formData.append("password", form.password)

    try {
      // Kalder API
      const result = await axios.post("http://localhost:4000/login",formData)
      console.log("the data is ", result)
      if(result.data) {
        // Gemmer json retursvar i sessionstorage
        sessionStorage.setItem("token", JSON.stringify(result.data))
        // Skriver json retursvar til tilstandsvariabel loginData
        setLoginData(result.data)
      }
    } catch (error) {
      console.log(`Kunne ikke logge ind: ${error}`);
    }
  }
  
  console.log("the form of it is ",loginData)
  useEffect(() => {
    // Fetch user details when loginData changes or when component mounts
    if (loginData ) {
      fetchUserDetails(loginData.user_id);
    }
  }, [loginData]);

  const fetchUserDetails = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:4000/users/${userId}`);
      console.log('User details response:', response.data);
      setUserDetails(response.data); // Assuming the API response contains user details
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  }

  /**
   * Kaldes ved klik på logout knap
   */
  const Logout = () => {
    // Fjerner login info fra session storage
    sessionStorage.removeItem("token")
    // Nulstiller tilstandsvariabel
    setLoginData("")
  }

  return (
    <div className="New-Form">
    {/* Using ternary operator */}
    {!loginData  ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="email" ></label>
                <input  placeholder="E-mail" 
                {...register('email', { required: true })} />
    
                {errors.email && <span className="error">
                  Please write your Email</span>}
            </div>
       
            <div>
                <label htmlFor="Password"></label>
                <input  placeholder="Password" 
                {...register('password', { required: true })} />
    
                {errors.password && <span className="error">
                  Please enter your Password</span>} 
            </div>
            
            <div className="sb">
            <button type="submit">LOGIN</button>
          </div>
        </form>
      ) : (
        // Vis logindata hvis bruger er logget ind
        <div className="Profile">
          {userDetails ? (
            <p>{`You are logged in as: ${userDetails.email} ${userDetails.password}`}</p>
            
          ):(
            <p>loading data</p>
          )}

          <div className="B1">
    <button onClick={Logout}>
      <Link to={`/`}>LOGOUT</Link>
    </button>
  </div>

  
        </div>
      )
      }
    </div>
  )
}

export default Log;