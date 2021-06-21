import React from 'react';
import { NavLink } from 'react-router-dom';
import image from './Images/01.jpg';
import Card from './Card';

const Service = () => {
    return ( 
        <>
        <div className="my-5">
            <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
             <div className="row" >
                 <div className="col-10 mx-auto">
                     <div className="row gy-4">
                         
                        <Card 
                            imgsrc={image}
                            title="web developement"
                        />

                        <Card 
                            imgsrc={image}
                            title="App developement"
                        />
                          <Card 
                            imgsrc={image}
                            title="Software developement"
                        />
                        <Card 
                            imgsrc={image}
                            title="Digital marketing"
                        />
                        <Card 
                            imgsrc={image}
                            title="Android developement"
                        />

                        <Card 
                            imgsrc={image}
                            title="Marketing"
                        />

                         </div>

                     </div>
                 </div>
             </div>
        
        </>
     );
}
 
export default Service;