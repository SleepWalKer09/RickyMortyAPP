import {character} from '../components/interfaces/character.interface'
import { environment} from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  searchCharacters(query='',page=1){
    const filter = `${environment.baseUrlAPI}/?name=${query}&page={page}`;
    return this.http.get<character[]>(filter);
  }

  getDetails(id:number){
    return this.http.get<character>(`${environment.baseUrlAPI}/${id}`);
  }

}
