import React from 'react';
import Navbar from './Navbar';
import Aboutus from './Aboutus';
import Practice from './Practice';
import Offices from './Offices';
import {Route,Switch} from 'react-router-dom';
import Home from './Home';
function App(){
return(
<>
<Navbar/>
<Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={Aboutus}/>
    <Route exact path="/practice" component={Practice}/>
    <Route exact path="/contact" component={Offices}/>
</Switch>


</>
);
    
}
export default App;