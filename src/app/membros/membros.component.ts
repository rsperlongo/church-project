import { Component, OnInit } from '@angular/core';
import { Membros } from './membros';
import { MembrosService } from '../membros.service';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.scss']
})
export class MembrosComponent implements OnInit {

  selectedMembros: Membros;

  membros: Membros[];

  constructor( private membrosService: MembrosService ) { }

  ngOnInit() {
    this.getMembros();
  }

  onSelect(membros: Membros){
    this.selectedMembros = membros;
  }

  getMembros(): void {
    this.membrosService.getMembros()
        .subscribe( membros => this.membros = membros);
  }

  add(nome: string, telefone: string, endereco: string, email: string, data_nascimento: string, data_batismo: string): void {
    this.membrosService.addMembros({ nome, telefone, endereco, email, data_batismo, data_nascimento } as Membros)
        .subscribe(membros => {
          this.membros.push();
        });
  }

}
