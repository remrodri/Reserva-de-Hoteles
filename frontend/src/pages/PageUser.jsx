import { useEffect, useState } from "react";

import PageHotels from "../components/Hotels";
import PageUserReservation from "../components/UserReservations";
import { getAllHotels, updateHotelById } from "../services/HotelService";
import { getAllReservations } from "../services/Reservation";

function PageUser(props) {
  const [showPageHotels, setShowPageHotels] = useState(true);
  const [showMyReservations, setShowMyReservations] = useState(false);
  const [hotels, setHotels] = useState([]);
  const { onLogout } = props;
  const [reservations, setReservations] = useState([]);
  const [reservedRooms,setReservedRooms]=useState([]);

  useEffect(() => {
    reloadHotelsData();
    //reloadReservationsData();
    reloadAllUserReservations();
    
  }, [])

  const reloadHotelsData = () => {
    getAllHotels()
      .then((result) => {
        console.log(result)
        setHotels(result.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // const reloadReservationsData = () => {
  //   getAllReservations()
  //     .then((result) => {
  //     //  console.log(result)
        
  //       setReservations(result.data)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }
  const reloadAllUserReservations=()=>{
    const userInfo = localStorage.getItem('userInfo')
    const userInfoToObj = JSON.parse(userInfo)
    //console.log(userInfoToObj._id);
    getAllReservations()
    .then((result)=>{
      const filteredReservations=result.data.filter(reservation=>reservation.client===userInfoToObj._id)
        // console.log('filteredReservations::: ', filteredReservations);
        setReservations(filteredReservations)
    })
    .catch((error)=>{console.log(error)})
    //const filteredReservations = reservtions.filter((reservation)=>reservation.client)
    
    
  }

  const loadReservedRooms= ()=>{
    const reservedHotels = reservations.map((reservation)=>{ 
      const findedhotel = hotels.find((hotel)=>hotel._id===reservation.hotel)
      return findedhotel.rooms.find((room)=>room.roomNumber===reservation.roomNumber);
    })
    //return reservedHotels;
    console.log('reservedHotels::: ', reservedHotels);
    setReservedRooms(reservedHotels)
  }

  const makeReservation = async (hotelId, roomNumber) => {
    //console.log("hotelId: ",hotelId," roomNumber: ",roomNumber);
    const hotelFinded = hotels.find(hotelFromHotels => hotelFromHotels._id === hotelId);
    if (!hotelFinded) {
      alert('El hotel no existe');
      return;
    }
    //console.log(updateRooms((hotelFinded.rooms),updateRoomAvailability(hotelFinded.rooms,roomNumber)))
    const updatedhotel = { ...hotelFinded, rooms: updateRooms((hotelFinded.rooms), updateRoomAvailability(hotelFinded.rooms, roomNumber)) }
    console.log(updatedhotel);
    await updateHotelById(updatedhotel._id, { rooms: updatedhotel.rooms });
    await reloadHotelsData();
  }
  const updateRoomAvailability = (rooms, roomNumber) => {
    const roomFinded = rooms.find(roomFromRooms => roomFromRooms.roomNumber === roomNumber);
    //console.log(roomFinded);
    const roomUpdated = { ...roomFinded, available: false }
    //console.log(roomUpdated);
    return roomUpdated;
  }
  const updateRooms = (rooms, roomUpdated) => {
    const filteredRooms = rooms.filter((room) => room.roomNumber !== roomUpdated.roomNumber)
    const updatedRooms = [...filteredRooms, roomUpdated];
    return updatedRooms;
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

      {showPageHotels && <PageHotels hotels={hotels} makeReservation={makeReservation} />}
      {showMyReservations && <PageUserReservation reservedRooms={reservedRooms}/>}


    </div>
  )
}
export default PageUser;