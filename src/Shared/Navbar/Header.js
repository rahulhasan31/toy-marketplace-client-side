import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';


const Header = () => {
    const { user, logOut} = useContext(AuthContext)


    const handleLogout=()=>{
        logOut()
        .then(resut=>{
            console.log(resut);
        })
        .catch(e=>console.log(e))
    }
    return (
        <>
            <Navbar
                fluid={true}
                rounded={true}
                

                className="shadow-lg border-b border-green-500"
            >
                <Navbar.Brand >
                    <img
                        src="https://designcontest.nyc3.digitaloceanspaces.com/data/contests/95925/entries/82b0c72379298b2c.jpg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Sports Toys House"
                    />
                    <span className=" whitespace-nowrap text-xl font-semibold text-green-500 dark:text-white">
                    <span className='text-red-600'>Sports</span> Toys House
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2 w-20">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img={user?.photoURL} rounded={true} />}>
                        <Dropdown.Header>
                            <span className="block text-sm">
                             {user?.displayName}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {user?.email}
                            </span>
                        </Dropdown.Header>

                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                   <Link to={'/'}>
                   <Navbar.Link
                      
                        active={true} >
                        Home
                    </Navbar.Link>
                   
                    </Link>
                    <Link to={'/all-toys'}>
                    <Navbar.Link >
                        All Toys
                    </Navbar.Link>
                    </Link>
                   {
                    user?.uid?<>   
                 <Link to={'/my-toy'}>
                 <Navbar.Link >
                        My Toys
                    </Navbar.Link></Link>
                  <Link to={'/add-toy'}>
                  <Navbar.Link >
                        Add A Toy
                    </Navbar.Link>
                  </Link></>:<>
                 
                  </>
                   }
                   <Link to={'/blog'}>
                   <Navbar.Link >
                        Blogs
                    </Navbar.Link>
                   </Link>
                   {
                    user?.uid?<>
                    <Navbar.Link onClick={handleLogout}>
                        Logout
                    </Navbar.Link>
                    </>:<>
                    <Link to={'/login'}>
                   <Navbar.Link >
                        Login
                    </Navbar.Link>
                   </Link></>
                   }
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;