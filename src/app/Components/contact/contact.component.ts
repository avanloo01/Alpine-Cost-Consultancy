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
      features: ['New Customers', 'Free Consultation', '50 EUR Refund on Referral', '200 EUR'],
    },
    {
      title: 'Returning',
      features: ['Returning Customers', 'Free Consultation', '50 EUR Refund on Referral', '100 EUR'],
    },
  ];
}
