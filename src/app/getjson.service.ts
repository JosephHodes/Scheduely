import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Day } from './classes'
import { map, mapTo } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class GetjsonService {
  man: Day[] = [];
  invoice: Observable<Day[]>;
  firestorePlacesCollection: any;
  constructor(private firestore: AngularFirestore, private http: HttpClient) {
    this.firestorePlacesCollection = this.firestore.collection('Dates');
  }


  public getJSON() {
    return this.firestorePlacesCollection.doc('qLfLHyFdv1hTVXcH9pyc').get().pipe(map(
      (res) => { return (res as any).data() }
    ))
  }
  async pushdata(data: Day[]): Promise<void> {
    try {
      this.firestorePlacesCollection.add(data)
    } catch { err => console.log(err) }
  }

}










































