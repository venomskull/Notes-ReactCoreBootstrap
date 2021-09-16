using Notes.DB;
using System;
using System.Collections.Generic;

namespace Notes.Core
{
    public interface INoteRepo
    {
        bool SaveChanges();
        void CreateNote(Note note);
        Note GetNoteById(int id);
        IEnumerable<Note> GetNotes();
        void DeleteNote(Note note);
        void UpdateNote(Note note);
    }
}
