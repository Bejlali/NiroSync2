using API.Dtos;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    //[ApiController]
    //[Route("api/[controller]")]
    // public class ProductsController : ControllerBase
    public class ProductsController : BaseApiController
    {
        // private readonly StoreContext _context;-replace with product repository method
        // private readonly IProductRepository _repo; - replace with Generic repository
        //access to datacontext - database
        //  public ProductsController(StoreContext context) ;-replace with product repository method
        // public ProductsController(IProductRepository repo) ;-replace with product repository method
        private readonly IGenericRepository<Product> _productsRepo;
        private readonly IGenericRepository<ProductType> _productTypeRepo;
        private readonly IGenericRepository<ProductBrand> _productBrandRepo;
        private readonly IMapper _mapper;

        public ProductsController(IGenericRepository<Product> productsRepo,
            IGenericRepository<ProductType> productTypeRepo,
            IGenericRepository<ProductBrand> productBrandRepo, IMapper mapper)
        {
            _mapper = mapper;
            _productsRepo = productsRepo;
            _productBrandRepo = productBrandRepo;
            _productTypeRepo = productTypeRepo;


            //_repo = repo; - replace with Generic repository
            //  _context = context; -replace with product repository method

        }

        //end point Tolist
        [HttpGet]
        /*         public ActionResult<List<Product>> GetProducts()
                {
                    //return "Peoducts List";
                    var products = _context.Products.ToList();
                    return products;
                } */

        //convert to async
        // public async Task<ActionResult<List<Product>>> GetProducts();-replace with dtos
        // public async Task<ActionResult<List<ProductToReturnDto>>> GetProducts()
        //public async Task<ActionResult<IReadOnlyList<ProductToReturnDto>>> GetProducts(string sort, int? brandId, int? typeId)
       // public async Task<ActionResult<IReadOnlyList<ProductToReturnDto>>> GetProducts([FromQuery]ProductSpecParams productParams)
        public async Task<ActionResult<Pagination<ProductToReturnDto>>> GetProducts([FromQuery]ProductSpecParams productParams)
        
        {
            // var products = await _context.Products.ToListAsync();;-replace with product repository method
            //var products = await _repo.GetProductsAsync();-replace with product repository method
            // var products = await _productsRepo.ListAllAsync();;-replace with specification  method
            //var spec = new ProductsWithTypesAndBrandsSpecification(sort, brandId, typeId);
            var spec = new ProductsWithTypesAndBrandsSpecification(productParams);
            var countSpec = new ProductsWithFiltersForCountSpecification(productParams);
            var totalItems = await _productsRepo.CountAsync(countSpec);
            var products = await _productsRepo.ListAsync(spec);
            var data = _mapper.Map<IReadOnlyList<ProductToReturnDto>>(products);

           // return Ok(_mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDto>>(products));
            return Ok(new Pagination<ProductToReturnDto>(productParams.PageIndex,
                productParams.PageSize, totalItems, data));
            /*            return product.Select(product => new ProductToReturnDto
                       {

                           Id = product.Id,
                           Name = product.Name,
                           Description = product.Description,
                           PictureUrl = product.PictureUrl,
                           Price = product.Price,
                           ProductBrand = product.ProductBrand.Name,
                           ProductType = product.ProductType.Name
                       }
                          ).ToList(); */
            // return Ok(products);

        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        //[ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        //public async Task<ActionResult<Product>> GetProduct(int id);-replace with dtos
        public async Task<ActionResult<ProductToReturnDto>> GetProduct(int id)
        {
            // return await _repo.GetProductByIdAsync(id);;-replace with product repository method
            //return await _productsRepo.GetByIdAsync(id);;-replace with specification method
            // var spec = new ProductsWithTypesAndBrandsSpecification(id);;-replace with dtos
            //implement dto
            /*  return new ProductToReturnDto
             {
                 Id = product.Id,
                 Name = product.Name,
                 Description = product.Description,
                 PictureUrl = product.PictureUrl,
                 Price = product.Price,
                 ProductBrand = product.ProductBrand.Name,
                 ProductType = product.ProductType.Name

             }; */
            var spec = new ProductsWithTypesAndBrandsSpecification(id);

            var product = await _productsRepo.GetEntityWithSpec(spec);
            if (product == null) return NotFound(new ApiResponse(404));

            return _mapper.Map<Product, ProductToReturnDto>(product);
        }

        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetProductBrands()
        {
            // return Ok(await _repo.GetProductBrandsAsync());;-replace with product repository method
            return Ok(await _productBrandRepo.ListAllAsync());
        }

        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductTypes()
        {
            // return Ok(await _repo.GetProductTypesAsync());;-replace with product repository method
            return Ok(await _productTypeRepo.ListAllAsync());
        }
    }
}