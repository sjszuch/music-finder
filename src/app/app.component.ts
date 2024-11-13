import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";

import * as artistData from '../dummy.json';
import { NgFor } from '@angular/common';
import { HeroComponent } from "./hero/hero.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, NgFor, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'music-finder';

    // Data from JSON file
    artistsGenres = artistData;

    // Data from JSON file
  allArtists = this.artistsGenres.artistlist;

  featuredArtists = this.allArtists.filter(artist => artist.featured);



}
