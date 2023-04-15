import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'delivery-data',
  templateUrl: 'delivery-data.component.html',
  styleUrls: ['delivery-data.component.css'],
})
export class DeliveryData {
  constructor(private router: Router) {}

  closePopup() {
    this.router.navigateByUrl("/profile")
  }
}
