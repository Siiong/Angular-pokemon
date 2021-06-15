import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenerationsAPI } from '../models/generations-api';
import { PokemonAPI } from '../models/pokemon-api';
import { PokemonsAPI } from '../models/pokemons-api';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  pokemons: any;

  constructor(private http: HttpClient) {}

  getGenerations() {
    let url = 'https://pokeapi.co/api/v2/generation/';
    return this.http.get<GenerationsAPI>(url);
  }

  getPokemons(limit: number, offset: number) {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    return this.http.get<PokemonsAPI>(url);
  }

  getPokemon = (url: string) => this.http.get<PokemonAPI>(url);

  
}
