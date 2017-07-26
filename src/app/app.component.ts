import { Component } from '@angular/core';
import { DummyService } from "./dummy.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  titleAsync;

  constructor(dummyService: DummyService) {
    this.title = dummyService.getName();
    this.titleAsync = dummyService.getNameAsync();
  }

  changeTitle = () => {
    this.title = 'Hey';
  }
}
