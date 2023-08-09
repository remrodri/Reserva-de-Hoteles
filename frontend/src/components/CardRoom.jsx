function CardRoom(props) {
  const { room } = props;
  return (
    
    <div className="cardRoom">
      
      <div className="imgContainerCardRoom">
        <img src={room.roomImg} alt="" />
      </div>

      <div className="textContainerCardRoom">
        <p>Room number:</p>
        {room.roomNumber}
        <p>capacity:</p>
        {room.capacity}
        <p>price per night:</p>
        ${room.price}
      </div>
      <div className="espacioBotonReservar">
        <button>book</button>
      </div>

    </div>
  )
}
export default CardRoom;