import { Component, OnInit } from '@angular/core';
import { Membros } from './membros';
import { MembrosService } from '../membros.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.scss']
})
export class MembrosComponent implements OnInit {

  selectedMembros: Membros;

  membros: Membros[];
  addForm: FormGroup;

  constructor( private membrosService: MembrosService,  private fb: FormBuilder, private router: Router  ) { 
    this.createForm()
  }

  createForm() {
    this.addForm = this.fb.group({
      membroNome: ['', Validators.required ],
      membroTelefone: ['', Validators.required ],
      membroEndereco: ['', Validators.required ],
      membroEmail: ['', Validators.required ],
      membroDataNascimento: ['', Validators.required],
      membroDataBatismo: ['', Validators.required],
   });
  }

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

  add(id: any, nome: string, telefone: string, endereco: string, email: string, data_nascimento: string, data_batismo: string): void {
    this.membrosService.addMembros({nome, telefone, endereco, email, data_batismo, data_nascimento } as Membros)
        .subscribe(membros => {
          this.membros.push(id);
        });
  }

}
