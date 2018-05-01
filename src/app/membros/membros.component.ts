import { Component, OnInit } from '@angular/core';
import { MEMBROS } from './membros-mock';
import { Membros } from './membros';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.scss']
})
export class MembrosComponent implements OnInit {

  membros = MEMBROS;

  selectedMembros: Membros

  constructor() { }

  ngOnInit() {
  }

  onSelect(membros: Membros){
    this.selectedMembros = membros;
  }

}
