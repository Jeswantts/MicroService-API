using Agent.DB;
using Microsoft.EntityFrameworkCore;
using Models.Model;

namespace Agent.Service
{
    public class AgentRepo : IAgent
    {
        private readonly AgentContext context;
        public AgentRepo(AgentContext context)
        {
            this.context = context;
        }

        public Agents? DeleteAgents(int AgentId)
        {
            try
            {
                Agents ag = context.Agents.FirstOrDefault(x => x.AgentId == AgentId);
                context.Agents.Remove(ag);
                context.SaveChanges();
                return ag;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public Agents GetAgentsById(int id)
        {
            return context.Agents.FirstOrDefault(x => x.AgentId == id);
        }

        public IEnumerable<Agents> GetAgents()
        {
            return context.Agents.Include(a=>a.Properties).ToList();
        }

        public Agents PostAgents(Agents a)
        {
            context.Add(a);
            context.SaveChanges();
            return a;
        }

        public Agents PutAgents(int id, Agents a)
        {

            context.Entry(a).State = EntityState.Modified;
            context.SaveChanges();
            return a;
        }

    }
}
