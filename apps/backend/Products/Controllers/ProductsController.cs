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
        public IActionResult GetReport()
        {
            return Ok(new { Message = _repository.GetReport() });
        }

        [HttpPost()]
        public IActionResult UpdateProduct([FromBody] ProductUpdateDomainModel productUpdate)
        {
            _repository.UpdateProduct(productUpdate);
            return Ok();
        }
    }
}