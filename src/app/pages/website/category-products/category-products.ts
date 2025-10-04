import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../service/product/productService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-products',
  imports: [CommonModule],
  templateUrl: './category-products.html',
  styleUrl: './category-products.css',
})
export class CategoryProducts {
  activeCategoryId: number = 0;
  products: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, private prodSrv: ProductService) {
    this.activatedRoute.params.subscribe((res: any) => {
      debugger;
      this.activeCategoryId = res.id;
      this.loadProducts();
    });
  }
  loadProducts() {
    this.prodSrv.getProductsByCategory(this.activeCategoryId).subscribe((res: any) => {
      this.products = res.data;
    });
  }
}
