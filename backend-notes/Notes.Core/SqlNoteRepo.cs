using Notes.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Notes.Core
{
    public class SqlNoteRepo : INoteRepo
    {
        private readonly AppDbContext _context;

        public SqlNoteRepo(AppDbContext context)
        {
            _context = context;
        }
        public void CreateNote(Note note)
        {
            _context.Notes.Add(note);
        }

        public void DeleteNote(Note note)
        {
            if(note == null)
            {
                throw new ArgumentNullException(nameof(note));
            }
            _context.Notes.Remove(note);
        }

        public Note GetNoteById(int id)
        {
            return _context.Notes.FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<Note> GetNotes()
        {
            return _context.Notes.ToList();
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void UpdateNote(Note note)
        {
            if(note == null)
            {
                throw new ArgumentNullException(nameof(note));
            }
            _context.Notes.Update(note);
        }
    }
}
