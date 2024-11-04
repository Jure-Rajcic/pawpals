import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [],
  template: `
  <!-- <div class="relative h-screen overflow-hidden bg-white">
  <svg class="border-2 border-blue-400" xmlns="http://www.w3.org/2000/svg" width="100%" h="400px" viewBox="0 0 1000 1000" preserveAspectRatio="none">
    <defs>
      <linearGradient id="myGradient" gradientTransform="rotate(45)">
        <stop offset="5%" stop-color="#fc6767" />
        <stop offset="95%" stop-color="#ec008c" />
      </linearGradient>
    </defs>
    <path d="M 0,0
               L 0,300
               Q 750,600 1500,300
               L 1500, 0
               Z" fill="url(#myGradient)" />
  </svg>
  <div class="absolute inset-0 flex items-center justify-center text-black z-10">
    <div class="text-center">
      <h1 class="text-6xl font-bold">Hello World</h1>
      <p class="text-2xl">
        This is a simple Angular application with Tailwind CSS.
      </p>
    </div>
    <button type="button" class="btn btn-light">Light</button>

  </div>
</div> -->
<h1 class="text-6xl font-bold">Hello World</h1>
`,
  styles: [`
  @keyframes bend {
    0% {
      d: path('M0,50 C25,0 75,100 100,50 L100,100 L0,100 Z');
    }
    50% {
      d: path('M0,50 C25,50 75,50 100,50 L100,100 L0,100 Z');
    }
    100% {
      d: path('M0,50 C25,0 75,100 100,50 L100,100 L0,100 Z');
    }
  }
  
  .animated-curve {
    animation: bend 3s ease-in-out infinite;
  }
  `]
})
export class HelloWorldComponent {

}
