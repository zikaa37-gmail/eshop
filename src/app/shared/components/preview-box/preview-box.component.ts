import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-box',
  templateUrl: './preview-box.component.html',
  styleUrls: ['./preview-box.component.scss']
})
export class PreviewBoxComponent implements OnInit {
  @Input() name!: string;
  @Input() hasFooter = false;
  @Input() image!: string;
  @Input() price?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
