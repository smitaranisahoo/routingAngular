import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

 
  currentProduct=0;
  currentId:any;
  productList:Array<any>=[]
  constructor(private productService: ProductService,private activatedRoute:ActivatedRoute) {
    this.currentId = this.activatedRoute.snapshot.params.id;
    console.log(this.currentId)
   }

  

  ngOnInit(): void {
    this.currentProduct = this.activatedRoute.snapshot.params.id;
    this.productList = this.productService.returnProduct();
  }

}
