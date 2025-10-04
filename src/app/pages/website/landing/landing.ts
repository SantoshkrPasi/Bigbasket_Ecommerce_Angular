import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product/productService';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  productList: any[] = [];
  categoryList: any[] = [];

  constructor(private prodSrv: ProductService , private router : Router) {}
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }

  getAllProducts() {
    this.prodSrv.getProducts().subscribe((res: any) => {
      this.productList = res.data;
    });
  }

  getAllCategory() {
   this.prodSrv.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    });
  }

  navigateToProducts(id: number) {
    this.router.navigate(['/products', id]);
  }
}
