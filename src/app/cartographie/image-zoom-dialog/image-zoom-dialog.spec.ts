import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageZoomDialog } from './image-zoom-dialog';

describe('ImageZoomDialog', () => {
  let component: ImageZoomDialog;
  let fixture: ComponentFixture<ImageZoomDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageZoomDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageZoomDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
