import { Component, Input } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'popup-one',
  templateUrl: 'popup-one.component.html',
  styleUrls: ['popup-one.component.css'],
})
export class PopupOne {
  @Input() firstTime: boolean = false;
  currentSlide = 0;
  constructor(private router: Router) {}

  closePopup() {
    this.firstTime ? this.router.navigateByUrl("/form") : this.router.navigateByUrl("/profile");
  }

  nextPopup() {
    if(this.currentSlide < 2) {
      this.currentSlide++;
    } else {
      this.firstTime ? this.router.navigateByUrl("/form") : this.router.navigateByUrl("/profile");
    }
  }
}
