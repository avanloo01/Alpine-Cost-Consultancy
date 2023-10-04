import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  items = [
    {
      title: 'Customer',
      features: ['Free Consultation', '80 EUR per Year', '20 EUR Refund on Referral'],
    },
    {
      title: 'Seller',
      features: ['Service Providers', 'Free Consultation', 'Access to customer network'],
    },
  ];
}
