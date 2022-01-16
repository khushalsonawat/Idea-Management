import { MdDeleteForever } from 'react-icons/md';
import {BsPencilSquare} from 'react-icons/bs';
import Draggable from 'react-draggable';
import { useState } from 'react';

const Note = ({ id,text,category,date,handleDeleteNote,handleUpdateNote}) => {
	const [editable,setEditable] = useState(false);
	
	const handleEdit = () => {
		setEditable(!editable);
		if(editable){
			handleUpdateNote(id,text,category);
		}
	}
	console.log(text);
	return (
		<Draggable>
		<div className='note'>
			<div className='header'>
				<span contentEditable={editable}>{text}</span>
				<span contentEditable={editable}>{category}</span>
			</div>
			<div className='note-footer'>
				<small>{date}</small>
				<BsPencilSquare
					className='delete-icon'
					onClick={() => handleEdit()}
				/>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
		</Draggable>
	);
};

export default Note;