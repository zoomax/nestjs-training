import {Injectable, Inject} from "@nestjs/common"
import  {ProductModel} from  "./product.model"
import {CreateProductDto } from "./dto/create-product.dto"
import { v1 as uuid} from "uuid" ; 
@Injectable() 
export class ProductService { 
private  products : ProductModel []  = [] ; 
getProducts () : ProductModel[] { 
    return this.products
}

createProduct(product : CreateProductDto) : ProductModel { 
    const {title ,price , description , amount} = product ;  
    const newProduct : ProductModel  = new ProductModel() ;  
 
       newProduct.id  = uuid()  ; 
       newProduct.title =  title ; 
       newProduct.amount =amount ;  
       newProduct.price =price;   
       newProduct.description = description  ;
         
    
    this.products.push(newProduct) ; 
   return newProduct  ; 
}


}