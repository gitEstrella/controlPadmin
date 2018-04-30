import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import { EntradaPersonalService } from './entrada-personal.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Observable, BehaviorSubject } from 'rxjs';
import { EntradaPersonal } from './entrada-personal-model';
import { element } from 'protractor';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns = ['Nombre', 'Puesto', 'Fecha', 'Hora'];

  constructor(private entradaService: EntradaPersonalService) {
   
  }

 
  dataSource: MatTableDataSource<EntradaPersonal>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    var entradaList: EntradaPersonal[]=[]

    var x = this.entradaService.getData();
    x.snapshotChanges().subscribe(item =>{
      item.forEach(element =>{
          var y = element.payload.toJSON();
          entradaList.push(y as EntradaPersonal);
        
      });
      this.dataSource = new MatTableDataSource<EntradaPersonal>(entradaList);
      this.dataSource.paginator = this.paginator;
    });
   /// this.dataSource = new MatTableDataSource<EntradaPersonal>(entradaList);
  
  }

  dateFormat(event: MatDatepickerInputEvent<Date>): string{
    let day =event.value.getDate();
    let month = event.value.getMonth() + 1;
    let year = event.value.getFullYear();

    return this._to2digit(day) + '-' + this._to2digit(month) + '-' + year;
  }

  private _to2digit(n: number) {
    return ('00' + n).slice(-2);
} 

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

//const  entradaList: EntradaPersonal[]=[];

/*const ELEMENT_DATA: EntradaPersonal[] = [
  { nombre: "Hydrogen", puesto: "1.0079", fecha: "H", hora:"0330"},

];*/

/*class MyDataSource<EntradaPersonal> extends DataSource<EntradaPersonal> {

  constructor(private entradaObservable: Observable<EntradaPersonal[]>) {
    super();
  }

  connect() { 
    return this.entradaObservable;
      
  }

  disconnect(){}
}*/
