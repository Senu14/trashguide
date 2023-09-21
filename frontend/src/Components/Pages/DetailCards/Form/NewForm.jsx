import axios from "axios";
import { Link } from 'react-router-dom';
import style from'./NewForm.module.scss';
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../App/AuthProvider/Auth";




const NewForm = () => {
	const { loginData } = useAuth()
	const { register, handleSubmit, formState: { errors } } = useForm()
	const { event_id } = useParams()

const formSubmit = async formObject => {
	const api_endpoint = 'http://localhost:3000/reservations'


     const formData = new URLSearchParams()
		formData.append('event_id', event_id)
		formData.append('firstname', formObject.firstname)
		formData.append('email', formObject.email)
          formData.append('Telefon', formObject.Telefon)
		formData.append('address', formObject.address)
		formData.append('zipcode', formObject.zipcode)
		formData.append('city', formObject.city)
		
		
		//console.log(...formData);

	const options = {
		headers: {
			Authorization: `Bearer ${loginData.access_token}`,
		},
		}

	try {
		const result = await axios.post(api_endpoint, formData, options)
		if(result.data) {
		    console.log(result.data);
		}
	} catch (error) {
		   console.error(error)
	}
	}

	return (
		<div className={style.NewOne}>
			<form onSubmit={handleSubmit(formSubmit)}>
				<div>
					<label htmlFor="firstname"></label>
					<input id="firstname" placeholder="NAME" {...register('firstname', 
							{ 
								required: 'Please write your name', 
								pattern: { 
									value: /^[A-Za-z]+$/i, 
									message: 'Enter a valid name'
								}  
							})} />
					{errors.firstname && <span className={style.focuse}>{errors.firstname.message}</span>}
				</div>



                    <div>
					<label htmlFor="email"></label>
					<input id="email"  placeholder="EMAIL" {...register('email', 
							{ 
								required: 'Please write your email',
								pattern: { 
									value: /^\S+@\S+$/, 
									message: 'Enter a valid email address'	
								},

							})} />
					{errors.email && <span className={style.focuse}>{errors.email.message}</span>}
				</div>


                    <div>
					<label htmlFor="telefon"></label>
					<input id="telefon"  placeholder="TELEFON" {...register('address', 
							{ 
								required: 'Please write your phone nr'
							})} />
					{errors.address && <span className={style.focuse}>{errors.address.message}</span>}
				</div>
		

				

				<div>
					<label htmlFor="address"></label>
					<input id="address" placeholder="ADDRESS" {...register('address', 
							{ 
								required: 'Please write your addresse'
							})} />
					{errors.address && <span className={style.focuse}>{errors.address.message}</span >}
				</div>

				<div>
					<label htmlFor="zipcode"></label>
					<input id="zipcode" placeholder="ZIPCODE" {...register('zipcode', 
							{ 
								required: 'Please write your Zip code',
								pattern: { 
									value: /^[0-9]+$/i, 
									message: 'please enter a valid zip code'									
								},					

							})} />
					{errors.zipcode && <span className={style.focuse}>{errors.zipcode.message}</span>}
				</div>

				<div>
					<label htmlFor="city"></label>
					<input id="city" placeholder="CITY" {...register('city', 
							{ 
								required: 'please enter a city name'
							})} />
					{errors.city && <span className={style.focuse}>{errors.city.message}</span>}
				</div>	

						

				<div>
					<button className={style.cuteB}>
					<Link to={`/`}>
					Send
					</Link>
					</button>
				</div>
			</form>
		</div>
	)
}

export default NewForm