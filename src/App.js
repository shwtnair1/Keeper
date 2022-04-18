import logo from './logo.svg';
import './component.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateNote from './components/CreateNote';
import React , {useState} from 'react';
import Note from './components/Notes';

function App() {
  const [notes,setNote] = useState([]);

  function addNote(newNote){
    setNote(prevNote=>{return [...prevNote,newNote]})
  }

  function deleteNote(key){
    let listNotes = notes.filter((data,i)=> i!=key)
    setNote(listNotes)
  }

  return (
    <div className='container'>
        <Header />
        <CreateNote onAdd={addNote}/>
        {notes.map((item,index)=>{
          return(<Note key={index} note={item} delNote={deleteNote} index={index}/>)
        })}
        <Footer />
    </div>
  );
}

export default App;
