function UserReservations(props) {
  const {reservedRooms}=props;
  return (
    <div className="reservationsPage">
      <div className="reservationsContainer">
      pagina de mis reservas
      {console.log(reservedRooms)}
      </div>
    </div>)
}
export default UserReservations;