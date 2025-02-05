using API.Errors;
using Core.Interfaces;
using Infrastructure.Data;
using Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StackExchange.Redis;

namespace API.Extensions
{
    public static class ApplicationServicesExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection Services, IConfiguration config)//method
        {


            Services.AddDbContext<StoreContext>(opt =>
            {
                //OR : opt.UseNpgsql(config.GetConnectionString("DefaultConnection"));
                opt.UseNpgsql(config.GetConnectionString("DefaultConnection"));
            });

            Services.AddSingleton<IConnectionMultiplexer>(c =>
           {
               var options = ConfigurationOptions.Parse(config.GetConnectionString("Redis"));
               return ConnectionMultiplexer.Connect(options);
           });
            Services.AddScoped<IBasketRepository, BasketRepository>();
            Services.AddScoped<IProductRepository, ProductRepository>();
            Services.AddScoped<ITokenService, TokenService>();

            Services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
            Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            Services.Configure<ApiBehaviorOptions>(options =>
            {
                options.InvalidModelStateResponseFactory = actionContext =>
                {
                    var errors = actionContext.ModelState
                        .Where(e => e.Value.Errors.Count > 0)
                        .SelectMany(x => x.Value.Errors)
                        .Select(x => x.ErrorMessage).ToArray();

                    var errorResponse = new ApiValidationErrorResponse
                    {
                        Errors = errors
                    };

                    return new BadRequestObjectResult(errorResponse);
                };
            });
            Services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy => 
                {
                    policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200");
                });
            });




            return Services;
        }
    }
}