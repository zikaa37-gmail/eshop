import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/shared/components/loader/loader.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { ProductsFakerService } from '../products-faker.service';
import { CreditCard, Customer, Manufacturer, Product, SearchParams } from '../products.models';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  form!: FormGroup;
  hasValue = false;
  isLoading$: Observable<boolean> = this.loaderService.isLoading$;
  // customers: Customer[] = [];
  // manufacturers: Manufacturer[] = [];
  // creditCards: CreditCard[] = [];
  // products: Product[] = [];
  products$: Observable<Product[]> = this.productsService.getProducts('');
  categories$ = this.productsService.getCategories();
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
    private notificationsService: NotificationsService,
    private fakerService: ProductsFakerService,
    private loaderService: LoaderService,
    private productsService: ProductsService,
    private router: Router
  ) { this.buildForm() }

  ngOnInit(): void {
    // this.customers = this.fakerService.createFakeCustomer(10);
    // this.manufacturers = this.fakerService.createFakeManufacturers(10);
    // this.creditCards = this.fakerService.createFakeCreditCards(10);
    // this.products = this.fakerService.createFakeProducts(10);

    // console.log('customers', this.customers);
    // console.log('manufacturers', this.manufacturers);
    // console.log('creditCards', this.creditCards);
    // console.log('products', this.products);

  }

  searchProducts() {
    if (this.searchValue.length < 3) {
      this.notificationsService.showWarning('Value too short');
      return;
    }
    this.hasValue = !!(this.searchValue.length);
    // this.notificationsService.showSuccess('Searching');
    this.loaderService.isLoading$.next(true);
    this.products$ = this.productsService.getProducts(this.createParamsString());

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

  navigateTo(name: string) {
    this.router.navigate(['products/category', name])
  }

  clearForm() {
    this.form.reset();
    this.hasValue = false;
    this.products$ = this.productsService.getProducts('');
  }

  buildForm() {
    this.form = this.fb.group({
      search: [null]
    })
  }


}


