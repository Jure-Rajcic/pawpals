import { Component, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, group } from '@angular/animations';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <p class="tw-text-center tw-uppercase fade-element">--- Creative Marketing Agency</p>
    <div class="tw-my-8 fade-element">
      <h1 class="tw-text-center tw-text-8xl tw-font-montserrat tw-font-bold">Digital. Brand.</h1>
      <h1 class="type-writer tw-text-center tw-text-8xl tw-font-montserrat tw-font-bold"></h1>
    </div>
    <p class="tw-text-center tw-uppercase fade-element">We help brands and companies stand out in the digital age.</p>
  `,
  styles: [`

    .fade-element {
      opacity: 0;
    }

    .slide-in {
      animation: slide-in 1s ease-out;
    }

    @keyframes slide-in {
      0% {
        transform: translateX(-5%); /* Start off-screen to the left */
        opacity: 0; /* Start fully transparent */
      }
      75% {
        opacity: 10; /* Fade in */
      }
      100% {
        transform: translateX(0); /* End at normal position */
        opacity: 1; /* End fully visible */
      }
    }
  `],
})

export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    this._setFadeSlide();
    this._setTypewriter();
  }

  private _setFadeSlide() {
    const fadeElements = document.querySelectorAll('.fade-element');
    const fadeElementArray = Array.from(fadeElements);
    console.log(fadeElementArray);

      fadeElementArray.forEach((element, index) => {
        setTimeout(() => {
          element?.classList.add('slide-in');
          element?.classList.remove('fade-element');
        }, 750 * index); // Each element waits an additional second based on its index
      });
      

  }

  private _setTypewriter() {
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
