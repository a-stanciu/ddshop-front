import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: number;
  
  constructor(private route: ActivatedRoute) {
    this.id = +<string>this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

}
