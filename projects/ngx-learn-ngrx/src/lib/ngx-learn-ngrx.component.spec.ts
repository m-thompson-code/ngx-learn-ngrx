import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLearnNgrxComponent } from './ngx-learn-ngrx.component';

describe('NgxLearnNgrxComponent', () => {
  let component: NgxLearnNgrxComponent;
  let fixture: ComponentFixture<NgxLearnNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxLearnNgrxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxLearnNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
