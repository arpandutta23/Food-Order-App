import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FoodOrderService } from './services/food-order.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodOrderDetailsComponent } from './food-order-details/food-order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodOrderDetailsComponent
  ],
  imports: [
    BrowserModule , HttpClientModule,
    AppRoutingModule
  ],
  providers: [FoodOrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
