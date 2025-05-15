import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface UserData {
  firstName: string;
  secondName: string;
  displayName: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  standalone: true,  // Add this if you want the component to be standalone
  imports: [CommonModule, FormsModule]  // Include FormsModule here
})
export class UserFormComponent {
  userData: UserData = {
    firstName: '',
    secondName: '',
    displayName: ''
  };

  confirmationMessage: string = '';

  get userJson() {
    return JSON.stringify(this.userData, null, 2);
  }

  updateField(fieldName: keyof UserData, value: string) {
    this.userData[fieldName] = value;
  }

  addUser() {
    this.confirmationMessage = `Student with ID-${this.userData.firstName}${this.userData.secondName}${this.userData.displayName ? ' (' + this.userData.displayName + ')' : ''} has been created`;
  }
}
