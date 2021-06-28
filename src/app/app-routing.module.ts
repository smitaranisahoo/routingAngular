import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import {ProductListComponent} from './product/product-list/product-list.component'
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { UserListComponent } from './user/user-list/user-list.component';
const routes: Routes = [
  {
    path : "",
    component : DashboardComponent
  },

  {
    path : "productlist",
    component : ProductListComponent
  },

  {
    path : "productedit/:id",
    component : ProductEditComponent
  },
  {
    path : "productview/:id",
    component : ProductViewComponent
  },
  {
    path : "productcreate",
    component : ProductCreateComponent
  },
  {
    path : "userlist",
    component : UserListComponent
  },
  {
    path : "usercreate",
    component : UserCreateComponent
  },
  {
    path : "useredit/:id",
    component : UserEditComponent
  },
  {
    path : "userview/:id",
    component : UserViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }