using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TourOfHeroes.Domain.Model;

namespace TourOfHeroes.DAL.Database
{
    class HeroDBContext : IdentityDbContext
    {
        public DbSet<Hero> Heroes { get; set; }
        HeroDBContext() : base("HeroDBContext")
        {

        }
    }
}
