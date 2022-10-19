using ExpenseRecord.Dto;
using System.Threading.Tasks;

namespace ExpenseRecord.IServices
{
    public interface IRecordSystemServices
    {
        Task<string> CreateAsync(RecordSystemDto recordSystemDto);
        Task UpdateAsync(string id, RecordSystemDto recordSystemDto);
        Task DeleteAsync(string id);
        Task<List<RecordSystemDto>> GetAll(bool? done);
        Task<RecordSystemDto> GetRecordItemDtoAsync(string id);
    }
}
