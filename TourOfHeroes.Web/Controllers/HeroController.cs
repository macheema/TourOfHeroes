using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Routing;
using TourOfHeroes.DAL.Database;
using TourOfHeroes.Domain.Model;
using TourOfHeroes.Domain.ViewModel;

namespace TourOfHeroes.Web.Controllers
{
    [RoutePrefix("api/heroes")]
    public class HeroController : ApiController
    {
        HeroDBContext db = new HeroDBContext();

        [Route("getall")]
        [HttpGet]
        public IHttpActionResult GetHeroes()
        {
            var heroes = db.Heroes.ToList();
            var heroDTOs = Mapper.Map<List<Hero>, List<HeroDTO>>(heroes);
            return Ok(heroDTOs);
        }
        [Route("{id:int}")]
        [HttpGet]
        public async Task<IHttpActionResult> GetHero(int id)
        {
            var hero = await db.Heroes.FindAsync(id);
            var heroDTO = Mapper.Map<Hero, HeroDTO>(hero);
            return Ok(heroDTO);
        }

        [Route("search")]
        [HttpGet]
        public IHttpActionResult SearchHero()
        {
            var q = Request.GetQueryNameValuePairs().Where(nv => nv.Key == "name").Select(nv => nv.Value).FirstOrDefault();
            if (q != null && q != string.Empty)
            {
                var heroes = db.Heroes.Where(hero => hero.Name.Contains(q));
                var heroDTOs = Mapper.Map<Hero[], HeroDTO[]>(heroes.ToArray());
                return Ok(heroDTOs);
            }
            else
            {
                return Ok();
            }
        }
        [Route("add")]
        [HttpPost]
        public IHttpActionResult AddHero(HeroDTO hero)
        {
            var heroEntity = Mapper.Map<HeroDTO, Hero>(hero);
            heroEntity = db.Heroes.Add(heroEntity);
            db.SaveChanges();
            return Ok(Mapper.Map<Hero, HeroDTO>(heroEntity));
        }
        [Route("update/{id:int}")]
        [HttpPut]
        public IHttpActionResult UpdateHero(int id, HeroDTO hero)
        {
            var value = Mapper.Map<HeroDTO, Hero>(hero);
            var heroObject = db.Heroes.Find(id);
            heroObject.Name = value.Name;
            db.SaveChanges();
            return Ok(Mapper.Map<Hero, HeroDTO>(heroObject));
        }
    }
}
