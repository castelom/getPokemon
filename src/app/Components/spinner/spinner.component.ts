import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor() { }
  @Input () show: boolean = false;
  @Input () msg: string = "";

  ngOnInit(): void {
  }

}
