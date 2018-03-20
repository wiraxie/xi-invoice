import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { ListComponent } from './list/list.component';
import { ShipmentComponent } from './shipment/shipment.component';

import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

//services
import { MasterService } from './master/master.service';
import { ListService } from './list/list.service';
import { ShipmentService } from './shipment/shipment.service';

import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    ListComponent,
    ShipmentComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    JsonpModule,
    NgxPaginationModule,
    FormsModule
    //AppRoutingModule,
  ],
  providers: 
  [
    MasterService,
    ListService,
    ShipmentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
