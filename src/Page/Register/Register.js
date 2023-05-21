import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Auth/AuthProvider';
import useTitle from '../../Hook/UseTitle';

const Register = () => {
  useTitle("Register")
  const{ createUser, updateProfileUser}=useContext(AuthContext)

  const location = useLocation();
  const navigate = useNavigate();
  
const from= location.state?.from?.pathname || '/'
const handleRegister=event=>{
  event.preventDefault()
  const form= event.target
  const name= form.name.value
  const photoURL= form.photoUrl.value
 const email= form.email.value
 const password= form.password.value

 console.log(name, photoURL, email, password);
 createUser(email, password)
 .then(result=>{
  const user= result.user
  console.log(user);
  form.reset()
  Swal.fire({
    imageUrl: 'https://i.ibb.co/6w4FFdc/119257-blue-successful-login.gif',
    imageHeight: 150,
    title: 'Register Success',
    imageAlt: 'A tall image'
  })
  navigate(from ,{replace: true})
 

  handleUpdateProfile(name, photoURL)
 
 })
 .catch(e=>{
 const msg= e.message
 Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: `${msg}`,
  
})
  

 })
}
  
const handleUpdateProfile=(name, photoURL)=>{

  const profile={
      displayName:name,
      photoURL: photoURL
  }
 updateProfileUser(profile) 
  .then()
  .catch(e=> console.error(e))
}
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000" className='grid lg:grid-cols-2 mx-auto lg:p-20'>
          <div>
            <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" alt='' className='' src='https://i.ibb.co/cJzFnnQ/animation-640-lhsot7e4.gifhttps://i.ibb.co/RC3Nq0S/38435-register.gif'></img>
          </div>
             <form onSubmit={handleRegister} className="flex flex-col gap-4 lg:mt-10 p-5">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="name1"
        value="Your Name"
      />
    </div>
    <TextInput
      id="name1"
      type="text"
      placeholder="Enter Your name"
      required={true}
      shadow={true}
      name='name'
     
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email2"
        value="Your email"
      />
    </div>
    <TextInput
      id="email2"
      type="email"
      placeholder="name@rahul.dev.com"
      required={true}
      shadow={true}
      name='email'
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="photo1"
        value="Your Photo Url"
      />
    </div>
    <TextInput
      id="photo1"
       required={true}
      shadow={true}
      name='photoUrl'
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password2"
        value="Your password"
      />
    </div>
    <TextInput
      id="password2"
      type="password"
      required={true}
      shadow={true}
      name='password'
    />
  </div>
  
  <div className="flex items-center gap-2">
   
    <Label htmlFor="agree">
      Already Have Acoount 
      <Link
        t="/login"
        className="text-blue-600 hover:underline dark:text-blue-500 ml-1"
      >
        Login Now
      </Link>
    </Label>
  </div>
  <Button type="submit">
    Register new account
  </Button>
             </form>
        </div>
    );
};

export default Register;