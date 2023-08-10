function CardRoom(props) {
  const { room, makeReservation, hotel } = props;
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
        {room.available ?
          <button onClick={() => {
            makeReservation(hotel._id, room.roomNumber)
          }}>
            reserve
          </button> :
          <button onClick={() => { console.log('unreserve::: , unreserve'); }}
          >
            unreserve
          </button>}

      </div>
    </div>
  )
}
export default CardRoom;