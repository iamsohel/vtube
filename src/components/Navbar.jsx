import React from "react";

const Navbar = () => {
    return ( 
        <div className="ui massive menu">
            <a href="/" className="active item" style={{color:'#ff0000'}}>
            Vtube
            </a>
            
            <div className="right menu">
            
            <div className="item">
                <div className="ui ">
                    <a href="https://github.com/iamsohel" target="_blank"><i className="github icon" style={{color:'black'}}></i></a>
                </div>
            </div>
            <div className="item">
                <div className="ui ">
                    <a href="https://www.linkedin.com/in/iamsohel" target="_blank">About</a>
                </div>
            </div>
            </div>
      </div>
     );
}
 
export default Navbar;