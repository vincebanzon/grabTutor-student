import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Schedule {
  id: string,
  name: string,
  sub: string
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  // private schedules: Observable<Schedule[]>;
  private schedules: any;
  private schedulesCollection: AngularFirestoreCollection<Schedule>;
  snapshotChangeSubscription;


  constructor(private afs: AngularFirestore) {
    // this.schedulesCollection = this.afs.collection<Schedule>('schedules');
    // console.log("schedulecollection");
    // console.log(this.schedulesCollection);
    // this.schedules = this.schedulesCollection.snapshotChanges().pipe(
    //   map(actions => {
    //     console.log("Actions: ");
    //     console.log(actions);
    //     return actions.map(a => {
    //       console.log("a");
    //       console.log(a);
    //       const data = a.payload.doc.data();
    //       console.log("Data: ");
    //       console.log(data);
    //       const id = a.payload.doc.id;
    //       return { id, ...data};
    //     })
    //   })
    // )
    // this.fetchSchedules();
    // this.fetchSchedules2();
    this.fetchSchedules3();


    setTimeout(
      () => {
        console.log('Timered schedules');
        console.log(this.schedules);
      }, 3000
    )

  }

  fetchSchedules3() {
    console.log("3")
    let schedulesService = this.afs.collection('schedules').snapshotChanges();
    console.log('beforeSubscribe');
    console.log(schedulesService);
    schedulesService.subscribe((data) => {
      console.log(data);
      console.log('before')
      this.schedules = data.map(e => {
        console.log("data()")
        console.log(e.payload.doc.data());
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()["name"]
        }
      })
    })
  }

  fetchSchedules2() {

    console.log('2')
    this.schedulesCollection = this.afs.collection<Schedule>('schedule');
    this.schedules = this.schedulesCollection.valueChanges();

  }

  fetchSchedules() {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangeSubscription = this.afs.collection('schedules').snapshotChanges();

      console.log("snapshotchangesubscription")
      console.log(this.snapshotChangeSubscription);
      resolve(this.snapshotChangeSubscription);
    })
  }

  getSchedules(): Observable<Schedule[]> {
    return this.schedules;
  }

  getSchedule(id: string): Observable<Schedule> {
    return this.schedulesCollection.doc<Schedule>(id).valueChanges().pipe(
      take(1),
      map(schedule => {
        schedule.id = id;
        return schedule
      })
    )
  }

  addSchedule(schedule: Schedule): Promise<DocumentReference> {
    return this.schedulesCollection.add(schedule);
  }

  updateSchedule(schedule: Schedule): Promise<void> {
    return this.schedulesCollection.doc(schedule.id).update({name: schedule.name})
  }

  deleteSchedule(id: string): Promise<void> {
    return this.schedulesCollection.doc(id).delete();
  }
}
