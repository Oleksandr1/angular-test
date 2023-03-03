import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemTableComponent } from './table/item-table/item-table.component';
import { ItemTableRowComponent } from './table/item-table-row/item-table-row.component';
import { ItemTableRowChildComponent } from './table/item-table-row-child/item-table-row-child.component';
import { ItemTopMenuComponent } from './item-top-menu/item-top-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemService } from './item/item.service';
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
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: 'TIMER', useValue: 1000 },
    { provide: 'ARR_SIZE', useValue: 100 },
    ItemService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
