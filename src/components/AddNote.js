import React, { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const [categoryText, setCategoryText] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleChange2 = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setCategoryText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0 && categoryText.trim().length > 0) {
			handleAddNote(noteText,categoryText);
			setNoteText('');
			setCategoryText('');
		}
	};

	return (
		<div className='note new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<textarea
				placeholder='Category...'
				value={categoryText}
				onChange={handleChange2}
				id = "val"
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
