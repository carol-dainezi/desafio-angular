import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentosEventoComponent } from './agendamentos-evento.component';

describe('AgendamentosEventoComponent', () => {
  let component: AgendamentosEventoComponent;
  let fixture: ComponentFixture<AgendamentosEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentosEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentosEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
