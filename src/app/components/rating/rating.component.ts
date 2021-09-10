import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[discover-rating]',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() value = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
