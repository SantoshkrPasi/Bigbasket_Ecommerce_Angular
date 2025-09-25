import { CommonModule } from '@angular/common';
import { Component ,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../../service/product/productService';

@Component({
  selector: 'app-products',
  imports: [CommonModule , FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit{
  isSidePanelVisible : boolean = false;

  productObj : any =
  {
  "productId": 0,
  "productSku": "",
  "productName": "",
  "productPrice": 0,
  "productShortName": "",
  "productDescription": "",
  "createdDate": new Date(),
  "deliveryTimeSpan": "",
  "categoryId": 0,
  "productImageUrl": ""
}

categoryList : any[] = [];

constructor(private productSrv : ProductService){}

ngOnInit(): void { 
  this.getAllCategory();
}

getAllCategory() {
  this.productSrv.getCategory().subscribe((res:any)=>{
    console.log(res);
    this.categoryList = res.data;
  })
}

onSave() {
  this.productSrv.saveProduct(this.productObj).subscribe((res:any)=>{
    debugger;
    if(res.result) {
      alert('Product created successfully');
    }
    else {
      alert(res.message);
    }
  })  
}

  openSidePanel() {   
      this.isSidePanelVisible = true;
  }
  closeSidePanel() {   
      this.isSidePanelVisible = false;
  }
}
