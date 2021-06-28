import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  currentId:any;
  currentproductData: any;
  constructor(private activatedRoute:ActivatedRoute, private route:Router) {
    this.currentId = this.activatedRoute.snapshot.params.id;
    console.log(this.currentId)
   }

  ngOnInit(): void {
  }


}
