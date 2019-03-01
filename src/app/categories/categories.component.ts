import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
categories =  {1:"Angular5", 2:"ReactJs", 3:"Vue.js"};
selectedTopic;
  constructor() {
}

  ngOnInit() {
  }

}
