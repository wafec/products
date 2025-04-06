using Microsoft.AspNetCore.Mvc;
using Products.Models.ViewModels;
using Products.Repositories;

namespace Products.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly ProductsRepository _repository;

        public ProductsController(ProductsRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetReport(DateTime startDate, DateTime endDate)
        {
            return Ok(new { Message = _repository.GetReport(startDate, endDate) });
        }

        [HttpPost()]
        public IActionResult UpdateProduct([FromBody] ProductUpdateDomainModel productUpdate)
        {
            _repository.UpdateProduct(productUpdate);
            return Ok();
        }

        [HttpGet("{id}")]
        public IActionResult GetProductById(string id)
        {
            var product = _repository.GetProductById(id);
            if (product == null)
            {
            return NotFound();
            }
            return Ok(product);
        }
    }
}