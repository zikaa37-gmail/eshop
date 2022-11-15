import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Product, SearchParams } from 'src/app/products/products.models';
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
  q = this.productsService.search$;
  products$: Observable<Product[]> = this.q.pipe(
    map(q => q),
    switchMap(q => {
      const searchValue = q ? `q=${q}` : null;
      this.form.patchValue({ search: q });
      return this.productsService.getProducts(searchValue);
    })
  )
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

  searchValue!: string | null;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private loaderService: LoaderService,
    private productsService: ProductsService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  searchProducts() {
    if (!this.searchValue || this.searchValue.length < 3) {
      return;
    }

    this.productsService.searchSubject.next(this.searchValue);
    this.router.navigate(['products/search']);
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
    this.searchValue = null;
    this.productsService.searchSubject.next(null);
  }

  buildForm() {
    this.form = this.fb.group({
      search: [this.searchValue]
    })
  }

}
