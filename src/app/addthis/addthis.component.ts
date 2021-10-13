import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-addthis',
  templateUrl: './addthis.component.html',
  styleUrls: ['./addthis.component.css']
})
export class AddthisComponent implements OnInit, AfterViewInit {

  @Input() url :string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //console.log(window['addthis'])
    //console.log(this.addThisDiv)
//this.addThisDiv.nativeElement.layers.refresh();
if (window['addthis']) {
    window['addthis'].layers.refresh();
}
  }

}