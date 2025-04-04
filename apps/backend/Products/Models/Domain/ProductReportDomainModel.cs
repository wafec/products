namespace Products.Models.ViewModels {
    public class ProductReportDomainModel
    {
        public string? Id { get; set; }
        public string? Name { get; set; }
        public int Entries { get; set; }
        public int Exits { get; set; }
        public int Balance { get; set; }
    }
}