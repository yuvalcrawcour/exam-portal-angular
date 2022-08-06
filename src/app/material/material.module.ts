import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from'@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const MaterialComponents=[
  MatProgressSpinnerModule,MatRadioModule ,MatListModule, MatSidenavModule, MatButtonModule, MatIconModule,MatButtonToggleModule, MatFormFieldModule,MatInputModule,FormsModule,ReactiveFormsModule, MatCardModule,MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
