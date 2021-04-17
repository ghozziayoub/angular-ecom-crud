import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http";


import { ChartsModule } from 'ng2-charts';

import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { HomeComponent } from './components/public/home/home.component';
import { Page404Component } from './components/public/page404/page404.component';
import { NavbarComponent } from './components/public/shared/navbar/navbar.component';
import { FooterComponent } from './components/public/shared/footer/footer.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { CategoriesListComponent } from './components/private/admin/category/categories-list/categories-list.component';
import { UsersListComponent } from './components/private/admin/user/users-list/users-list.component';
import { UserDetailsComponent } from './components/private/admin/user/user-details/user-details.component';
import { CategoryAddComponent } from './components/private/admin/category/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/private/admin/category/category-update/category-update.component';
import { MyOrdersComponent } from './components/private/client/my-orders/my-orders.component';
import { ProductsListComponent } from './components/private/admin/product/products-list/products-list.component';
import { ProductAddComponent } from './components/private/admin/product/product-add/product-add.component';
import { ProductUpdateComponent } from './components/private/admin/product/product-update/product-update.component';
import { OrdersListComponent } from './components/private/admin/orders/orders-list/orders-list.component';
import { MyProfileComponent } from './components/private/client/my-profile/my-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    Page404Component,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    CategoriesListComponent,
    UsersListComponent,
    UserDetailsComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
    MyOrdersComponent,
    ProductsListComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    OrdersListComponent,
    MyProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
