using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Model
{
    public class Properties
    {
        [Key]
        public int PropertyId { get; set; }
        [ForeignKey("Agents")]
        public int AgentId { get; set; }

        public string? PropertyName { get; set; }

        public int PropertyPrice { get; set; }

        public string? PropertyLocation { get; set; }

        public string? PropertyBHK { get; set; }

        public string? PropertyStatus { get; set; }

        public string? PropertyType { get; set; }

        public string? PropertyReside { get; set; }

        public Agents? Agents { get; set; }
    }
}
