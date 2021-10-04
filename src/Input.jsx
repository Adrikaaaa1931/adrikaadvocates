import React from 'react';

//Fat Arrow Function

const Input = () =>{
return(

<>
<br/>
<br/>
<div className="container" style={{width:"500px"}}>
<div className="form-group text-center">
    <input type="email" className="form-control" placeholder="eg: yahoo@gmail.com" id="email"/>
    <br/><br/>
    <button type="button" className="btn btn-outline-secondary btn-lg">SUBSCRIBE TO OUR PUBLICATIONS</button>
  </div>
  </div>
</>
);
};
export default Input;