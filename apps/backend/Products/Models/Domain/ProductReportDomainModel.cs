namespace Products.Models.ViewModels {
    public class ProductReportDomainModel : IEquatable<ProductReportDomainModel>
    {
        public string? Id { get; set; }
        public string? Name { get; set; }
        public int Entries { get; set; }
        public int Exits { get; set; }
        public int Balance 
        { 
            get 
            {
                return Entries - Exits;
            } 
        }

        public bool Equals(ProductReportDomainModel? other)
        {
            if (other == null) return false;
            return Id == other.Id && Name == other.Name && Entries == other.Entries && Exits == other.Exits;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Id, Name, Entries, Exits);
        }
    }
}