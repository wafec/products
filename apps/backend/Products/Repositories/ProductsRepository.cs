using System.Collections.Generic;
using System.Threading.Tasks;
using Products.Models;
using Products.Models.Domain;
using Products.Models.ViewModels;

namespace Products.Repositories
{
    public interface ProductsRepository
    {
        void UpdateProduct(ProductUpdateDomainModel productUpdate);
        List<ProductReportDomainModel> GetReport(DateTime startDate, DateTime endDate);
        ProductDomainModel? GetProductById(string id);
    }
}