namespace Products.Models.ViewModels
{
    public class ProductUpdateDomainModel
    {
        public int ProductId { get; set; }
        public string? ActionType { get; set; }
        public int Quantity { get; set; }
    }
}