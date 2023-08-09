import { useEffect, useState } from "react";

import PageHotels from "../components/Hotels";
import PageUserReservation from "../components/UserReservations";
import { getAllHotels } from "../services/HotelService";

function PageUser(props) {
  const [showPageHotels, setShowPageHotels] = useState(true);
  const [showMyReservations, setShowMyReservations] = useState(false);
  const [hotels, setHotels] = useState([]);
  const { onLogout } = props;

  useEffect(()=>{
    reloadHotelsData();
  },[])

  const reloadHotelsData = ()=>{
    getAllHotels()
    .then((result)=>{
      console.log(result)
      setHotels(result.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  const makeReservation=(hotel,room)=>{
    
  }
  

  const handleShowHotels = () => {
    setShowPageHotels(true);
    setShowMyReservations(false);
  };

  const handleShowMyReservations = () => {
    setShowMyReservations(true);
    setShowPageHotels(false);
  }

  return (
    <div className="userPage">
      <div className="navbar">
        <div className="logoContainer">practica</div>
        <div className="buttonsContainer">
        <p onClick={handleShowMyReservations}>mis reservas</p>
        <p onClick={handleShowHotels}>ver Hoteles</p>
        </div>
        <div className="logoutContainer">
        <p onClick={onLogout}>cerrar sesion</p>
        </div>
      </div>
      
      {showPageHotels && <PageHotels hotels={hotels}/>}
      {showMyReservations && <PageUserReservation />}


    </div>
  )
}
export default PageUser;