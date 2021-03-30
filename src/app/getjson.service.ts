import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Day, User } from './classes'
import { map, mapTo, switchMap } from 'rxjs/operators';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import auth from '../../node_modules/firebase'
import { Router } from '@angular/router';
import { UpdateOutputFileStampsProject } from 'typescript';


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
  constructor(private afAuth: AngularFireAuth,private firestore: AngularFirestore,private router: Router, private http:HttpClient) {
    this.datesCol = this.firestore.collection('Dates');
    this.d = this.firestore.collection<Day[]>('Dates');
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
          // Logged in
        if (user) {
          console.log((user as any).email)
          return this.firestore.doc<User>(`users/${(user as any).email}`).valueChanges();
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
    console.log((credential as any).user.email)
    return this.updateUserData((credential as any).user.email);
  }

  public updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any>= this.firestore.doc(`users/${user}`);
      console.log(user)
     const data ={uid:user,
      docdata:[ {classes:[], weekday:'monday'},{classes:[], weekday:'Tuesday'},{classes:[], weekday:'Wednesday'},{classes:[], weekday:'Thursday'},{classes:[], weekday:'Friday'}]}
      console.log(data)
    return userRef.set(data, { merge: true })

  }
  public getDays(userid): Observable<Day[]> {
    // If you don't need the document id in the return, then use valueChanges.
    return this.firestore.doc<any>(`users/${userid}`).snapshotChanges()

      .pipe(
        map(action => {
          console.log(action.payload.data().docdata as Day[])
          return action.payload.data().docdata as Day[]
        })
      )
  }
  async signOut() {
    await auth.auth().signOut();
    this.router.navigate(['/']);
  }
// public getreq(){
//   return this.http.get('https://aefschools.my.webex.com/mw3300/mywebex/atlasbrand.do?siteurl=aefschools.my&Rnd="')
// }
  // public getAllDates(): Observable<Day[][]> {
  //   // If you don't need the document id in the return, then use valueChanges.
  //   return this.datesCol.valueChanges().pipe(
  //     map((docs: FirestoreDayDoc[]): Day[][] => data.map((doc: FirestoreDayDoc): Day[] => doc.days)),
  //   );
  // }

  pushdata(data: any, userid:any) {
console.log(userid)
      return this.firestore.collection('users').doc(userid).set(data, {merge:true })


  }
}










































