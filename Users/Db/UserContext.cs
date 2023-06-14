using Microsoft.EntityFrameworkCore;
using Models.Model;

namespace Users.Db
{
    public class UserContext:DbContext
    {
        public DbSet<User> User { get; set; }
        public DbSet<Admin> Admin { get; set; }
        public UserContext(DbContextOptions<UserContext> options) : base(options) { }
    }
}
