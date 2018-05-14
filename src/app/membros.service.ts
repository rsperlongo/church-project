import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Membros } from './membros/membros';
import { MensagensService } from './mensagens.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MembrosService {

  private membrosUrl = 'api/membros';

  constructor(  private http: HttpClient,
                private mensagensService: MensagensService) { }

  getMembros(): Observable<Membros[]> {
    /* this.mensagensService.add('Mensagem carregada!');
    return of(MEMBROS); */
    return this.http.get<Membros[]>(this.membrosUrl)
  }

  getMembro(id:number): Observable<Membros>{
    const url = `${this.membrosUrl}/${id}`;
    return this.http.get<Membros>(url)
  }

  addMembros(membros: Membros): Observable<Membros[]>{
    return this.http.post<Membros[]>(this.membrosUrl, membros, httpOptions)
    
  }

  updateMembros(membros: Membros): Observable<any>{
    return this.http.put(this.membrosUrl, membros, httpOptions);
  }
  
  deleteMembros(membros: Membros | number): Observable<Membros>{
    const id = typeof membros === 'number' ? membros : membros.id;
    const url = `${this.membrosUrl}/${id}`;

    return this.http.delete<Membros>(url, httpOptions);
  }
}
