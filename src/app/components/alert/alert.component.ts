import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input()
  message : String = '';
  @Input()
  title : String = 'Error';
  @Input()
  type : String = 'is-danger';
  constructor() { }

  ngOnInit(): void {
  }

}
