import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  items = [
    {
      title: 'Small',
      features: ['SMEs up to 50 FTEs', 'Free Consultation', 'Fee of 90 EUR/h'],
    },
    {
      title: 'Medium',
      features: ['SMEs up to 50 FTEs', 'Free Consultation', 'Fee of 125 EUR/h'],
    },
  ];
}
