import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  element: HTMLElement;

  constructor() {
    this.element = <HTMLElement>document.getElementById('logo');
  }

  ngOnInit(): void {}
}
