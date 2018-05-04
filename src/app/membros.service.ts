import { Injectable } from '@angular/core';
import { MEMBROS } from './membros/membros-mock';
import { Membros } from './membros/membros';
import { MensagensService } from './mensagens.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MembrosService {

  constructor( private mensagensService: MensagensService) { }

  getMembros(): Observable<Membros[]> {
    this.mensagensService.add('Mensagem carregada!');
    return of(MEMBROS);
  }

}
