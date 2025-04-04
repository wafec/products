using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Products.Models {
    [Table("ProductUpdates")]
    public class ProductUpdateInfraModel {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [ForeignKey(nameof(ProductInfraModel))]
        public string? ProductId { get; set; }

        public string? ActionType { get; set; }

        public int Quantity { get; set; }

        public DateTime CreatedAt { get; set; }


        public virtual ProductInfraModel? Product { get; set; }
    }
}