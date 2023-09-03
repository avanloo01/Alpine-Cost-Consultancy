import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  items = [
    {
      title: 'New',
      features: ['New Customers', 'Free Consultation', 'Fee of 100 EUR/h'],
    },
    {
      title: 'Returning',
      features: ['Returning Customers', 'Free Consultation', 'Fee of 50 EUR/h'],
    },
  ];
}
