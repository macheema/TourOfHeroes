namespace TourOfHeroes.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class HeroCreated : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Heroes",
                c => new
                    {
                        HeroId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.HeroId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Heroes");
        }
    }
}
