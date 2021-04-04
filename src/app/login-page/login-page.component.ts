import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocaleProviderService, PickerRef, PickerService, RadioStatus } from 'ng-zorro-antd-mobile';
import { en_US } from 'ng-zorro-antd-mobile';
import * as uuid from 'uuid';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  specialistModalVisible = false;

  confirmLabel = { en_US }

  enUS = en_US;

  formValue: {
    age?: number,
    gender?: string,
    country?: string,
    levelOfDE?: string,
    specialistType?: string,
    nonSpecialistType?: string,
    yearsOfExperience?: string,
    numberOfDiabetePatients?: string
  } = {
      age: 18
    };

  genderData = [
    'female',
    'Male',
    'Non-Binary'
  ];
  genderName = '';

  gender: string[] = [];
  levelOfDE: string[] = [];

  levelOfDEOptions = [
    'Student',
    'Trainee (Resident/Fellow)',
    'Specialist',
    'Non-Specialist'
  ];

  levelOfDEName = '';

  countryOptions = [
    {
      name: 'Urban',
      value: 'urban'
    },
    {
      name: 'Rural',
      value: 'rural'
    }
  ];

  country = { value: 'urban', name: 'Urban' };

  specialistTypeValue = '';
  nonSpecialistTypeValue = '';

  specialistTypeOptions = [
    'Diabetes specialist',
    'Doctor other specialist',
    'Diabetes  nutritionist (dietician)',
    'Diabetes nurse',
    'Diabetes nurse practitioner',
    'Diabetes social worker',
    'Diabetes physician assistant',
    'Diabetes  psychologist',
    'Other'
  ];

  nonSpecialistTypeOptions = [
    'Doctor generalist',
    'Doctor  diabetes specialist',
    'Nutritionist/nurse/dietician',
    'Nurse',
    'Nurse practitioner',
    'Social worker',
    'Physician assistant',
    'Psychologist',
    'Other'
  ];

  constructor(
    private formBuilder: FormBuilder,
    private _picker: PickerService,
    private _localeProviderService: LocaleProviderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const currentLocale = en_US;
    this._localeProviderService.setLocale(currentLocale);

  }

  buildForm() {
    return this.formBuilder.group({
      age: [null],
      gender: [null],
      country: [null],
      levelOfDE: [null],
      specialistType: [null],
      nonSpecialistType: [null],
      yearsOfExperince: [null],
      numberOfDiabetePatience: [null]
    });
  }

  onFormSave() {
    localStorage.setItem('isAuthenticated', 'true');
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.router.navigateByUrl('home')
    } else {
      localStorage.setItem('userId', uuid.v4());
    }
  }

  genderSelect() {
    this.formValue.gender = this.gender[0] || '';
  }

  showPicker() {
    const ref: PickerRef = this._picker.showPicker(
      { value: this.gender, data: this.genderData, okText: 'Select', dismissText: 'Cancel' },
      result => {
        this.genderName = this.getResult(result);
        this.gender = this.getValue(result);
        this.formValue.gender = this.genderName;
      },
      cancel => {
        console.log('cancel');
      }
    );
    console.log(this.formValue)
  }

  getResult(result: any) {
    this.gender = [];
    let temp = '';
    result.forEach((item: any) => {
      this.gender.push(item.label || item);
      temp += item.label || item;
    });
    return this.gender.map(v => v).join(',');
  }

  getValue(result: any) {
    let value: any = [];
    let temp = '';
    result.forEach((item: any) => {
      value.push(item.value || item);
      temp += item.value || item;
    });
    return value;
  }

  onCountryChange(selectedCountry: RadioStatus) {
    this.formValue.country = selectedCountry.value;
  }

  showLODEPicker() {
    const ref: PickerRef = this._picker.showPicker(
      { value: this.levelOfDE, data: this.levelOfDEOptions, okText: 'Select', dismissText: 'Cancel' },
      result => {
        this.levelOfDEName = this.getResult(result);
        this.levelOfDE = this.getValue(result);
        this.formValue.levelOfDE = this.levelOfDEName;
        this.checkLevelOfDEValue();
      },
      cancel => {
        console.log('cancel');
      }
    );
    console.log(this.formValue)
  }

  getLevelOfDEResult(result: any) {
    this.levelOfDE = [];
    let temp = '';
    result.forEach((item: any) => {
      this.levelOfDE.push(item.label || item);
      temp += item.label || item;
    });
    return this.levelOfDE.map(v => v).join(',');
  }

  checkLevelOfDEValue() {
    if (this.formValue.levelOfDE === 'Non-Specialist' || 'Specialist') {
      this.specialistModalVisible = true;
    }
  }

  onSpecialistTypeSelect() {
    this.formValue.specialistType = this.specialistTypeValue[0] || '';
  }

  onNonSpecialistTypeSelect() {
    this.formValue.nonSpecialistType = this.nonSpecialistTypeValue[0] || '';
  }

  onClose() {
    this.specialistModalVisible = false;
    localStorage.setItem('isAuthenticated', 'true');
    this.router.navigateByUrl('home')
  }
}
