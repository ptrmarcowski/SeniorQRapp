import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'delivery-confirmed',
  templateUrl: 'delivery-confirmed.component.html',
  styleUrls: ['delivery-confirmed.component.css'],
})
export class DeliveryConfirmed {
  constructor(private router: Router) {}

  closePopup() {
    this.router.navigateByUrl("/profile")
  }
}
