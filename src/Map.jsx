import React from "react";
import Lawl from './lawl.png'
function Map(){
    
return(
<>
<br/>
<br/>
<br/>
<br/>
<br/>

<div className="container">
<img src={Lawl} usemap="#image-map"/>

<map name="image-map">
    <area target="_blank" alt="readmore" title="readmore" href="#" coords="457,319,651,366" shape="rect"/>
</map>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>

</>
    );
}
export default Map;