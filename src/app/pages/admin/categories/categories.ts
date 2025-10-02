import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductService } from '../../../service/product/productService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class Categories {
  products$:Observable<any>;
  constructor(private prodycrSrv:ProductService){ 
    this.products$=this.prodycrSrv.getCategory().pipe(
      map((item:any)=>{
        return item.data;
      })
    );  
  }
}
