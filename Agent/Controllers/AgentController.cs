using Agent.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata;
using Models.Model;
using System.Data;

namespace Agent.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AgentController : ControllerBase
    {
        private readonly IAgent agent;
        public AgentController(IAgent agent)
        {
            this.agent = agent;
        }
        [HttpGet]
        public IEnumerable<Agents> Get()
        {
            return agent.GetAgents();
        }
        [HttpGet("{id}")]

        public Agents GetId(int id)
        {
            return agent.GetAgentsById(id);
        }

        [HttpPost]
        public Agents Post(Agents a)
        {
            return agent.PostAgents(a);
        }

        [HttpPut]
        public Agents Put(int id, Agents a)
        {
            return agent.PutAgents(id, a);
        }

        [HttpDelete("{AgentId}")]
        public Agents? Delete(int AgentId)
        {
            return agent.DeleteAgents(AgentId);
        }
    }
}
