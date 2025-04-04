using Products.Models;
using Products.Models.ViewModels;

namespace Products.Repositories.Infra 
{
    public class MySqlProductsRepository : ProductsRepository {
        private readonly ProductsDbContext _dbContext;

        public MySqlProductsRepository(ProductsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void UpdateProduct(ProductUpdateDomainModel productUpdate)
        {
            var existent = _dbContext.Products.FirstOrDefault(p => p.Id == productUpdate.Id);
            if (existent == null) {
                existent = new Models.ProductInfraModel 
                {
                    Id = productUpdate.Id,
                    Name = ""
                };
                _dbContext.Products.Add(existent);
            }
            var update = new ProductUpdateInfraModel
            {
                ActionType = productUpdate.ActionType,
                Quantity = productUpdate.Quantity,
                CreatedAt = DateTime.UtcNow,
                Product = existent
            };
            _dbContext.ProductUpdates.Add(update);
            _dbContext.SaveChanges();
        }

        public List<ProductReportDomainModel> GetReport(DateTime startDate, DateTime endDate)
        {
            // TODO: create enums for action types
            return (from products in _dbContext.Products join updates in _dbContext.ProductUpdates.Where(p => p.CreatedAt >= startDate && p.CreatedAt < endDate) on products.Id equals updates.ProductId into g
                select new ProductReportDomainModel
                {
                    Id = products.Id,
                    Name = products.Name,
                    Entries = g.Sum(p => p.ActionType == "Compra" ? p.Quantity : 0),
                    Exits = g.Sum(p => p.ActionType == "Venda" ? p.Quantity : 0)
                }).ToList();
        }
    }
}