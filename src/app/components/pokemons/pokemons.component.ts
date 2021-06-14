import { Component, OnInit,  } from '@angular/core';
import { Pokemon } from 'src/app/pokemon.model';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
pokemons:Pokemon[] = [];
count = 0

  constructor(private PokeService : PokemonsService) { }

  ngOnInit(): void {
    this.pokemons = this.PokeService.getPokemons();
    this.count = this.PokeService.comptagePokemons()
  }
 
}
