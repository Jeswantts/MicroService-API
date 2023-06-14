using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.Model;
using Property.Service;

namespace Property.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertyController : ControllerBase
    {
        private readonly IProperty pro;
        public PropertyController(IProperty pro)
        {
            this.pro = pro;
        }
        [HttpGet]
        public IEnumerable<Properties> Get()
        {
            return pro.GetProperties();
        }
        [HttpGet("{id}")]

        public Properties GetId(int id)
        {
            return pro.GetPropertiesById(id);
        }

        [HttpPost]
        public Properties Post(Properties p)
        {
            return pro.PostProperties(p);
        }

        [HttpPut]
        public Properties Put(int id, Properties p)
        {
            return pro.PutProperties(id, p);
        }

        [HttpDelete("{id}")]
        public Properties Delete(int id)
        {
            return pro.DeleteProperties(id);
        }
        [HttpGet("Filter/Location/{location}")]
        public object Count(string location)
        {
            return pro.CountLocation(location);
        }
        [HttpGet("Count/BHK/{bhk}")]
        public object CountBhk(string bhk)
        {
            return pro.CountBhk(bhk);
        }
        [HttpGet("Count/Reside/{reside}")]
        public object CountReside(string reside)
        {
            return pro.CountReside(reside);
        }
        [HttpGet("Filter/{type},{location},{price}")]
        public async Task<List<Properties>> Filter(string location, string type, int price)
        {
            return await pro.Filter(location, type, price);
        }
    }
}
