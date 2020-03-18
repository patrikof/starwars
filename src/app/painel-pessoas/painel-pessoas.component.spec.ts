import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelPessoasComponent } from './painel-pessoas.component';

describe('PainelPessoasComponent', () => {
  let component: PainelPessoasComponent;
  let fixture: ComponentFixture<PainelPessoasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelPessoasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
