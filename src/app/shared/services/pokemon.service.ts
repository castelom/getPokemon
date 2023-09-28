import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PokemonModel } from "src/app/models/pokemon.model";

@Injectable({
    providedIn: 'root',
})
export class PokemonService{
    constructor(private http: HttpClient){}
    private baseUrl = "https://pokeapi.co/api/v2/pokemon/"

    public getPokemon(pokeId: number) : any{
        return this.http.get<any>(this.baseUrl+pokeId);
    }
    public getPokemonImage(url: string): any {
        return this.http.get<any>(url);
    }
}