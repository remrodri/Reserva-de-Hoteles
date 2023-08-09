import "../assets/styles/main.css"
import CardRoom from "./CardRoom";
function HabitacionesComponent(props){
  const{closeModal,rooms}=props;
return(
  <div className="habitaciones">
    <h3>Habitaciones disponibles</h3>
    <div className="roomCardGroup">
      {
        rooms.map((room,index)=>{
          return(room.available === true && <CardRoom room={room} key={index}/>)
        })
      }
    </div>
    <button onClick={closeModal} className="botonCerrarModal">cerrar modal</button>
  </div>
)
}
export default HabitacionesComponent;