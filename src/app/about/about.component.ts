import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{
  // param:any;
  // extra:any;
  constructor(
    private service :ProductService

  ) {
  }

  ngOnInit(): void {
    const product:ProductRepresentation ={
      title:"Le Moudir",
      category:"test",
      description:"i'm testing this post radhouene",
      image:"https://image-url.jps",
      price:200
    }
    this.service.createProduct(product).subscribe({
      next:(result)=>{
        console.log(result);
      },
      error:(error:HttpErrorResponse)=>{
      if(error instanceof ErrorEvent){
        console.error(`client error is  , ${error}`);
      }else{
        console.error(`server error is ${error.status}, message is ${error.message}`);
      }
    }
    })




    /*this.service.getAllProductsWithLimit().subscribe({
      next:(data)=>{
        console.log(data);
      }
    });*/
    }

 /* ngOnInit(): void {
    console.log(this.activatedRoute);
    this.param=this.activatedRoute.snapshot.params['username']
    this.extra=this.activatedRoute.snapshot.queryParams['password']
  }*/

}
