
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teleport-project-template-angular';
  contrast: string;
  
  ngOnInit() {
    this.contrast = localStorage.getItem('contrast');

    if (this.contrast) {
      document.querySelector('body').setAttribute('contrast', this.contrast);
    }
  }
}