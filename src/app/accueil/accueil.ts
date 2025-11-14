import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule} from '@angular/router';



@Component({
  selector: 'app-accueil',
  imports: [MatCardModule,MatButtonModule,RouterModule],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})
export class Accueil {

}
