import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NMisionComponent } from './nmision.component';

describe('NMisionComponent', () => {
  let component: NMisionComponent;
  let fixture: ComponentFixture<NMisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NMisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
