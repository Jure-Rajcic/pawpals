import { Component, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, group } from '@angular/animations';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
  <div class="tw-relative"> 

    <svg class=" tw-w-[20rem] tw-h-[20rem] tw-absolute tw-translate-y-[-12.5rem] tw-translate-x-[-5rem] tw-rotate-[-30deg] tw-z-[-10]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#3458FB; stop-opacity:1" />
          <stop offset="100%" style="stop-color:#14FFFB; stop-opacity:1" />
        </linearGradient>
      </defs>
      <circle cx="10rem" cy="10rem" r="10rem" fill="url(#grad1)" />
    </svg>

    <svg class="tw-hidden lg:tw-block tw-w-[30rem] tw-h-[30rem] tw-absolute tw-translate-y-[-12.5rem] tw-translate-x-[-5rem] tw-rotate-[-30deg] tw-z-[-10]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#3458FB; stop-opacity:1" />
          <stop offset="100%" style="stop-color:#14FFFB; stop-opacity:1" />
        </linearGradient>
      </defs>
      <circle cx="15rem" cy="15rem" r="15rem" fill="url(#grad1)" />
    </svg>

    <svg class="tw-hidden lg:tw-block tw-w-[13.5rem] tw-h-[13.5rem] tw-absolute tw-right-[10rem] tw-rotate-[-55deg] tw-top-24 tw-z-[-10]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#C63A89; stop-opacity:1" />
          <stop offset="40%" style="stop-color:#FF008F; stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="13.5rem" height="13.5rem" fill="none" stroke="url(#pinkGradient)" stroke-width="3.5rem" />
    </svg>

    <svg class="tw-hidden lg:tw-block tw-w-[6.5rem] tw-h-[6.5rem] tw-absolute tw-right-[8rem] tw-rotate-[10deg] tw-top-[13rem] tw-z-[-10]" xmlns="http://www.w3.org/2000/svg">
      <defs>
      </defs>
      <rect x="0" y="0" width="6.5rem" height="6.5rem" fill="none" stroke="#000000" stroke-width="2rem" />
    </svg>

    <svg class="tw-hidden lg:tw-block tw-w-[3.5rem] tw-h-[3.5rem] tw-absolute tw-right-[8rem] tw-rotate-[20deg] tw-top-[20.5rem] tw-z-[-10]" xmlns="http://www.w3.org/2000/svg">
      <defs>
      </defs>
      <rect x="0" y="0" width="3.5rem" height="3.5rem" fill="none" stroke="#000000" stroke-width="0.6rem" />
    </svg>

    <svg class="tw-hidden lg:tw-block tw-w-[1.5rem] tw-h-[1.5rem] tw-absolute tw-right-[11rem] tw-rotate-[-20deg] tw-top-[24rem] tw-z-[-10]" xmlns="http://www.w3.org/2000/svg">
      <defs>
      </defs>
      <rect x="0" y="0" width="1.5rem" height="1.5rem" fill="none" stroke="#000000" stroke-width="0.4rem" />
    </svg>

    <svg class="tw-hidden lg:tw-block tw-w-[1rem] tw-h-[1rem] tw-absolute tw-right-[9.5rem] tw-rotate-[-20deg] tw-top-[25.5rem] tw-z-[-10]" xmlns="http://www.w3.org/2000/svg">
      <defs>
      </defs>
      <rect x="0" y="0" width="1rem" height="1em" fill="none" stroke="#000000" stroke-width="0.3rem" />
    </svg>

    <svg class="tw-hidden lg:tw-block tw-w-[1rem] tw-h-[1rem] tw-absolute tw-right-[11rem] tw-rotate-[47deg] tw-top-[26.5rem] tw-z-[-10]" xmlns="http://www.w3.org/2000/svg">
      <defs>
      </defs>
      <rect x="0" y="0" width="1rem" height="1em" fill="none" stroke="#000000" stroke-width="0.2rem" />
    </svg>

    </div>
  
    <p class="tw-hidden lg:tw-block tw-text-center tw-uppercase fade-element">--- Creative Puppy Agency</p>
    <div class="tw-my-8 fade-element">
      <h1 class="tw-text-center tw-text-4xl lg:tw-text-8xl tw-font-montserrat tw-font-bold">Find New</h1>
      <h1 class="type-writer tw-text-center tw-text-4xl lg:tw-text-8xl tw-font-montserrat tw-font-bold"></h1>
    </div>
    <p class="tw-text-center tw-font-medium fade-element tw-px-8">We are here to help you find the perfect puppy for you and your family.</p>

    <div class="tw-flex tw-justify-center tw-my-8 fade-element">
      <button class="tw-border-[1px] tw-border-black tw-py-4 tw-px-8 tw-rounded-full hover:tw-text-white hover:tw-bg-black">View All Puppys Available</button>
    </div>
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
        transform: translateX(-1%); /* Start off-screen to the left */
        opacity: 0; /* Start fully transparent */
      }

      100% {
        transform: translateX(0); /* End at normal position */
        opacity: 20; /* End fully visible */
      }
    }
  `],
})

export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    this._setTypewriter();
    this._setFadeSlide();
  }

  private _setFadeSlide() {
    const fadeElements = document.querySelectorAll('.fade-element');
    const fadeElementArray = Array.from(fadeElements);
    console.log(fadeElementArray);

    fadeElementArray.forEach((element, index) => {
      setTimeout(() => {
        element?.classList.add('slide-in');
        element?.classList.remove('fade-element');
      }, 750 * index); // Each element waits an additional second based on its index 750 * index
    });


  }

  private _setTypewriter() {
    const target = document.querySelector('.type-writer');

    if (!target) {
      console.warn('Typewriter target element not found');
      return;
    }

    const writer = new Typewriter(target, { loop: true, deleteSpeed: 60 });
    writer.rest(750)
    const strings = ['Best Friend.', 'Family Member.', 'Companion.', 'Healthy Puppy.', 'Loyal Dog.'];
    for (const string of strings) {
      writer.type(string).rest(1500).remove(string.length).rest(1500);
    }
    writer.start();
  }
}
