import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  form!: FormGroup;
  hasValue = false;

  get searchValue() {
    return this.form.value.search;
  }

  constructor(
    private fb: FormBuilder,
    private notificationsService: NotificationsService
  ) { this.buildForm() }

  ngOnInit(): void { }

  searchProducts() {
    if (this.searchValue.length < 3) {
      this.notificationsService.showWarning('Value too short');
      return;
    }
    this.hasValue = !!(this.searchValue.length);
    this.notificationsService.showSuccess('Searching');
  }

  clearForm() {
    this.form.reset();
    this.hasValue = false;
  }

  buildForm() {
    this.form = this.fb.group({
      search: [null]
    })
  }
}
