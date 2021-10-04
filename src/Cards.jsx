import React from "react";
import Law from './law.png'
import Info from './info.png'
import Team from './team.png'
import Location from './location.png'
import Paper from './paper.png'
function Cards(){
    return(
<>
<div className="card-deck">
  <div className="card bg-light">
    <div className="card-body text-center">
    <img src={Info}/> 
    <h2>About Us</h2>
      <p className="card-text">Set up in 1971, the growth of Adrika Associates, Advocates (“Firm”) is a glowing tribute to its founder,</p>
    </div>
  </div>
  <div className="card bg-light">
    <div className="card-body text-center">
    <img src={Team}/> 
    <h2>Our Team</h2>
      <p className="card-text">The Firm has more than 100 multi qualified professionals with a total strength of about 250 personnel,</p>
    </div>
  </div>
  <div className="card bg-light">
    <div className="card-body text-center">
        <img src={Law}/>
        <h2>Practice Areas</h2>
      <p className="card-text">Set up in 1971, the growth of Adrika Associates, Advocates (“Firm”) is a glowing tribute to its founder,</p>
    </div>
  </div>
  <div className="card bg-light">
    <div className="card-body text-center">
        <img src={Paper}/>
        <h2>Publications</h2>
      <p className="card-text">We regularly publish newsletters, articles and alerts related to Direct Tax, Indirect Tax, Corporate, Intellectual Property Rights, </p>
    </div>
  </div>
  <div className="card bg-light">
    <div className="card-body text-center">
        <img src={Location}/>
        <h2>Contact Us</h2>
      <p className="card-text">Set up in 1971, the growth of Adrika Associates, Advocates (“Firm”) is a glowing tribute to its founder,</p>
    </div>
  </div>
</div>

</>
    );
}
export default Cards;