import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Day, User } from './classes'
import { map, mapTo, switchMap } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import auth from '../../node_modules/firebase'
import { Router } from '@angular/router';

interface FirestoreDayDoc {
  days: Day[]
}
@Injectable({
  providedIn: 'root'
})

export class GetjsonService {
  user$: Observable<User>;
  private readonly datesCol: AngularFirestoreCollection<FirestoreDayDoc>;
  d: any;
  constructor(private afAuth: AngularFireAuth,private firestore: AngularFirestore,private router: Router) {
    this.datesCol = this.firestore.collection('Dates');
    this.d = this.firestore.collection<Day[]>('Dates');
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
          // Logged in
        if (user) {
          return this.firestore.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )

  }
  async googleSignin() {
    const provider = new auth.auth.GoogleAuthProvider;
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.firestore.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid
    }

    return userRef.set(data, { merge: true })

  }
  public getDays(): Observable<Day[]> {
    // If you don't need the document id in the return, then use valueChanges.
    return this.firestore.collection<any>('Dates').doc('5DuPxE3rj9SbN4iwT6WU').snapshotChanges()

      .pipe(
        map(action => {
          console.log(action.payload.data().data as Day[])
          return action.payload.data().data as Day[]
        })
      )
  }
  async signOut() {
    await auth.auth().signOut();
    this.router.navigate(['/']);
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










































