import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenerationsAPI } from '../models/generations-api';
import { PokemonsAPI } from '../models/pokemons-api';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {


  constructor(private http: HttpClient) { }

getGenerations(){
  let url = "https://pokeapi.co/api/v2/generation/";
  return this.http.get<GenerationsAPI>(url)
}

  // getPokemons() {
  //   let url  ="https://pokeapi.co/api/v2/pokemon/"
  //   return this.http.get<PokemonsAPI>(url)
  // }

  // comptagePokemons() {
  //   return this.pokemons.length
  // }
  // rechercherPokemon(nomDuPokemon: string){
  //   let regex = new RegExp(nomDuPokemon, 'gi');
  //   return this.pokemons.filter( pokemon => pokemon.nom.match(regex));
  // }
}
