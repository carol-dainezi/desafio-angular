import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaBebidaComponent } from './nova-bebida.component';

describe('NovaBebidaComponent', () => {
  let component: NovaBebidaComponent;
  let fixture: ComponentFixture<NovaBebidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaBebidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaBebidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
