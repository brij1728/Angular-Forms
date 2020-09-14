import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css'],
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: true,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null,
  };

  userSettings: UserSettings = { ...this.originalUserSettings };

  constructor() {}

  ngOnInit(): void {}

  onBlur(field: NgModel) {
    console.log(`in blur: ${field.valid}`);
    
  }

  onSubmit(form: NgForm){
    console.log(`in submit: ${form.valid}`);
    
  }
}
