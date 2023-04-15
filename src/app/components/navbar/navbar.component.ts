import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/mainService.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() scrollToSection = new EventEmitter();
  isLogged: boolean;
  constructor(private mainService: MainService, private router: Router) {}

  ngOnInit() {
    this.isLogged = this.mainService.getCurrentUserId() != 0;
  }

  changeFontSize(size: string) {
    document.querySelector('html').setAttribute('font_size', size);
  }

  contrastChange() {
    if(document.querySelector('body').hasAttribute('contrast')) {
      document.querySelector('body').removeAttribute('contrast');
      localStorage.removeItem('contrast');
    } else {
      document.querySelector('body').setAttribute('contrast', 'enabled');
      localStorage.setItem('contrast', 'enabled');
    }
  }

  goTo(anchor: string) {
    this.scrollToSection.emit(anchor);
    this.router.navigateByUrl(anchor);
  }
}
