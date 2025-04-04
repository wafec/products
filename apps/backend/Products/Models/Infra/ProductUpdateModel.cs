namespace Products.Models {
    public class ProductUpdateInfraModel {
        public string? Id { get; set; }
        public string? ActionType { get; set; }
        public int Quantity {get; set; }
        public DateTime CreatedAt { get; set; }
    }
}