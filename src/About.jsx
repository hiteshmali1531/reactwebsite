import React from 'react';
import image from './Images/06.jpg';
import Common from './Comon';

const About = () =>{
    return (
      <Common 
        name="Welcome to About page"
        imgsrc={image}
        visit="/contact"
        btnName="Contact Now"
      />
    )
}

export default About;