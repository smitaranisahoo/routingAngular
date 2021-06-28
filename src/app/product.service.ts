import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productData:Array<any> = [
    {
      id: 1,
      productname: "Samsung",
      productPrice: 566,
      discount: 56,
      type: "electron"
    },
    {
      id:2,
      productname: "LED TV",
      productPrice: 566,
      discount: 56,
      type: "electron"
    },
    {
      id:3,
      productname: "Xiomi",
      productPrice: 566,
      discount: 56,
      type: "electron"
    },
    {
      id:4,
      productname: "Hp",
      productPrice: 566,
      discount: 56,
      type: "electron"
    },
  ];
  constructor() { }

  addProduct(data:any){
    data.id = this.productData.length + 1;
    this.productData.push(data);
  }
  returnProduct(){
    return this.productData;
  }
  returnproductById(id:number){
    return this.productData.find(p =>p.id == id)
  }

}
