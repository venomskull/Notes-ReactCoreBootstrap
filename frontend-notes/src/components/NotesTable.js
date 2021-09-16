import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteNote, GetNotes } from '../services/notes'
import {Button} from 'react-bootstrap'
import { EditNoteModal } from './NoteModal'

export const NotesTable = () => {
    const notes = useSelector(state => state.notesReducer.notes)
    const dispatch = useDispatch();

    useEffect(() => {
        GetNotes(dispatch);
    }, []);

    return (
        <div>
            <table className='table table-dark'>
                <tbody>
                    {notes.map(note => (
                        <tr key={note.id}>
                            <td style={{width: '3rem'}}>
                               <EditNoteModal note={note} />
                            </td>
                            <td style={{width: '3rem'}}>
                               <Button className='btn btn-danger' onClick={() => DeleteNote(dispatch, note)}>Delete</Button>
                            </td>
                            <td style={{textAlign: 'left'}}>{note.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

// export default NotesTable
