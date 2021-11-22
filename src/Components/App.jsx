import React, { useState } from 'react';
import {Header}  from './Header/Header.jsx';
import {Footer} from './Footer';
import {Note} from './Note';
import CreateArea from "./CreateArea";

export default function App(){
    const [notes, setNotes] = useState([])

    function addNote(newNote){
      setNotes((prevNote)=>{
        return[
          ...prevNote,
          newNote
        ]
      })
    }

    function deleteNote(id){
      setNotes((prevNote)=>{
        return prevNote.filter((note, index)=>{
          return index !== id
        });
      });

    }
     return(
          <div>
            
            <Header />
            <CreateArea 
               onAdd={addNote}
            />
            {notes.map((note,index) => {
              return <Note 
              key={index}
              id={index}
              title={note.title} 
              content={note.content} 
              onDelete={deleteNote}/>
            })} 
            <Footer />
            
          </div>
            
     );
}


