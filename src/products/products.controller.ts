import { Controller  , Get , Post  , Param , Body, Query, ValidationPipe, UsePipes} from '@nestjs/common';
import { ProductModel } from './product.model';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
constructor(private readonly productServise : ProductService) {}
@Get()
getDate() : ProductModel[] { 
return this.productServise.getProducts() ; 
}

@Post()
@UsePipes(ValidationPipe)
createProduct(@Body() product : CreateProductDto) : ProductModel { 
return this.productServise.createProduct(product) ; 
}

}
