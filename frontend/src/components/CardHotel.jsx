import '../assets/styles/main.css';
import Modal from 'react-modal';
import HabitacionesComponent from './HabitacionesComponent';
import { useState } from 'react';



function CardHotel(props) {
  const { hotel } = props;

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() { setIsOpen(true) }
  function closeModal() {
    setIsOpen(false)
  }

  Modal.setAppElement('#root');

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div className="cardHotel" >
      <div className='imgContainer'>
        <img src={hotel.hotelImg} alt="" />
      </div>
      <div className='textContainerCardHotel'>
        <p>Hotel: {hotel.name}</p>
        <p>City: {hotel.city}</p>
        <p>Description:</p>
        <p className='description'>{hotel.description}</p>
      </div>
      <button
        onClick={() => openModal()}
        className='botonAbrirModal'
      >available rooms</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="Modal" overlayClassName="Overlay">
        <HabitacionesComponent closeModal={closeModal} rooms={hotel.rooms}/>
        
      </Modal>
    </div>)
}
export default CardHotel;
