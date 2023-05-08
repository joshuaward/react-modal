import React, { useContext, useEffect, useState } from 'react';
import BreweryContext from './context/index';

// Components
import Modal from './components/Modal/Modal';


function App() {
	const { getData, data } = useContext(BreweryContext);
	const [modalOpen, setModalOpen] = useState(false);
	const [modalData, setModalData] = useState({});

	const showModal = (item) => {
		setModalData({
			// update this if change api
			name: item?.name,
			street: item?.street,
			city: item?.city,
			state: item?.state,
			website: item?.website_url
		});
		setModalOpen(true);
		console.log('md', modalData);
	}

	const hideModal = () => {
		setModalData({});
		setModalOpen(false);
	}

	useEffect(() => {
		getData();
		// eslint-disable-next-line
	}, []);

  return (
    <React.Fragment>
			{data.map(item => (
				<button
					key={item.id}
					onClick={() => showModal(item)}
					className="modal__trigger"
				>
					{ item.name }
				</button>
			))}

			<Modal onClose={ hideModal } modalOpen={ modalOpen }>
				<header className="modal__header">
					{ modalData.name }
				</header>
				<div className="modal__body">
					<div>{ modalData.street }</div>
					<div>{ modalData.city }, { modalData.state }</div>
					{/* <div>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45595.048153200965!2d-93.28995685835113!3d44.88797104052281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d97919708c5%3A0x507c3bce55c76e69!2sBauhaus%20Brew%20Labs%2C%201315%20Tyler%20St%20NE%2C%20Minneapolis%2C%20MN%2055413!5e0!3m2!1sen!2sus!4v1683482419881!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div> */}
				</div>
				<footer className="modal__footer">
					<a 
						href={ modalData.website }
						target="_blank"
						rel="noreferrer"
					>
						Website
					</a>
				</footer>
			</Modal>
		</React.Fragment>
  );
}

export default App;
