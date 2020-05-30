import { Component, SimpleChange } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Desarrollo de CRUD en Angular 9';
  description = 'Firebase realtime and databse with angular 9'

  itemValue = '';
  items: Observable<any[]>;

   constructor(public db: AngularFireDatabase) {
     this.items = db.list('items').valueChanges();
   }

   onSubmit(){
     this.db.list('items').push({ content: this.itemValue});
     this.itemValue = '';
   }
  /////////////////////////////////////////////////////
/*
  // create an object binding/Retrieve
  item: AngularFireObject<any>;
  // db: AngularFireDatabase
  this.item = db.object('item');
  Observable<any> item = db.object('item').valueChanges();

  //create
  // db: AngularFireDatabase
  const itemRef = db.object('item');
  //set() for destructive updates
  itemRef.set({name:'grokonez'});

  // update
  // db: AngularFireDatabase
  const itemRef = db.object('item');
  itemRef.update({url: 'facebook.com'})

  // delete
  // db: AngularFireDatabase
  const itemRef = db.object('item');
  itemRef.remove();
  */


  /////////////////////////////////////////////////////////

/*returns an Observable of data as a synchronized array of JSON
objects without snapshot Metadata. It is Simple to
render to a view: */
/*items: Observable<any[]>;
this.items = db.list('items').valueChanges();*/
/*
items: Observable<any[]>;
this.items = db.list('items').snapshotChanges();

// create
// db: AngularFireDatabase
const itemsRef = db.list('items');
itemsRef.push({site: 'facebook.com'});

// update
//set(): destructive update
//delete everything currently in place, then save the new value
const itemsRef = db.list('items'); // db: AngularFireDatabase
itemsRef.set('key', {url: 'jsa.com'});

//update(): non-destructive update
// only updates the values specified
const itemsRef = db.list('items');
itemsRef.update('key', {url:'javasampleapp.com'});

//DELETE
// db: AngularFireDatabase
const itemsRef = db.list('items');
itemsRef.remove('key');

//delete entire list
itemsRef.remove();
*/
}
