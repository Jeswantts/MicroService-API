using Models.Model;

namespace Agent.Service
{
    public interface IAgent
    {
        public IEnumerable<Agents> GetAgents();
        public Agents GetAgentsById(int id);
        public Agents PostAgents(Agents a);
        public Agents PutAgents(int id, Agents a);
        public Agents DeleteAgents(int AgentId);
    }
}
