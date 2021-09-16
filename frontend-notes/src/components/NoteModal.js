import React, { useEffect, useState } from 'react'
import { Button, InputGroup, Modal, FormControl, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { NewNote, EditNote } from '../services/notes';

export const NewNoteModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button onClick={handleShow} className='btn btn-success'>New Note</Button>
            <NoteModal show={show} handleClose={handleClose} handleFormSubmit={NewNote} note={null}  />
        </div>
    )
}

export const EditNoteModal = ({note}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button onClick={handleShow} className='btn btn-warning'>Edit</Button>
            <NoteModal show={show} handleClose={handleClose} handleFormSubmit={EditNote} note={note}  />
        </div>
    )
}

const NoteModal = ({ show, handleClose, handleFormSubmit, note }) => {
    const [modalNote, setModalNote] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        setModalNote(note);
    }, [note])

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={e => {
                    e.preventDefault();
                    handleFormSubmit(dispatch, modalNote)
                }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup>
                            <FormControl 
                                value={modalNote === null ? '' : modalNote.value}
                                onChange={e => setModalNote({...modalNote, value: e.target.value})}
                            />
                        </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button type='submit' variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}
