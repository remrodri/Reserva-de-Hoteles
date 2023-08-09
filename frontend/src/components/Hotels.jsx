import { useEffect, useState } from "react";
import CardHotel from "./CardHotel";



function PageHotels(props) {

  const {hotels}=props;
  const [checkboxes,setCheckboxes]=useState(
    {
      pet:false,
      wifi:false,
      roomService:false,
      sauna:false,
      pool:false
    }
  );
  
  
  const handleCheckBoxChange =(checkboxName)=>{
    setCheckboxes({
      ...checkboxes,[checkboxName]:!checkboxes[checkboxName]
    })
  }
  return (
    <div className="hotelsContainer">
      
      <div className="filterSection">
        <p>Filtrar por:</p>
        <label>
          <input type="checkbox"
          checked={checkboxes.pet}
          onChange={()=>handleCheckBoxChange('pet')}
          />
          Admite mascotas
        </label>
        <label>
          <input type="checkbox"
          checked={checkboxes.wifi}
          onChange={()=>handleCheckBoxChange("wifi")}
          />
          Wifi
        </label>
        <label>
          <input type="checkbox"
          checked={checkboxes.roomService}
          onChange={()=>handleCheckBoxChange("roomService")}
          />
          Servicio de habitacion
        </label>
        <label>
          <input type="checkbox"
          checked={checkboxes.sauna}
          onChange={()=>handleCheckBoxChange("sauna")}
          />
          Sauna
        </label>
        <label>
          <input type="checkbox"
          checked={checkboxes.pool}
          onChange={()=>handleCheckBoxChange("pool")}
          />
          Piscina 
        </label>
      </div>
      <div className="hotelSection">
        <h2>Hotels</h2>
        <div className="hotelGroupCards">
        {hotels.map((hotel,index)=>{
          return(
            <CardHotel hotel={hotel} key={index}/>
          )
        })}
        </div>
      </div>
    </div>
  );

}
export default PageHotels;