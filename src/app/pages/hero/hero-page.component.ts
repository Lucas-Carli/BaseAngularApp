import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: `./hero-page.component.html`,
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  heroNameSignal = signal('Iron Man');
  heroAgeSignal = signal(45);

  heroDescription = computed(() => {
    return `${this.heroNameSignal()} - ${this.heroAgeSignal()}`;
  });

  capitalizedName = computed(() => {
    return this.heroNameSignal().toUpperCase();
  });

  // getHeroDescription() {
  //   return `${this.heroNameSignal()} - ${this.heroAgeSignal()}`;
  // }

  changeHero() {
    this.heroNameSignal.set('Spiderman');
    this.heroAgeSignal.set(22);
  }

  resetForm() {
    this.heroNameSignal.set('Iron Man');
    this.heroAgeSignal.set(45);
  }

  changeAge() {
    this.heroAgeSignal.set(60);
  }

  toUpperCase() {
    let name = this.heroNameSignal();
    return name?.toUpperCase();
  }
}
