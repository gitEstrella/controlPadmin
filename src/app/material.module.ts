import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatPaginatorModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';

@NgModule({

    imports: [MatButtonModule,
        MatToolbarModule,
        MatTableModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule],
    exports: [MatButtonModule,
        MatToolbarModule,
        MatTableModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule]
})

export class MaterialModule{ }