using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Notes.Core;
using Notes.DB;
using System.Collections.Generic;

namespace NotesWebAPI.Controllers
{
    [ApiController]
    //[Route("[controller]")]
    [Route("notes")]
    public class NotesController : ControllerBase
    {
        private readonly INoteRepo _note;
        private readonly IMapper _mapper;

        public NotesController(INoteRepo note, IMapper mapper)
        {
            _note = note;
            _mapper = mapper;
        }

        //GET notes
        [HttpGet]
        public ActionResult<IEnumerable<NoteReadDto>> Get()
        {
            var noteModal = _note.GetNotes();
            return Ok(_mapper.Map<IEnumerable<NoteReadDto>>(noteModal));
        }

        //GET notes/{id}
        [HttpGet("{id}", Name = "GetNoteById")]
        public ActionResult<NoteReadDto> GetNoteById(int id)
        {
            var noteModel = _note.GetNoteById(id);
            if (noteModel != null)
            {
                return Ok(_mapper.Map<NoteReadDto>(noteModel));
            }

            return NotFound();
        }

        //POST notes
        [HttpPost]
        public ActionResult<NoteReadDto> CreateNote(NoteCreateDto note)
        {
            var noteModal = _mapper.Map<Note>(note);
            _note.CreateNote(noteModal);
            _note.SaveChanges();

            var noteReadDto = _mapper.Map<NoteReadDto>(noteModal);
            return CreatedAtRoute(nameof(GetNoteById), new { noteReadDto.Id }, noteReadDto);
        }

        //DELETE notes/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteNote(int id)
        {
            var noteModel = _note.GetNoteById(id);
            _note.DeleteNote(noteModel);
            _note.SaveChanges();

            return NoContent();
        }

        //UPDATE note
        [HttpPut]
        public ActionResult<Note> UpdateNote(NoteUpdateDto noteUpdateDto)
        {
            var editNote = _note.GetNoteById(noteUpdateDto.Id);
            editNote.Value = noteUpdateDto.Value;
            _note.UpdateNote(editNote);
            _note.SaveChanges();

            return Ok(editNote);
        }
    }
}
