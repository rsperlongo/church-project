import { Component, OnInit, Input } from '@angular/core';
import { Membros } from '../membros/membros';
import { MembrosService } from '../membros.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-membros-detalhes',
  templateUrl: './membros-detalhes.component.html',
  styleUrls: ['./membros-detalhes.component.scss']
})
export class MembrosDetalhesComponent implements OnInit {
  @Input() membros: Membros;

  updateForm: FormGroup; 

  constructor( private route: ActivatedRoute,  
               private membrosService: MembrosService, 
               private fb: FormBuilder) { 
                 this.createrForm();
               }
  
  createrForm(){
    this.updateForm = this.fb.group({
      membroNome: ['', Validators.required ],
      membroTelefone: ['', Validators.required ],
      membroEndereco: ['', Validators.required ],
      membroEmail: ['', Validators.required ],
      membroDataNascimento: ['', Validators.required],
      membroDataBatismo: ['', Validators.required],
    })
  }

  ngOnInit() {
    // this.getMembro()
  }

  /* getMembro(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.membrosService.getMembro(id)
    .subscribe(membros => this.membros = membros); 
  } */
  // goBack(): void {
  //   this.location.back();
  // }

  save(): void {
    this.membrosService.updateMembros(this.membros)
      // .subscribe(() => this.goBack());
  }

}
