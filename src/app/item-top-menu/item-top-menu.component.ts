import {Component, Inject, OnDestroy} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ItemService } from '../item/item.service';
import { Configuration } from '../types/configuration';

@Component({
  selector: 'app-item-top-menu',
  templateUrl: './item-top-menu.component.html',
  styleUrls: ['./item-top-menu.component.scss'],
})
export class ItemTopMenuComponent implements OnDestroy{
  timer: FormControl;
  arrSize: FormControl;
  search: FormControl;
  configuration: Configuration;

  constructor(
    @Inject('TIMER') timerMs: number,
    @Inject('ARR_SIZE') arrSize: number,
    private itemService: ItemService
  ) {
    this.timer = new FormControl(timerMs, [
      Validators.required,
      Validators.min(1),
      Validators.pattern('^[0-9]*$'),
    ]);
    this.arrSize = new FormControl(arrSize, [
      Validators.required,
      Validators.min(1),
      Validators.pattern('^[0-9]*$'),
    ]);
    this.search = new FormControl('', [Validators.pattern('[0-9]+[, 0-9]*')]);
    this.configuration = { timer: timerMs, size: arrSize };
  }

  changeFilter() {
    if (this.search.valid) {
      this.itemService.search(
        this.search.value
          .split(',')
          .map((i: string) => i.trim())
          .filter((i: string) => i !== '')
      );
    }
  }

  changeConfiguration() {
    console.log('setConfiguration in ItemTopMenu');
    if(this.timer.valid && this.arrSize.valid){
      this.configuration = { timer: this.timer.value, size: this.arrSize.value };
      this.itemService.setConfiguration(this.configuration);
    }
  }

  stopFrequency() {
    this.itemService.stopFrequency();
  }

  ngOnDestroy(): void {
    this.stopFrequency()
  }
}
