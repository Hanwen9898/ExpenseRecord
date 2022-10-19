using ExpenseRecord.Dto;
using Microsoft.EntityFrameworkCore;
namespace ExpenseRecord
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) :
           base(options)
        {

        }

        public DbSet<RecordSystemDto> recordsystemitems { get; set; }
    }
}
