import '../assets/styles/main.css';

function CardHotel(props) {
  const {hotel}=props;
  return (
    <div className="cardHotel">
      card Hotel
      <p>{hotel.name}</p>
      <p>{hotel.city}</p>
      
    </div>)
}
export default CardHotel;
