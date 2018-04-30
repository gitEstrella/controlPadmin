import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable()
export class EntradaPersonalService {

  entradasObservable:AngularFireList<any>

  constructor (private firebase : AngularFireDatabase) { }

  getData(){
  
    this.entradasObservable = this.firebase.list<any>('ControlEntrada');

    return  this.entradasObservable;
  }

   
}



