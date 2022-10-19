using ExpenseRecord.Dto;
using ExpenseRecord.IServices;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseRecord.Controllers
{
    [Route("api/records")]
    [ApiController]
    public class RecordSystemController : ControllerBase
    {
        private readonly IRecordSystemServices _recordsystemservices;
        public RecordSystemController(IRecordSystemServices recordsystemservices)
        {
            _recordsystemservices = recordsystemservices;
        }

        [HttpPost]
        public async Task<IActionResult> CreateItemAsync(RecordSystemDto recorditem)
        {
            try
            {
                var msg = await _recordsystemservices.CreateAsync(recorditem);
                return Created($"{msg}", msg);
            }
            catch (RecordSystemException e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetItemsAsync([FromQuery] bool? done)
        {
            Console.WriteLine("GetItemsAsync");
            var recordsitems = await _recordsystemservices.GetAll(done);
            return Ok(recordsitems);
        }

        [HttpPut]
        [Route("{Id}")]
        public async Task<IActionResult> UpdateItemAsync([FromRoute] string id, [FromBody] RecordSystemDto recordItemDto)
        {
            try
            {
                await _recordsystemservices.UpdateAsync(id, recordItemDto);
                return Ok();
            }
            catch (RecordSystemException e)
            {
                return NotFound(e.Message);
            }

        }

        [HttpDelete]
        [Route("{Id}")]
        public async Task<IActionResult> DeleteItemAsync([FromRoute] string id)
        {
            try
            {
                await _recordsystemservices.DeleteAsync(id);
                return NoContent();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }

        }


    }
}
