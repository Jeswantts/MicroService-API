using Microsoft.EntityFrameworkCore;
using Models.Model;

namespace Property.DB
{
    public class PropertyContext : DbContext
    {
        public DbSet<Properties> Properties { get; set; }

        public PropertyContext(DbContextOptions<PropertyContext> options) : base(options) { }
    }
}
