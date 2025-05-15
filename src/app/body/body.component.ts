import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from "../user-form/user-form.component";


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  imports: [
    CommonModule, // Add CommonModule for *ngIf
    FormsModule, // Add FormsModule for ngModel
    ButtonComponent,
    UserFormComponent
]
})
export class BodyComponent {
  value = 0;
  studentName: string = '';
  isSubmitted: boolean = false;

    submitStudent() {
    if (this.studentName.trim()) {
      this.isSubmitted = true;
    }
  }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
}
