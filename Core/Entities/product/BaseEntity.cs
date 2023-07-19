namespace Core.Entities
{
    public class BaseEntity
    {
     public int Id { get; set; }
        public string Type { get; set; }
        public string Status { get; set; }
        public string IsDeleted { get; set; }
        public string External_id { get; set; }
        public string Parent_id { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public DateTime LastModified { get; set; } = DateTime.UtcNow;
        
    }
}