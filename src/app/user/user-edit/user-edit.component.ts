import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  currentId:any;
  currentproductData: any;
  constructor(private activatedRoute:ActivatedRoute) {
    this.currentId = this.activatedRoute.snapshot.params.id;
    console.log(this.currentId)
   }
  ngOnInit(): void {
  }

}
