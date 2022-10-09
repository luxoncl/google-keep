import React,{useState} from "react";
import Header  from "./Components/Header/Header";
import CreateNote from "./Components/CreateNote/CreateNote";
import Note from "./Components/Note/Note";
import Footer from "./Components/Footer/Footer";
import "./App.css";
function App() {
  const [notes,setNotes]=useState([]);
  const addNote = (newNote) =>{
    setNotes((prevNotes)=>{
      return[...prevNotes,newNote]
    })
  }
  const deleteNote =(id) =>{
    setNotes((prevNotes) =>{
      return prevNotes.filter((noteItem,index)=>{
          return index!==id
      })
    })

  }
  return (
    <div> 
      <Header/>
      <CreateNote onAdd={addNote}/>
       {notes.map((note,index)=>{
         return(
            <Note id={index} title={note.title} content={note.content} deleteNote={deleteNote} />
         )
       })}
      <Footer/>
    </div>
       
  );
}
export default App;
