import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <nav class="navbar navbar-expand-lg ">

<div class="container-fluid tw-relative">
  <a class="navbar-brand" href="#">
    <img src="https://d28cp5pdlws7or.cloudfront.net/images/Pawrade-Logo.svg" alt="Bootstrap" class="tw-h-8 ">
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse lg:tw-absolute  tw-inset-x-1/4" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 container-fluid tw-justify-center tw-gap-2">
      <li class="nav-item dropdown ">
        <button type="button" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"
          data-bs-auto-close="outside">
          Available Puppies
        </button>

        <form class="dropdown-menu">
          <button type="button" class="dropdown-item tw-w-full">
            View all pupies
          </button>

          <div class="dropend">
            <button type="button" class="dropdown-item dropdown-toggle " data-bs-toggle="dropdown"
              aria-expanded="false" data-bs-auto-close="outside">
              Top breads
            </button>
            <ul class="dropdown-menu">
              <button type="button" class="dropdown-item">
                Beagle Puppies
              </button><button type="button" class="dropdown-item">
                Cavapoo Puppies
              </button><button type="button" class="dropdown-item">
                French Bulldog Puppies
              </button><button type="button" class="dropdown-item">
                Golden Retriever Puppies
              </button>
            </ul>
          </div>

          <button type="button" class="dropdown-item">
            Apartment Dogs for Sale
          </button>

          <button type="button" class="dropdown-item">
            Emotional Support Dogs
          </button>

          <button type="button" class="dropdown-item">
            Family Dogs for Sale
          </button>

          <button type="button" class="dropdown-item">
            Hypoallergenic Puppies
          </button>

          <button type="button" class="dropdown-item">
            Small Dogs for Sale </button>
        </form>
      </li>

      <li class="nav-item dropdown">
        <button type="button" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"
          data-bs-auto-close="outside">
          Our Process
        </button>

        <form class="dropdown-menu">
          <button type="button" class="dropdown-item tw-w-full">
            Pavrade Process
          </button>

          <button type="button" class="dropdown-item">
            Health Guarantee
          </button>

          <button type="button" class="dropdown-item">
            Puppy First Approach
          </button>

          <button type="button" class="dropdown-item">
            No Puppy Mill Promise
          </button>

          <button type="button" class="dropdown-item">
            Fighting Puppy Scams
          </button>

          <button type="button" class="dropdown-item">
            Puppy Travel
          </button>

          <button type="button" class="dropdown-item">
            Our Team
          </button>
        </form>
      </li>

      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Reviews</a>
      </li>
    </ul>


  </div>
</div>


</nav>
  `,
})
export class HeaderComponent {

}
