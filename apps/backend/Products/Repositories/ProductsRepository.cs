using System.Collections.Generic;
using System.Threading.Tasks;
using Products.Models;
using Products.Models.ViewModels;

namespace Products.Repositories
{
    public interface ProductsRepository
    {
        void UpdateProduct(ProductUpdateDomainModel productUpdate);
        List<ProductReportDomainModel> GetReport();
    }
}