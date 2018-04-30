import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';

import { MaterialModule} from './material.module';
import { FormsModule} from '@angular/forms';

//modulos para firebase 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

//servicio
import {EntradaPersonalService} from './entrada-personal.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    EntradaPersonalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
