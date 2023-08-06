import PageHotels from '../pages/PageHotels';
import '../assets/styles/main.css';
import { useState } from 'react';


function Navbar(props) {

  const [showHotels, setShowHotels]=useState(false);

  const {handleShowHotels}=props;

  const handleClick = ()=>{
    setShowHotels(true);
  }
  const functionHotels=()=>{
    return <PageHotels/>
  }

  return (
    <div className="navbar">
      <p onClick={()=>handleShowHotels}>mostrar Hoteles</p>
      
    </div>
  )
}
export default Navbar;