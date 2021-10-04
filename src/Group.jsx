import React from "react"
const Group = () =>{
return(
<>
<div className="card-group">
  <div className="card bg-success text-white">
    <div className="card-body text-center">
      <p className="card-text">
          DELHI<br/>
          1st, 9th, 11th Floor, Mohan Dev Building,<br/>
           13, Tolstoy Marg, New Delhi, 110001 <br/>
            +91 11 42492525<br/><br/>
             delhi@adrikalaw.com</p>
    </div>
  </div>
  <div className="card bg-warning">
    <div className="card-body text-center">
      <p className="card-text">
          MUMBAI<br/>
    106, Peninsula Centre, Dr. S.S.Rao Road,<br/>
    Parel, Mumbai, 400012 <br/><br/>
    +91 22 42134101<br/>
     mumbai@adrikalaw.com</p>
    </div>
  </div>
  <div className="card bg-primary text-white">
    <div className="card-body text-center">
      <p className="card-text">BEGALURU<br/>
      105 -106, Raheja Chambers, #12,<br/>
       Museum Road, Bengaluru, 560001 <br/><br/>
       +91 80 40903588/89 <br/>
       bangalore@adrikalaw.com</p>
    </div>
  </div>
</div> 
</>
);
};
export default Group;