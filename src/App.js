import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
			date: '12/01/2022',
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
			date: '12/01/2022',
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			date: '12/01/2022',
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
			date: '12/01/2022',
		},
	]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (category,text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			category: category,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	const updateNote = (id,newText,newCategory) => {
		const newNote = notes.filter((note) => note.id === id);
		newNote.category = newCategory;
		newNote.text = newText;
		console.log(newNote.id);
	}
	
	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.includes(searchText)
					)}
					handleDeleteNote={deleteNote}
					handleAddNote={addNote}
					handleUpdateNote={updateNote}
				/>
			</div>
		</div>
	);
};

export default App;