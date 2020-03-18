import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { People } from '../people';
import { PlanetaService } from '../planeta.service';
import { Planets } from '../planets';

@Component({
  selector: 'app-painel-pessoas',
  templateUrl: './painel-pessoas.component.html',
  styleUrls: ['./painel-pessoas.component.css']
})
export class PainelPessoasComponent implements OnInit {

  pessoas: People;
  urlAnterior = "";
  urlProxima = "";
  displayedColumns = ['Nome', 'Ano Nascimento', 'Raça', 'Sexo', 'Planeta Natal'];
  
  constructor(private pessoaService: PessoaService, private planetaService: PlanetaService) { }

  ngOnInit(): void {
    this.consultar();
  }
  consultar() {
    this.pessoaService.listar().
      subscribe(resposta => {
        this.pessoas = <People>resposta
        this.urlAnterior = this.pessoas.previous;
        this.urlProxima = this.pessoas.next;
      });
  }

  listarAnterior() {
    this.pessoaService.listarAnterior(this.urlAnterior).
      subscribe(resposta => {
        this.pessoas = <People>resposta
        this.urlAnterior = this.pessoas.previous;
        this.urlProxima = this.pessoas.next;
      });
  }
  listarProxima() {
    this.pessoaService.listarProxima(this.urlProxima).
      subscribe(resposta => {
        this.pessoas = <People>resposta
        this.urlAnterior = this.pessoas.previous;
        this.urlProxima = this.pessoas.next;
      });
  }

  getPlaneta(urlPlaneta:string){
    let planeta:string;
    this.planetaService.getPlaneta(urlPlaneta).subscribe(resposta: any => planeta = resposta.name)
    return planeta;
  }

}