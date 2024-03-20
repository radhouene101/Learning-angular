import { Component, OnInit } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent  implements OnInit{
  constructor(
    private service :ProductService

  ) {
  }
  products:Array<ProductRepresentation> = [];

  ngOnInit(): void {
    this.service.getAllProductsWithLimit().subscribe({
      next: (result) => {
          this.products=result;
      }
    })
  }

}
