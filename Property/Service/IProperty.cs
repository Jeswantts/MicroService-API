using Microsoft.AspNetCore.Mvc;
using Models.Model;

namespace Property.Service
{
    public interface IProperty
    {
        public IEnumerable<Properties> GetProperties();
        public Properties GetPropertiesById(int id);
        public Properties PostProperties(Properties p);
        public Properties PutProperties(int id, Properties p);
        public Properties DeleteProperties(int id);
        public object CountLocation(string location);
        public object CountBhk(string bhk);
        public object CountReside(string reside);
        public Task<List<Properties>> Filter(string location, string type, int price);

    }
}
