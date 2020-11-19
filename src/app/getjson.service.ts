import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Day } from './classes'
import { map, mapTo } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';


interface FirestoreDayDoc {
  days: Day[]
}
@Injectable({
  providedIn: 'root'
})
export class GetjsonService {

  private readonly datesCol: AngularFirestoreCollection<FirestoreDayDoc>;
  d: any;
  constructor(private firestore: AngularFirestore) {
    this.datesCol = this.firestore.collection('Dates');
    this.d = this.firestore.collection<FirestoreDayDoc>('Dates');
  }

  public getDays() {
    // If you don't need the document id in the return, then use valueChanges.
    return this.firestore.collection('Dates').doc('qLfLHyFdv1hTVXcH9pyc').snapshotChanges()
  }

  // public getAllDates(): Observable<Day[][]> {
  //   // If you don't need the document id in the return, then use valueChanges.
  //   return this.datesCol.valueChanges().pipe(
  //     map((docs: FirestoreDayDoc[]): Day[][] => data.map((doc: FirestoreDayDoc): Day[] => doc.days)),
  //   );
  // }

  async pushdata(data: Day[]): Promise<void> {
    try {
      this.d.update({ data })
    } catch { err => console.log(err) }
  }

}










































