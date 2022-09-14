import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {
  visible = true;

  constructor() { }

  ngOnInit(): void {
  }

  showToast() {
    this.visible = true;
  }

  hideToast() {
    this.visible = false;
  }
}
