import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Route } from "@angular/compiler/src/core";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent },
  { path: "products/:id", component: ProductsComponent},
  { path: "cart", component: CartComponent },
  { path: "home", component: HomeComponent },
  { path: "header", component: HeaderComponent },
  {path:"**",component:PagenotfoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

