import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const membros = [
            { 
                id: 11, 
                nome: 'Ricardo Sperlongo',
                endereco: 'Rua Sebastião Lappetina Russo, 260',
                telefone: '11 97722-0232',
                email: 'ricardo_tadeu30@hotmail.com',
                data_nascimento: '05/11/72',
                data_batismo: '06/08/1990', 
            },
            { 
                id: 12, 
                nome: 'Carmem Sperlongo',
                endereco: 'Rua Sebastião Lappetina Russo, 260',
                telefone: '85 97772-7932',
                email: 'carmemlopes2009@hotmail.com',
                data_nascimento: '04/05/72',
                data_batismo: '10/09/1995', 
            },
            { 
                id: 13, 
                nome: 'Isabelle Sperlongo',
                endereco: 'Rua Aeroporto de Macaé, 423',
                telefone: '84 99545-0123',
                email: 'isabelle_sperlongo@hotmail.com',
                data_nascimento: '06/10/2005',
                data_batismo: '02/01/2012', 
            },
        ];
        return {membros} ;
    }
}