import './modal.scss';

function Modal({ children, modalOpen, onClose }) {

	return (
		<div
			onClick={ onClose }
			className={`modal ${modalOpen ? 'is-open' : ''}`}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="modal__content"
			>
				<button
					onClick={ onClose }
					className="modal__close"
				>
					<span className="sr-only">Close Modal</span>
				</button>
				{ children }
			</div>
		</div>
	)
}

export default Modal;