using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Notes.Core
{
    public class NoteUpdateDto
    {
        // for update id is not needed
        public int Id { get; set; }

        public string Value { get; set; }
    }
}
