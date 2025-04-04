using Products.Models.ViewModels;

namespace Products.Repositories.Infra 
{
    public class MySqlProductsRepository : ProductsRepository {
        public void UpdateProduct(ProductUpdateDomainModel productUpdate)
        {
            
        }

        public List<ProductReportDomainModel> GetReport()
        {
            return new List<ProductReportDomainModel>()
            {
                new ProductReportDomainModel
                {
                    Id = 1,
                    Name = "Product A",
                    Entries = 10,
                    Exits = 5,
                    Balance = 5
                },
                new ProductReportDomainModel
                {
                    Id = 2,
                    Name = "Product B",
                    Entries = 20,
                    Exits = 15,
                    Balance = 5
                }
            };
        }
    }
}