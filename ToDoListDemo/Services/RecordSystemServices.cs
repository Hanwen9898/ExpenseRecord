using ExpenseRecord.Dto;
using ExpenseRecord.IServices;
using Microsoft.EntityFrameworkCore;
using System.Security.Policy;

namespace ExpenseRecord.Services
{
    public class RecordSystemServices : IRecordSystemServices
    {
        private ApplicationDbContext _applicationDbContext;
        public RecordSystemServices(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }
        public async Task<string> CreateAsync(RecordSystemDto recordSystemDto)
        {
            var id = Guid.NewGuid().ToString();
            var GetRecordItem = new RecordSystemDto
            {
                Id = id,
                Name = recordSystemDto.Name,
                Type = recordSystemDto.Type,
                Amount = recordSystemDto.Amount,
                Createtime = DateTime.Now
            };
            _applicationDbContext.recordsystemitems.Add(GetRecordItem);
            await _applicationDbContext.SaveChangesAsync();

            return $"api/v2/records/{id}";
        }
        public async Task UpdateAsync(string id, RecordSystemDto recordSystemDto)
        {
            //var recordItem=await GetRecordItemDtoAsync(id);
            var GetRecordDto = new RecordSystemDto
            {
                Id = id,
                Name = recordSystemDto.Name,
                Type = recordSystemDto.Type,
                Amount = recordSystemDto.Amount,
                Createtime = DateTime.Now

            };
            _applicationDbContext.recordsystemitems.Update(GetRecordDto);
            await _applicationDbContext.SaveChangesAsync();

        }

        public async Task DeleteAsync(string id)
        {
            var RecordItem = await GetRecordItemDtoAsync(id);
            _applicationDbContext.recordsystemitems.Remove(RecordItem);
            await _applicationDbContext.SaveChangesAsync();
        }

        public Task<List<RecordSystemDto>> GetAll(bool? done)
        {
            var recordItems = new List<RecordSystemDto>();
            
            recordItems = _applicationDbContext.recordsystemitems.ToList();
            
      
            return Task.FromResult(recordItems);
        }

        public async Task<RecordSystemDto> GetRecordItemDtoAsync(string id)
        {
            var recordItem = await _applicationDbContext.recordsystemitems.FindAsync(id);
            if (recordItem == null) throw new Exception("Record not found");
            _applicationDbContext.Entry(recordItem).State = EntityState.Detached;
            return recordItem;
        }
        
    }
}
