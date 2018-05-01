import { Component, OnInit, Input } from '@angular/core';
import { Membros } from '../membros/membros';

@Component({
  selector: 'app-membros-detalhes',
  templateUrl: './membros-detalhes.component.html',
  styleUrls: ['./membros-detalhes.component.scss']
})
export class MembrosDetalhesComponent implements OnInit {
  @Input() membros: Membros;

  constructor() { }

  ngOnInit() {
  }

}
