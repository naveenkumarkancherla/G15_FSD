import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
//icons
//import { FaAngellist } from "react-icons/fa6"; 
import { FaAngellist,FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import { AuthContext } from '../contexts/AuthProvider';
import { useCart } from '../contexts/cart1';
import {  Badge } from 'antd';


const Navbar = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false);
    const[isSticky, setIsSticky] = useState(false);
    const [cart] = useCart( )
    
    
    const { user } = useContext(AuthContext);
   


    //toggle menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

    }
     
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100) {
                setIsSticky(true);

            }
            else{
                setIsSticky(false)
            }
        }
        window.addEventListener("scroll",handleScroll);
        return () => {
            window.addEventListener("scroll",handleScroll);   
        }
    }, [])
  
  //nav items here
  const navItems = [
    { link: "Home", path: "/"},
    { link: "About", path: "/about"},
    { link: "Shop", path: "/shop"},
    { link: "Sell your Book", path: "/admin/dashboard"},
    { link:<button ><Badge className='cartlogo' count={cart?.length}> </Badge>CART
       </button>, path:"/cart"},
   
    
    

  ]
    return (
    <header className='w-full bg-transparent fixed top-0  left-0 right-0 transition-all ease-in duration-300'>

        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
            <div className='flex justify-between item center text-base gap-8'>
                { /* logo */ }
                <Link to ="/" className='logo font-bold  text-blue-700 flex items-center gap-2'><FaAngellist
                className='inline-block'/>Books</Link>

            
                { /* nav item for large device */}
                <ul className='md:flex space-x-20 hidden'>
                    {
                      
                       navItems.map(({ link,path}) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>  )
                    }
                </ul>
                 {/* button for lg devices */}
                   <div className='space-x-12 hidden lg:flex items-center'>
                  <button><FaBarsStaggered className='w-5 hover:text-blue-700'/> </button> 
                

                 </div> 
                
                 {/* menu butten for the mobile-------view  divices */}
                 <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                        {
                            isMenuOpen ?<FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text-black'/>
                        }
                    </button>

                 </div>
            </div>
         {/*    {navbar item in mobile view} */}
         <div className={`space-y-6 px-4 mt-12 py-7 bg-blue-700  ${isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"}` }>
            {
             navItems.map(({ link,path}) => <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-blue-700'>{link}</Link>  )
            }
         </div>

        </nav>
    </header>
  )
}

export default Navbar