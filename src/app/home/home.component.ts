import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  modulename = 'customer';
  changemodule(event: any) {
    this.modulename = event.target.value;
  }

  customerlist = signal([{ id: 1, name: 'ramesh', country: 'India' },
  { id: 2, name: 'rajesh', country: 'Malasiya' },
  { id: 3, name: 'ravi', country: 'Singapore' },
  { id: 4, name: 'raj', country: 'USA' },
  { id: 5, name: 'raj', country: 'USA' }])

  supplierlist=signal([{ id: 1, name: 'ramesh', country: 'India' }])

  Userlist = signal([{ id: 1, name: 'ramesh', country: 'India' },
  { id: 2, name: 'rajesh', country: 'India' },
  { id: 3, name: 'ravi', country: 'Singapore' },
  { id: 4, name: 'raj', country: 'Singapore' },
  { id: 5, name: 'raj', country: 'USA' }])
}
