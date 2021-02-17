import * as React from 'react';
import {useStyles, getModalStyle} from './modalStyle';
import Modal from '@material-ui/core/Modal';

interface IModalPopup {
	open: boolean;
	currentValue: string;
	addTodo: Function;
	setOpen: Function;
	resetValue: Function;
}

const ModalPopup = (props: IModalPopup) => {
	const {open, setOpen, currentValue, addTodo, resetValue} = props;
	const classes = useStyles();
	const [modalStyle] = React.useState(getModalStyle);

	const addValue = () => {
		setOpen(false);
		addTodo(currentValue);
		resetValue();
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Modal style={modalStyle}
			open={open}
			onClose={handleClose}
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
		>
			<div className={classes.paper}>
				<p id="simple-modal-description">
					There is a list item with the same name. Do you want to add it in anyway?
				</p>
				<button type="button" onClick={addValue}>
					Add
				</button>
				<button type="button" onClick={handleClose}>
					Cancel
				</button>
			</div>
		</Modal>
	);
}

export default ModalPopup;