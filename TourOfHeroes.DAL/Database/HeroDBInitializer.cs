using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Web;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TourOfHeroes.Domain.Model;
using TourOfHeroes.DAL.Database;

namespace TourOfHeroes.DAL.Database
{
    class HeroDBInitializer : DropCreateDatabaseIfModelChanges<HeroDBContext>
    {
        protected override void Seed(HeroDBContext context)
        {
            var heroes = new Hero[]
            {
                new Hero() {
                    Name="Awais"
                },
                new Hero() {
                    Name="Batman"
                },
                new Hero() {
                    Name="Antman"
                },
                new Hero() {
                    Name="Deadpool"
                }
            };
            foreach (var hero in heroes)
            {
                context.Heroes.Add(hero);
            }
            context.SaveChanges();
        }
    }
}
