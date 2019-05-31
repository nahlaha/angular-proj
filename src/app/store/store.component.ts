import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { Store } from 'src/app/store/store';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  stores: Store[] = [];
  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.stores = this.storeService.getData();
    console.log(this.stores)
  }

}
