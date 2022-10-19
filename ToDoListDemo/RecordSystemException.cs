namespace ExpenseRecord
{
    public class RecordSystemException:Exception
    {
        public RecordSystemException() : base() { }
        public RecordSystemException(string message) : base(message) { }
    }
}
