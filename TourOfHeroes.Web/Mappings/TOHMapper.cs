using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TourOfHeroes.Web.Mappings
{
    public class TOHMapper
    {
        public static void Initialize()
        {
            Mapper.Initialize(cfg => cfg.AddProfile<TOHMappingProfile>());
        }
    }
}