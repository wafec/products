using Microsoft.EntityFrameworkCore;
using Products.Models;

namespace Products.Repositories.Infra
{
    public class ProductsDbContext : DbContext
    {
        public ProductsDbContext(DbContextOptions<ProductsDbContext> options) : base(options)
        {
        }

        public DbSet<ProductInfraModel> Products { get; set; }
        public DbSet<ProductUpdateInfraModel> ProductUpdates { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // TODO: put the connection string in to the configuration
            optionsBuilder.UseMySQL("server=database;database=Products;user=user;password=password");
        }
    }
}