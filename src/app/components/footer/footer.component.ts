import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

    subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router) {

  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}
