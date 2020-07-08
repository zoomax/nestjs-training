import {IsNotEmpty, IsInt, Min} from "class-validator"
export class CreateProductDto  { 
 @IsNotEmpty() title : string ; 
 @Min(0)
 @IsInt()
 @IsNotEmpty() 
 amount : number ; 
 @IsNotEmpty() description : string ;
 @Min(0)
 @IsInt() 
 @IsNotEmpty() 
 price : number ; 
 

}