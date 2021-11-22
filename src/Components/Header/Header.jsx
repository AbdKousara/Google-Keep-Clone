import React from "react";
import './Header.scss';
import HighlightIcon from '@material-ui/icons/Highlight';

function Header(){
       return(
          <header>
             <h1 ><HighlightIcon /> Keeper App</h1>    
          </header>
          
       );
}

export {Header}