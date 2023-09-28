import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonModel } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-poke-modal',
  templateUrl: './poke-modal.component.html',
  styleUrls: ['./poke-modal.component.scss']
})
export class PokeModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PokeModalComponent>,
    public pokeService:PokemonService) { }

    public pokemon : PokemonModel = new PokemonModel();
    public busyMsg : string = "Loading";
    public loading : boolean = true;

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    this.loading = true;
    var pokeId = Math.floor(Math.random() * 150);
    this.pokeService.getPokemon(pokeId).subscribe((result: { forms: { name: string ; url: string }[]; }) => {
      
      this.pokemon.name = result.forms[0].name;
      this.pokeService.getPokemonImage(result.forms[0].url).subscribe((result: { sprites: { front_default: string; }; }) => {
        this.pokemon.url = result.sprites.front_default;
        this.loading = false;
      })
    })

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
