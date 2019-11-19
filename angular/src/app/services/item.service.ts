import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import {Item} from '../models/items'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemsCollection: AngularFirestoreCollection<Item>
  items: Observable<Item[]>

  constructor(public afs: AngularFirestore) {
    this.items= this.afs.collection('testTable').valueChanges();
    console.log(this.items)
   }
   getItems(){
     return this.items;
   }
}

