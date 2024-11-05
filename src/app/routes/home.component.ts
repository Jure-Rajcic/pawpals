import { Component, AfterViewInit } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <p class="tw-text-center tw-uppercase">--- Creative Marketing Agency</p>
    <div class="tw-my-8">
      <h1 class="tw-text-center tw-text-8xl tw-font-montserrat tw-font-bold">Digital. Brand.</h1>
      <h1 class="type-writer tw-text-center tw-text-8xl tw-font-montserrat tw-font-bold"></h1>
    </div>
    <p class="tw-text-center tw-uppercase">We help brands and companies stand out in the digital age.</p>
    <h1 [@fadeIn] class="fade-element">This is fade element</h1>
  `,

})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    this._setTypewriter();
  }

  _setTypewriter() {
    const target = document.querySelector('.type-writer');
    
    if (!target) {
      console.warn('Typewriter target element not found');
      return;
    }

    const writer = new Typewriter(target, { loop: true, deleteSpeed: 60 });
    const strings = ['Champions.', 'Pioneers.', 'Heroes.', 'Superstars.', 'Legends.', 'Winners.', 'Leading Lights.', 'White Knights.'];
    for (const string of strings) {
      writer.strings(400, string).rest(1500).remove(string.length).rest(1500);
    }
    writer.start();
  }
}
