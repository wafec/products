namespace Products.Models {
    public class ProductUpdateInfraModel {
        public int ProductId { get; set; }
        public string? ActionType { get; set; }
        public int Quantity {get; set; }
        public DateTime CreatedAt { get; set; }
    }
}