import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import About from './About';
import Contanct from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Service from './Service';
import Footer from './Footer';






const App = () =>{
 
    return  (
        <>
        <Navbar />

        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contanct} />
            <Route exact path="/service" component={Service} />
            <Redirect to="/" />
        </Switch>
        <Footer />
       
        
        </>
    )
}

export default App;