import { Component, OnInit } from '@angular/core';
import { __asyncDelegator } from 'tslib';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  data: any;

  constructor(private productService: ProductService) {
    let products$ = productService.getProducts();

    products$.subscribe(
      (data: any) => {
        this.data = data;
      },
      error => {
        console.error(error);
        //alert("Server error:\n" + error.message + "\nSee console for more information.");
      }
    )
  }
  
  ngOnInit(): void {
  }
}
