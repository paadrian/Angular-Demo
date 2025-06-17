namespace PassportApi;

public record Passport(int Id, string HolderName, string Number, DateTime ExpiryDate, string Code);