import React from 'react'; 
import { NavLink } from 'react-router-dom';
// import web from './Images/1.svg';
import Common from './Comon';
import image from './Images/06.jpg';


const Home = () =>{
    return (
        <>
         <Common 
        name="Grow your business with"
        imgsrc={image}
        visit="/service"
        btnName="Get Started"
         />
        </>
    )
}


export default Home;