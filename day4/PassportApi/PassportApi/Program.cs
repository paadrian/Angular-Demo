using PassportApi;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontEnd", policy =>
    {
        policy.WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();
app.UseCors("AllowFrontEnd");

// Introduced constant for route prefix
const string passportRoute = "/api/passport";

var passportList = new List<Passport>();

// Converted lambda expressions to named functions for each API endpoint
app.MapGet(passportRoute, GetAllPassports);
app.MapGet($"{passportRoute}/{{id:int}}", GetPassportById);
app.MapPost(passportRoute, AddPassport);
app.MapPut(passportRoute, UpdatePassport);
app.MapDelete($"{passportRoute}/{{id:int}}", DeletePassport);

app.Run();
return;

// Extracted common methods for reusability
Passport? FindPassportById(int id) => passportList.FirstOrDefault(p => p.Id == id);

bool PassportExists(Passport passport) => passportList.Any(p => p.Id == passport.Id);

Passport ValidatePassportId(Passport passport) => passport.Id == 0  ? passport with {Id = passportList.Count + 1} : passport;

void RemovePassportById(int id) => passportList.RemoveAll(p => p.Id == id);

IResult GetPassportById(int id)
{
    var passport = FindPassportById(id);
    return passport is null ? Results.NotFound() : Results.Ok(passport);
}

IResult AddPassport(Passport passport)
{
    if (PassportExists(passport))
        return Results.Conflict();
    passport = ValidatePassportId(passport);
    passportList.Add(passport);
    return Results.Created($"{passportRoute}/{passportList.Count}", passport);
}

IResult UpdatePassport(Passport passport)
{
    if (!PassportExists(passport))
        return Results.NotFound();
    RemovePassportById(passport.Id);
    passportList.Add(passport);
    return Results.Created($"{passportRoute}/{passportList.Count}", passport);
}

IResult DeletePassport(int id)
{
    var removedCount = passportList.RemoveAll(p => p.Id == id);
    return removedCount == 0 ? Results.NotFound() : Results.NoContent();
}

IResult GetAllPassports() => Results.Ok(passportList);