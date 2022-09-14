import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() diameter?= 130;
  @Input() color?: string;
  @Input() strokeWidth: string = '10';
  isLoading: Observable<boolean> = this.loaderService.isLoading$;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
  }

}
