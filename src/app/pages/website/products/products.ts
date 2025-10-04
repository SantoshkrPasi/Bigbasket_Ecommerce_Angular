import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../../../service/product/productService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
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
