import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Address, CreditCard, Customer, Manufacturer, Product } from './products.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsFakerService {

  constructor() { }

  createFakeProducts(num: number): Product[] {
    if (!num) {
      return [];
    }
    let products: Product[] = [];
    for (let index = 0; index < num; index++) {
      products.push({
        id: +faker.random.numeric(8),
        categoryId: +faker.random.numeric(2),
        categoryName: faker.random.alpha(20),
        subcategoryId: +faker.random.numeric(2),
        subcategoryName: faker.random.alpha(20),
        groupId: +faker.random.numeric(2),
        groupName: faker.random.alpha(20),
        manufacturer: this.createFakeManufacturers(1)[0],
        name: faker.company.name(),
        shortDescription: faker.random.alpha(20),
        description: faker.random.alpha(150),
        images: [faker.image.avatar(), faker.image.avatar()],
        barcode: faker.random.numeric(13),
        size: faker.random.numeric(2),
        color: faker.color.human(),//(faker.datatype.number({ 'min': 0, 'max': 255 }), faker.datatype.number({ 'min': 0, 'max': 255 }), faker.datatype.number({ 'min': 0, 'max': 255 })),
        price: +faker.random.numeric(2),
        published: faker.date.past(),
        keywords: [faker.random.alpha(5), faker.random.alpha(6), faker.random.alpha(7)],
        active: true
      })
    };
    return products;
  }

  createFakeManufacturers(num: number): Manufacturer[] {
    if (!num) {
      return [];
    }
    let manufacturers: Manufacturer[] = [];
    for (let index = 0; index < num; index++) {
      manufacturers.push({
        id: faker.random.alphaNumeric(),
        name: faker.company.name(),
        address: this.createFakeAddresses(1),
        logoUrl: faker.image.avatar(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        country: faker.address.country(),
        accountNumber: faker.finance.account(),
        active: true
      }
      )
    };
    return manufacturers;
  }

  createFakeCustomer(num: number): Customer[] {
    let customers: Customer[] = [];
    for (let index = 0; index < num; index++) {
      customers.push(
        {
          id: faker.datatype.uuid(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          phone: faker.phone.number(),
          imageUrl: faker.image.avatar(),
          addresses: this.createFakeAddresses(2),
          creditCards: this.createFakeCreditCards(1),
          password: faker.internet.password(),
          birthDate: faker.date.birthdate(),
          registeredAt: faker.date.past(),
          active: true
        });
    }
    return customers;
  }

  createFakeAddresses(num: number): Address[] {
    if (!num) {
      return [];
    }

    let addresses: Address[] = [];
    for (let index = 0; index < num; index++) {
      addresses.push({
        id: faker.random.numeric(),
        country: faker.address.country(),
        state: faker.address.state(),
        street: faker.address.street(),
        city: faker.address.cityName(),
        streetNumber: faker.address.buildingNumber(),
        zipCode: faker.address.zipCode(),
        active: true
      })
    };
    return addresses;
  }

  createFakeCreditCards(num: number): CreditCard[] {
    if (!num) {
      return [];
    }

    let creditCards: CreditCard[] = [];
    for (let index = 0; index < num; index++) {
      creditCards.push({
        cardNumber: faker.finance.creditCardNumber(),
        cardIssuer: faker.finance.creditCardIssuer(),
        ccv: faker.finance.creditCardCVV(),
        expirationMonth: faker.datatype.number({
          'min': 1,
          'max': 12
        }).toString(),
        expirationYear: faker.datatype.number({
          'min': 1,
          'max': 99
        }).toString(),
        type: faker.finance.creditCardIssuer(),
        customerId: faker.datatype.uuid(),
        active: true
      })
    };
    return creditCards;
  }
}
