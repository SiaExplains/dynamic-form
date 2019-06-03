import { NgModule } from "@angular/core";
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [MatInputModule,MatCardModule,MatFormFieldModule],
  exports: [MatInputModule,MatCardModule,MatFormFieldModule]
})

export class MaterialModule { }
