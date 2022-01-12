import { MdDeleteForever } from 'react-icons/md';
import React from 'react';
// import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

// const actions = [
// 	{ label: "V1", value: "Services" },
// 	{ label: "V2", value: "Risk" },
// 	{ label: "V3", value: "Business Idea" },
// 	{ label: "V4", value: "Management"}
//   ];
   
//   const App = () => (
// 	<div className="container">
// 	  <div className="row">
// 		<div className="col-md-4"></div>
// 		<div className="col-md-4">
// 		  <Select options={ actions } />
// 		</div>
// 		<div className="col-md-4"></div>
// 	  </div>
// 	</div>
//   );

// function generateRandomColor()
// {
//     var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
//     return randomColor;
//     //random color will be freshly served
// }

// function colorDiv(){
// 	document.getElementById('note').style.backgroundColor = generateRandomColor();
// }

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<div className = 'header'>
			<span>{text}</span>
				<div className='dropbox'>
					<select className='dropbox'>
						<option className='options' select value="Select">Category</option>
						<option className='options' value="Services">Services</option>
						<option className='options' value="Risk">Risk</option>
						<option className='options' value="Business Idea">Business Idea</option>
						<option className='options' value="Management">Management</option>
					</select>
				</div>
			</div>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;
