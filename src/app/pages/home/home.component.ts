import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/mainService.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  isLogged: boolean;
  
  constructor(private mainService: MainService, private router: Router) {}

  ngOnInit() {
    this.isLogged = this.mainService.getCurrentUserId() != 0;
    this.scrollTo(this.router.url);
  }

  scrollTo(anchor: string) {
    switch(anchor){
      case('/#news'): {
        document.getElementById('news').scrollIntoView();
        break;
      }
      case('/#aboutProject'): {
        document.getElementById('aboutProject').scrollIntoView();
        break;
      }
      case('/#contact'): {
        document.getElementById('contact').scrollIntoView();
        break;
      }
      case ('/#metki'): {
          document.getElementById('metki').scrollIntoView();
          break;
      }
      case ('/#jaktodziala'): {
          document.getElementById('jaktodziala').scrollIntoView();
          break;
      }
    }
  }
}
