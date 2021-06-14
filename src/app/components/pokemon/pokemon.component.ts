import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
   @Input() pokemon: Pokemon= {id,nom,categorie,type,taille,poids,img}  
  @Output() evenementClicImage = new EventEmitter

  constructor() {
   }

  ngOnInit(): void {
  }
  clicSurImage(nom: string){
    this.evenementClicImage.emit(nom)
  }

  

}
