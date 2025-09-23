import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CommonModule , FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
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

  openSidePanel() {   
      this.isSidePanelVisible = true;
  }
  closeSidePanel() {   
      this.isSidePanelVisible = false;
  }
}
