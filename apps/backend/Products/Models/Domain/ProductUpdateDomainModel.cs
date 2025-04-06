namespace Products.Models.ViewModels
{
    public class ProductUpdateDomainModel
    {
        public string? Id { get; set; }
        public string? ActionType { get; set; }
        public int Quantity { get; set; }
        public string? Name { get; set; }
    }
}