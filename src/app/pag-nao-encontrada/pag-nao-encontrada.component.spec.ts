import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagNaoEncontradaComponent } from './pag-nao-encontrada.component';

describe('PagNaoEncontradaComponent', () => {
  let component: PagNaoEncontradaComponent;
  let fixture: ComponentFixture<PagNaoEncontradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagNaoEncontradaComponent]
    });
    fixture = TestBed.createComponent(PagNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
