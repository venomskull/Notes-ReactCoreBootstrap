using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Notes.Core
{
    public class NoteCreateDto
    {
        //// This one is autogenerated in the db. Hence not needed to give to the client
        //[Key]
        //public int Id { get; set; }

        [Required]
        public string Value { get; set; }
    }
}
