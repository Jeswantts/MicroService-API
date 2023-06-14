using Microsoft.EntityFrameworkCore;
using Models.Model;

namespace Agent.DB
{
    public class AgentContext:DbContext
    {
        public DbSet<Agents>Agents { get; set; }
        public AgentContext(DbContextOptions<AgentContext> options) : base(options) { }

    }
}
