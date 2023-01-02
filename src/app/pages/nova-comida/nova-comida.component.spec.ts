import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaComidaComponent } from './nova-comida.component';

describe('NovaComidaComponent', () => {
  let component: NovaComidaComponent;
  let fixture: ComponentFixture<NovaComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaComidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
