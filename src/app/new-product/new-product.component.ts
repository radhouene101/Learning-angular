import { Component ,OnInit,Output } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import {Router} from  '@angular/router';
import { ProductRepresentation } from '../services/api/models/product-representation';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent implements OnInit {
  product:ProductRepresentation={};
  constructor(
    private service:ProductService,
    private router:Router
  ) {
  }
    ngOnInit(): void {

    }

  saveProduct() {
    this.service.createProduct(this.product).subscribe({
      next:(result)=>{
          this.router.navigate(["products"]);
      }
    });
  }
}
