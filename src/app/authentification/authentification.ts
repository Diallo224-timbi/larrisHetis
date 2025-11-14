import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';



@Component({
  selector: 'app-authentification',
  imports: [MatFormFieldModule,MatIconModule,MatInputModule,MatFormFieldModule,MatButtonModule],
  templateUrl: './authentification.html',
  styleUrl: './authentification.css',
})
export class Authentification {

}
