import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of, observable } from 'rxjs';
import { MessageService } from './message.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private messageService: MessageService,
    private firestore: AngularFirestore
  ) {}

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find((hero) => hero.id === id));
  }

  getHeroesFromFirestoreDBbyID(id: number): Observable<any> {
    let HeroId = id.toString();
    return this.firestore.collection('HEROES').doc(HeroId).valueChanges();
  }

  getHeroesFromFirestoreDB(): Observable<any[]> {
    return this.firestore.collection('HEROES').valueChanges();
  }

  addHeroesToFirestoreDB(id: number, name: string): void {
    let HeroId = id.toString();
    this.firestore.collection('HEROES').doc(HeroId).set({ id: id, name: name });
  }

  updateHeroesFirestoreDB(id: number, name: string): void {
    this.firestore
      .doc('HEROES/' + id.toString())
      .update({
        id: id.toString(),
        name: name,
      })
      .catch((error) => {
        console.log('no encontrado');
      });
  }

  deleteHeroesFirestoreDB(id: number) {
    this.firestore
      .doc('HEROES/' + id.toString())
      .delete()
      .catch((error) => {
        console.log('no encontrado');
      });
  }
}
