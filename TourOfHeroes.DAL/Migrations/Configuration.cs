namespace TourOfHeroes.DAL.Migrations
{
    using Database;
    using Domain.Model;
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<TourOfHeroes.DAL.Database.HeroDBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(TourOfHeroes.DAL.Database.HeroDBContext context)
        {
            //AddHeroes();
        }
        private void AddHeroes(HeroDBContext context)
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
