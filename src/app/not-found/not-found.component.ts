import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <p>
      Wrong url, Page not found. Error!
    </p>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
