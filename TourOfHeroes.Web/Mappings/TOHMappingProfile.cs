using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TourOfHeroes.Domain.Model;
using TourOfHeroes.Domain.ViewModel;

namespace TourOfHeroes.Web.Mappings
{
    public class TOHMappingProfile : Profile
    {
        public TOHMappingProfile()
        {
            CreateMap<Hero, HeroDTO>().AfterMap(
                (src, dest) => MapHeroToHeroDTO(src, dest)
            );
            CreateMap<HeroDTO, Hero>().AfterMap(
                (src, dest) => MapHeroDTOToHero(src, dest)
            );
        }
        public void MapHeroToHeroDTO(Hero src, HeroDTO dest)
        {
            dest.name = src.Name;
            dest.id = src.HeroId;
        }
        public void MapHeroDTOToHero(HeroDTO src, Hero dest)
        {

            dest.Name = src.name;
            dest.HeroId = src.id;
        }
    }
}