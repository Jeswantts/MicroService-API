using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Model
{
    public class Agents
    {
        [Key]
        public int AgentId { get; set; }

        public string? AgentName { get; set; }

        public string? Description { get; set; }

        public string? Locality { get; set; }

        public string? Address { get; set; }

        public string? Phone { get; set; }

        public string? Email { get; set; }

        public int? AgentRating { get; set; }

        public ICollection<Properties>? Properties { get; set; }
    }
}
