using FullStack2.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FullStack2.Controllers
{
   [ApiController]
   [Route("[Controller]")]
    
    public class CarController : Controller
    {
        CarsContext db = new CarsContext();

        public Car[] GetCars()
        {
            return db.Cars.ToArray();
        }
        
       
    }
}
