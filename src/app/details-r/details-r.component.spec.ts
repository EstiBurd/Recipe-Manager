import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRComponent } from './details-r.component';

describe('DetailsRComponent', () => {
  let component: DetailsRComponent;
  let fixture: ComponentFixture<DetailsRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
