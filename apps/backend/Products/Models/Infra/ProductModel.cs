namespace Products.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Products")]
    public class ProductInfraModel
    {
        public string? Id { get; set; }

        public string? Name { get; set; }
    }
}