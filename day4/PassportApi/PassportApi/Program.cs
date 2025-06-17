using PassportApi;

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

var passports = new List<Passport>();

app.MapGet("/api/passport", () => passports);
app.MapGet("/api/passport/{id:int}", (int id) =>
{
    var passport = passports.FirstOrDefault(p => p.Id == id);
    return passport is null ? Results.NotFound() : Results.Ok(passport);
});
app.MapPost("/api/passport", (Passport passport) =>
{
    if (passports.Contains(passport))
        return Results.Conflict();
    passports.Add(passport);
    return Results.Created($"/api/passport/{passports.Count}", passport);
});
app.MapPut("/api/passport", (Passport passport) =>
{
    if (passports.All(p => p.Id != passport.Id))
        return Results.NotFound();
    passports.RemoveAll(p => p.Id == passport.Id);
    passports.Add(passport);
    return Results.Created($"/api/passport/{passports.Count}", passport);
});
app.MapDelete("/api/passport/{id:int}", (int id) =>
{
   var removedCount = passports.RemoveAll(p => p.Id == id);
   return removedCount == 0 ? Results.NotFound() : Results.NoContent(); 
});

app.Run();