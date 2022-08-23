import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-settings',
  templateUrl: './product-settings.component.html',
  styleUrls: ['./product-settings.component.css'],
})
export class ProductSettingsComponent implements OnInit {
  data: any;
  
  constructor(private productService: ProductService) {
    let products$ = productService.getProducts();

    products$.subscribe(
      (data: any) => {
        this.data = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {}
}
