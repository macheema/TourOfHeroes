using System.Data.Entity;
using TourOfHeroes.Domain.Model;

namespace TourOfHeroes.DAL.Database
{
    public class HeroDBContext : DbContext
    {
        public DbSet<Hero> Heroes { get; set; }
        public HeroDBContext() : base("HeroDBContext")
        {
        }
    }
}
