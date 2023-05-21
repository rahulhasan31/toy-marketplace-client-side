
import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Auth/AuthProvider';
import useTitle from '../../Hook/UseTitle';



const Login = () => {
    useTitle("Login")
    const { loginWithEmail, googleSignIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        loginWithEmail(email, password)
            .then(result => {
                const user = result.user

                console.log(user);
                Swal.fire({
                    imageUrl: 'https://i.ibb.co/6w4FFdc/119257-blue-successful-login.gif',
                    imageHeight: 150,
                    title: 'Login Success',
                    imageAlt: 'A tall image'
                })
                navigate(from, { replace: true })
            })
            .catch(e => {
                const msg = e.message
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${msg}`,

                })
            })
    }
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {

                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
                Swal.fire(
                    'Login Success',
                    'You clicked the button!',
                    'success'
                )
            })
            .catch(e => {  const msg = e.message
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${msg}`,

                }) })
        console.log('click');
    }
    return (
        <div>
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className='grid lg:grid-cols-2 mx-auto lg:p-20'>
                <div>
                    <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" alt='' className='w-3/4' src='https://i.ibb.co/X2wfhjs/animation-640-lhsyjaqj.gif'></img>
                </div>
                <form onSubmit={handleLogin} className="flex flex-col gap-4 lg:mt-10 p-5">

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
                            placeholder="name@flowbite.com"
                            required={true}
                            shadow={true}
                            name='email'
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
                        
                        <Label htmlFor="agree ">
                           dont Have Account 
                            <Link
                               to={'/register'}
                                className="text-blue-600 hover:underline dark:text-blue-500 ml-1"
                            >
                                Register Now
                            </Link>
                        </Label>
                    </div>
                    <div onClick={handleGoogleLogin} className="bg-blue-300 py-3 text-center font-medium rounded-md">
                        GOOGLE
                    </div>
                    <Button type="submit">
                        Login Now
                    </Button>

                </form>
              
            </div>
        </div>
    );
};

export default Login;