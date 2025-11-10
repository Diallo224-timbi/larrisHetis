import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ImageZoomDialog } from './image-zoom-dialog/image-zoom-dialog';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-cartographie',
  imports: [  MatCardModule, MatButtonModule],
  templateUrl: './cartographie.html',
  styleUrl: './cartographie.css',
})
export class Cartographie {
   constructor(private dialog: MatDialog) {}

  openImageZoom(src: string) {
    this.dialog.open(ImageZoomDialog, {
      data: { src },
      panelClass: 'custom-dialog-container',
      maxWidth: '90vw',
      maxHeight: '90vh'
    });
  }

}
