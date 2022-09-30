import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/shared/components/loader/loader.service';
import { Product, SearchParams } from '../products.models';
import { ProductsService } from '../products.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  form!: FormGroup;
  hasValue = false;
  isLoading$: Observable<boolean> = this.loaderService.isLoading$;
  name = this.route.snapshot.params['name'];
  products$: Observable<Product[]> = this.productsService.getProducts(`categoryName=${this.name}`);
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

  get searchValue() {
    this.searchParams.q = this.form.value.search;
    return this.form.value.search;
  }

  constructor(
    private fb: FormBuilder,
    private loaderService: LoaderService,
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.loaderService.isLoading$.next(true);
    // this.products$ = this.productsService.getProducts(`categoryName=${this.name}`);
  }

  searchProducts() {
    if (this.searchValue.length < 3) {
      return;
    }
    this.hasValue = !!(this.searchValue.length);
    this.loaderService.isLoading$.next(true);
    this.products$ = this.productsService.getProducts(`categoryName=${this.name}&q=${this.searchValue}`);

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

  navigateTo(barcode: string) {
    this.router.navigate(['products/preview', barcode])
  }

  clearForm() {
    this.form.reset();
    this.hasValue = false;
    this.products$ = this.productsService.getProducts(`categoryName=${this.name}`);
  }

  buildForm() {
    this.form = this.fb.group({
      search: [null]
    })
  }

  back(): void {
    this.location.back()
  }

}
