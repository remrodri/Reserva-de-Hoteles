import "../assets/styles/main.css"
import CardRoom from "./CardRoom";
function HabitacionesComponent(props){
  const{closeModal,rooms,makeReservation,hotel}=props;
return(
  <div className="habitaciones">
    <h3>Habitaciones disponibles</h3>
    <div className="roomCardGroup">
      {
        (hotel.rooms).map((room,index)=>{
          return(room.available === true && <CardRoom room={room} key={index} makeReservation={makeReservation} hotel={hotel}/>)
        })
      }
    </div>
    <button onClick={closeModal} className="botonCerrarModal">cerrar modal</button>
  </div>
)
}
export default HabitacionesComponent;