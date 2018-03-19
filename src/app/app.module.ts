import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { ListComponent } from './list/list.component';
import { ShipmentComponent } from './shipment/shipment.component';


@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    ListComponent,
    ShipmentComponent,
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
