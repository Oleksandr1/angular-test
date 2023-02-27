import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemTableComponent } from './item-table/item-table.component';
import { ItemTableRowComponent } from './item-table-row/item-table-row.component';
import { ItemTableRowChildComponent } from './item-table-row-child/item-table-row-child.component';
import { ItemTopMenuComponent } from './item-top-menu/item-top-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ItemTableComponent,
    ItemTableRowComponent,
    ItemTableRowChildComponent,
    ItemTopMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
