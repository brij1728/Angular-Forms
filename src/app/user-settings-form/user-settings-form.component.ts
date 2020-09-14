import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
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
  postError = false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onBlur(field: NgModel) {
    console.log(`in blur: ${field.valid}`);
    
  }

  onHttpError(errorResponse: any){
    console.log('error:', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
    

  }

  onSubmit(form: NgForm){
    console.log(`in submit: ${form.valid}`);
    this.dataService.postUserSettingForm(this.userSettings).subscribe(
      result => console.log('success:', result),
      error => this.onHttpError(error)
      
      
    );
    
  }
}
