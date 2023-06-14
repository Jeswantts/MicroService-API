using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models.Model;
using Property.DB;

namespace Property.Service
{
    public class PropertyRepo : IProperty
    {
        private readonly PropertyContext context;
        public PropertyRepo(PropertyContext context)
        {
            this.context = context;
        }

        public Properties DeleteProperties(int id)
        {
            Properties ro = context.Properties.FirstOrDefault(x => x.PropertyId == id);
            if (ro != null)
            {
                context.Remove(ro);
                context.SaveChanges();
            }
            return ro;
        }

        public Properties GetPropertiesById(int id)
        {
            return context.Properties.FirstOrDefault(x => x.PropertyId == id);
        }

        public IEnumerable<Properties> GetProperties()
        {
            return context.Properties.Include(x => x.Agents).ToList();
        }

        public Properties PostProperties(Properties p)
        {
            context.Add(p);
            context.SaveChanges();
            return p;
        }

        public Properties PutProperties(int id, Properties p)
        {
            context.Entry(p).State = EntityState.Modified;
            context.SaveChanges();
            return p;
        }
        public object CountLocation(string location)
        {
            try
            {
                return context.Properties.Where(a => a.PropertyLocation == location).ToList();
            }
            catch (Exception ex)
            {
                throw new Exception("Not able to get the details" + ex.Message);
            }
        }
        public object CountBhk(string bhk)
        {
            try
            {
                return context.Properties.Count(a => a.PropertyBHK == bhk);
            }
            catch (Exception ex)
            {
                throw new Exception("Not able to get the details" + ex.Message);
            }
        }
        public object CountReside(string reside)
        {
            try
            {
                return context.Properties.Count(a => a.PropertyReside == reside);
            }
            catch (Exception ex)
            {
                throw new Exception("Not able to get the details" + ex.Message);
            }
        }
        public async Task<List<Properties>> Filter(string location, string type, int price)
        {
            var a = await context.Properties.Where(a => a.PropertyLocation.ToLower() == location.ToLower() && a.PropertyType.ToLower() == type.ToLower() && a.PropertyPrice < price).ToListAsync();
            return a;
        }
    }
}
