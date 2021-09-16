using AutoMapper;
using Notes.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Notes.Core
{
    public class NotesProfile : Profile
    {
        public NotesProfile()
        {
            // source -> target

            // Read
            CreateMap<Note, NoteReadDto>();
            
            // Create
            CreateMap<NoteCreateDto, Note>();

            //Update
            CreateMap<NoteUpdateDto, Note>();
        }
    }
}
