import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchParams } from 'src/app/products/products.models';
import { ProductsService } from 'src/app/products/products.service';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  form!: FormGroup;
  isLoading$: Observable<boolean> = this.loaderService.isLoading$;
  name = this.route.snapshot.params['name'];
  searchParams: SearchParams = {
    q: '',
    _start: 1,//&
    _end: 10,
    _limit: 10,
    _sort: ['name'],//['user', 'views'],//&
    _order: ['desc'],//['desc', 'asc'],
    _lte: 10,
    _gte: 10,
    _like: '',
    _ne: '', //   /posts?id_ne=1
    _embed: ''
  }
  searchValue = '';

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private loaderService: LoaderService,
    private productsService: ProductsService,
    private fb: FormBuilder
  ) {
    this.productsService.queryString$.subscribe(q => {
      if (q) {
        this.searchValue = q ? q : '';
        this.form.patchValue({ search: q })
      }
    })
  }

  ngOnInit(): void {
    this.buildForm();
    this.form.reset();
  }

  searchProducts() {
    if (this.searchValue.length < 3) {
      return;
    }

    this.productsService.queryString$.next(this.searchValue);
    this.router.navigate(['products/search', this.searchValue]);
  }

  setSearchValue(event: any) {
    this.searchValue = event.target.value;
  }

  createParamsString(): string {
    let params = '';
    if (this.searchParams.q) {
      params += 'q=' + this.searchParams.q;
    }

    if ((this.searchParams._start && this.searchParams._end) && !(this.searchParams.q)) {
      params += '&_start=' + this.searchParams._start + '&_end=' + this.searchParams._end;
    }

    if ((this.searchParams._sort && this.searchParams._order) && !(this.searchParams.q)) {
      params += '&_sort=' + this.searchParams._sort + '&_order=' + this.searchParams._order;
    }

    return params;
  }

  clearForm() {
    this.form.reset();
    this.productsService.queryString$.next('');
  }

  buildForm() {
    this.form = this.fb.group({
      search: [this.productsService.queryString$]
    })
  }

}
