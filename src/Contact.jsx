import React, { useState } from 'react';

const Contact = () => {
    const [data, setdata] = useState({
        fullName: "",
        phone: "",
        email: "",
        msg: ""
    })
    const inputEvent = (event) =>{
        let value = event.target.value;
        let name = event.target.name;
        setdata((predata) =>{
            return ({
               ...predata,
                [name] : value
            })
        })
    }
    const formSubmit = (e) =>{
		e.preventDefault();
		alert(`${data.fullName}`)
		setdata(() =>{
			return {
				fullName: "",
				phone: "",
				email: "",
				msg: ""
			}
		})
        
    }
	return (
		<>
			<div className='my-5'>
				<h1 className='text-center'>Contact Us</h1>
			</div>
			<div className='container contact_div'>
				<div className='row'>
					<div className='col-md-6 col-10 mx-auto'>
						<form onSubmit={formSubmit}>
							<div className='mb-3'>
								<label for='Input1' className='form-label'>
									FullName
								</label>
								<input
									type='text'
									className='form-control'
									placeholder='Enter your name'
									name='fullName'
									value={data.fullName}
									onChange={inputEvent}
								/>
							</div>
							<div className='mb-3'>
								<label for='Input1' className='form-label'>
									Phone
								</label>
								<input
									type='number'
									className='form-control'
									placeholder='mobile number'
									name='phone'
									value={data.phone}
									onChange={inputEvent}
								/>
							</div>
							<div className='mb-3'>
								<label for='Input1' className='form-label'>
									Email address
								</label>
								<input
									type='email'
									className='form-control'
									placeholder='enter your email id'
									name='email'
									value={data.email}
									onChange={inputEvent}
								/>
							</div>
							<div className='mb-3'>
								<label for='Textarea' className='form-label'>
									Message
								</label>
								<textarea
									className='form-control'
									name='msg'
									rows='3'
									value={data.msg}
									onChange={inputEvent}></textarea>
							</div>
							<div className='mb-3'>
								<button type='submit' className='btn btn-outline-primary'>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
