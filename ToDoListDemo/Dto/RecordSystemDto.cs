
using System.ComponentModel.DataAnnotations.Schema;

namespace ExpenseRecord.Dto
{
    public class RecordSystemDto
    {
        [Column("task_id")]
        public string? Id { get; set; }
        [Column("task_desc")]
        public string? Name { get; set; }
        [Column("expense_type")]
        public string? Type { get; set; }
        [Column("expense_amount")]
        public int? Amount { get; set; }
        [Column("create_date")]
        public DateTime? Createtime { get; set; }
    }
}
