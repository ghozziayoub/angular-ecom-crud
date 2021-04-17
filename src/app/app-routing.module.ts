import { ClientGuard } from './guards/client.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesListComponent } from './components/private/admin/category/categories-list/categories-list.component';
import { CategoryAddComponent } from './components/private/admin/category/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/private/admin/category/category-update/category-update.component';
import { UsersListComponent } from './components/private/admin/user/users-list/users-list.component';
import { MyOrdersComponent } from './components/private/client/my-orders/my-orders.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { Page404Component } from './components/public/page404/page404.component';
import { RegisterComponent } from './components/public/register/register.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';
import { ProductAddComponent } from './components/private/admin/product/product-add/product-add.component';
import { ProductsListComponent } from './components/private/admin/product/products-list/products-list.component';
import { ProductUpdateComponent } from './components/private/admin/product/product-update/product-update.component';
import { UserDetailsComponent } from './components/private/admin/user/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  // ADMIN ROUTES
  {
    path: 'admin',
    children: [
      {
        path: "category",
        children: [
          {
            path: "list",
            component: CategoriesListComponent
          },
          {
            path: "add",
            component: CategoryAddComponent
          },
          {
            path: "update/:id",
            component: CategoryUpdateComponent
          },
        ]
      },
      {
        path: "product",
        children: [
          {
            path: "list",
            component: ProductsListComponent
          },
          {
            path: "add",
            component: ProductAddComponent
          },
          {
            path: "update/:id",
            component: ProductUpdateComponent
          },
        ]
      },
      {
        path: "user",
        children: [
          {
            path: "list",
            component: UsersListComponent
          },
          {
            path: "details/:di",
            component: UserDetailsComponent
          }
        ]
      }
    ],
    canActivateChild: [AdminGuard]
  },
  {
    path: 'client',
    children: [
      {
        path: "order",
        children: [
          {
            path: "list",
            component: MyOrdersComponent
          }
        ]
      }
    ],
    canActivateChild: [ClientGuard]
  },

  //page 404
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
