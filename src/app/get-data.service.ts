import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Day } from './classes'
import { map, mapTo } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  firestorePlacesCollection: any;
  constructor(private fire: AngularFirestore) {
    this.firestorePlacesCollection = this.fire.collection('Dates');
  }


}
