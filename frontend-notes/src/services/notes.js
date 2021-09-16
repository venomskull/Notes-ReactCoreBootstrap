import { ActionCreator } from "../redux/notesReducer";
import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:44327/notes',
});

export const GetNotes = async (dispatch) => {
    try {
        // API get 
        
        // // const notes = [
        // //     {value: 'Study for exam in 3 weeks', id: 1},
        // //     {value: 'At this rate I will be a master in no time', id: 2},
        // //     {value: 'Build more full-stack applications', id: 3},
        // //     {value: 'I love writing notes', id: 4},
        // // ]
        // // dispatch(ActionCreator.setNotes(notes))


        const {data} = await axiosInstance.get();
    
        dispatch(ActionCreator.setNotes(data))

    } catch (err) {
        console.log(err);
    }
}

export const DeleteNote = async (dispatch, note) => {
    try {
        // API delete
        await axiosInstance.delete(`${note.id}`);
        dispatch(ActionCreator.deleteNote(note));
    } catch (err) {
        console.log(err);
    }
}

export const NewNote = async (dispatch, note) => {
    try {
        // API post
        
        // // const nnote = {value: note, id: 1};
        // // dispatch(ActionCreator.newNote(nnote));

        const {data} = await axiosInstance.post('', note);
        dispatch(ActionCreator.newNote(data));

    } catch (err) {
        console.log(err);
    }
}

export const EditNote = async (dispatch, note) => {
    try {
        // API put

        // const enote = {value: note, id: 1};
        // dispatch(ActionCreator.editNote(enote))

        const {data} = await axiosInstance.put('', note)
        dispatch(ActionCreator.editNote(data));
    } catch (err) {
        console.log(err);
    }
}