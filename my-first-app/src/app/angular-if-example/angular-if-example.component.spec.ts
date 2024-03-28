import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularIfExampleComponent } from './angular-if-example.component';

describe('AngularIfExampleComponent', () => {
  let component: AngularIfExampleComponent;
  let fixture: ComponentFixture<AngularIfExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularIfExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularIfExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
