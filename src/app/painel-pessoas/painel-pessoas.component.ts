import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { People } from '../people';
import { PlanetaService } from '../planeta.service';
import { Pessoa } from '../results';
import { RacaService } from '../raca.service';
import { Observable } from 'rxjs';

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
  resultados: Array<Pessoa>;

  constructor(private pessoaService: PessoaService,
    private planetaService: PlanetaService, private racaService: RacaService) { }

  ngOnInit(): void {
    this.consultar();
  }
  consultar() {
    this.pessoaService.listar().
      subscribe(resposta => {
        this.pessoas = resposta;
        this.urlAnterior = this.pessoas.previous;
        this.urlProxima = this.pessoas.next;
        this.carregarResultados();        
      });
  }

  listarAnterior() {
    this.pessoaService.listarAnterior(this.urlAnterior).
      subscribe(resposta => {
        this.pessoas = resposta
        this.urlAnterior = this.pessoas.previous;
        this.urlProxima = this.pessoas.next;
        this.carregarResultados();
      });
  }

  listarProxima() {
    this.pessoaService.listarProxima(this.urlProxima).
      subscribe(resposta => {
        this.pessoas = resposta;
        this.urlAnterior = this.pessoas.previous;
        this.urlProxima = this.pessoas.next;
        this.carregarResultados();
      });
  }

  getPlaneta(urlPlaneta: string) {
    console.log("iniciando o get do planeta");
    let planeta: string;
    this.planetaService.getPlaneta(urlPlaneta).subscribe(resposta => planeta = resposta.name)
    console.log(planeta);
    return planeta;
  }

  getRaca(urlRaca: string) {
    let raca: string;
    this.racaService.getRaca(urlRaca).subscribe(resposta => raca = resposta.name)
    return raca;
  }

  carregarResultados(){
    this.resultados = new Array<Pessoa>();
        this.pessoas.results.forEach(p => {
          let pessoa: Pessoa = new Pessoa();
          pessoa.nome = p.name;
          pessoa.genero = p.gender;
          pessoa.nascimento = p.birth_year;

          if (p.homeworld) {
            pessoa.planeta = Observable.create(this.getPlaneta(p.homeworld));
          }
          else {
            pessoa.planeta = Observable.create("Unknow");
          }
          if (p.species[0]) {
            pessoa.raca = Observable.create(this.getRaca(p.species[0]));
          }
          else {
            pessoa.planeta = Observable.create("Unknow");
          }
          this.resultados.push(pessoa);
        });      
  }
}