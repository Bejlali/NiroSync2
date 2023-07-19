using Microsoft.AspNetCore.Identity;

namespace Core.Entities.Identity
{
    public class AppUser: IdentityUser
    {
        public string DisplayName { get; set; }
        public Address Address { get; set; }
        public DateOnly DateOfBirth { get; set; }
        public string KnownAs { get; set; }
        public DateTime LastActive { get; set; } = DateTime.UtcNow;
        //my fields//---
        public string FName { get; set; }
        public string LName { get; set; }
        public string Profile { get; set; }
        public string Department { get; set; }
        public string Extension { get; set; }
        public string Address { get; set; }
        public string Groups { get; set; }
    }
}