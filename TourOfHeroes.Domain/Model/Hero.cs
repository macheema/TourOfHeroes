﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TourOfHeroes.Domain.Model
{
    public class Hero
    {
        public int HeroId { get; set; }
        public string Name { get; set; }
    }
}
