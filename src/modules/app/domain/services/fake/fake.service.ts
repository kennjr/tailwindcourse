import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestMenuItems } from 'src/modules/app/common/AppUtils';
import { MenuItem } from 'src/modules/app/data/models/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor( private http: HttpClient ) { }

  // this is an test observable
  readonly observable = new Observable<MenuItem[]>(subscriber => {
    subscriber.next([TestMenuItems.TEST_ITEM_1, TestMenuItems.TEST_ITEM_2]);
    subscriber.next([TestMenuItems.TEST_ITEM_3, TestMenuItems.TEST_ITEM_4])
    setTimeout(() => {
      subscriber.next([TestMenuItems.TEST_ITEM_5]);
      subscriber.complete();
    }, 3000);
  });

  public getMenu(): Observable<MenuItem[]>{
    // get the menu from the server
    return this.observable;
  }
}
