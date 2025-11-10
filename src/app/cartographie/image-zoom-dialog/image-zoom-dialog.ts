import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-zoom-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  template: `
    <div class="dialog-container">
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/403431164700353.63fb845a5ce90.jpg" />
    </div>
  `,
  styles: [`
    .dialog-container {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
    .zoomable-image {
      max-width: 100%;
      max-height: 100%;
      cursor: grab;
      transition: transform 0.3s ease;
    }
    .zoomable-image:active {
      cursor: grabbing;
    }
  `]
})
export class ImageZoomDialog {
  constructor(
    public dialogRef: MatDialogRef<ImageZoomDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { src: string }
  ) {}
}
