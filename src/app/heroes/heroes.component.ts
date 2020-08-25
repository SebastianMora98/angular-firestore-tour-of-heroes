import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroesDB();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  getHeroesDB(): void {
    this.heroService
      .getHeroesFromFirestoreDB()
      .subscribe(
        (heroes) => ((this.heroes = heroes), console.log(this.heroes))
      );
  }
  addHeroesDB(form: NgForm) {
    this.heroService.addHeroesToFirestoreDB(form.value.id, form.value.name);
  }

  updateHeroesDB(form: NgForm) {
    this.heroService.updateHeroesFirestoreDB(form.value.id, form.value.name);
  }
  deleteHeroesDB(form: NgForm) {
    this.heroService.deleteHeroesFirestoreDB(form.value.id);
  }
}
