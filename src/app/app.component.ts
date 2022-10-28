import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchParams } from './products/products.models';
import { ProductsService } from './products/products.service';
import { LoaderService } from './shared/components/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading$: Observable<boolean> = this.loaderService.isLoading$;

  constructor(
    public router: Router,
    private loaderService: LoaderService
  ) { }
}
