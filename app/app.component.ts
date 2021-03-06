import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    template: `
              <ul class="nav nav-inline">
                  <li class="nav-item"><a class="nav-link" [routerLink]="['/reactive']">Reactive Forms</a></li>
                  <li class="nav-item"><a class="nav-link" [routerLink]="['/normal']">Normal Form</a></li>
                  <li class="nav-item"><a class="nav-link" [routerLink]="['/form']">Forms Module</a></li>
              </ul>

              <h1>Angular 2 Forms Types </h1>
              <router-outlet></router-outlet>` 
})

export class AppComponent {}
