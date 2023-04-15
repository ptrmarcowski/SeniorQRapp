import { PrefixNot } from '@angular/compiler';
import { Component, OnInit, Renderer2 } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { BloodType, UserData } from '../../models/models'
import { MainService } from '../../services/mainService.service'

@Component({
    selector: 'app-form2',
    templateUrl: 'form2.component.html',
    styleUrls: ['form2.component.css'],
})
export class Form implements OnInit {
    userForm: FormGroup;
    userData: UserData = new UserData();
    
    constructor(
        private mainService: MainService,
        private router: Router,        
        private formBuilder: FormBuilder,
        private renderer: Renderer2
    )  {
        this.userForm = formBuilder.group({          
            basic: formBuilder.group({
                firstName: '',
                firstNameVisibility: false,
                lastName: '',
                lastNameVisibility: false,
                yearOfBirth: '',
                yearOfBirthVisibility: false,
                pesel: '',
                peselVisibility: false,
                phone: '',
                phoneVisibility: false,
                phonePrefix: '',
                phone2: '',
                phone2Visibility: false,
                phone2Prefix: '',
            })
        });
    }

    ngOnInit(): void {
        this.mainService.getUserDataById(this.mainService.getCurrentUserId()).subscribe(r => {
            this.userData = r;
            this.userForm = this.formBuilder.group({          
                basic: this.formBuilder.group({
                    firstName: this.userData.firstName || '',                    
                    firstNameVisibility: this.userData.firstNameVisibility || false,
                    lastName: this.userData.lastName || '',
                    lastNameVisibility: this.userData.lastNameVisibility || false,
                    yearOfBirth: this.userData.yearOfBirth || '',
                    yearOfBirthVisibility: this.userData.yearOfBirthVisibility || false,
                    pesel: this.userData.pesel || '',
                    peselVisibility: this.userData.peselVisibility || false,
                    phone: this.userData.phone || '',
                    phoneVisibility: this.userData.phoneVisibility || false,
                    phonePrefix: this.userData.phonePrefix || '',
                    phone2: this.userData.phone2 || '',
                    phone2Visibility: this.userData.phone2Visibility || false,
                    phone2Prefix: this.userData.phone2Prefix || '',                    
                })
            });
    
        }, err => {
            //blad
        })
    }
    
    get formValues(){
        return this.userForm.controls;
    }

    trackBy(index) { return index; }

    public fillLater() {
        this.router.navigateByUrl("profile");
    }

    public saveForm(where: string) {
        this.userData.firstName = this.userForm.get(['basic', 'firstName'])?.value || '';
        this.userData.firstNameVisibility = this.userForm.get(['basic', 'firstNameVisibility'])?.value || false;
        this.userData.lastName = this.userForm.get(['basic', 'lastName'])?.value || '';
        this.userData.lastNameVisibility = this.userForm.get(['basic', 'lastNameVisibility'])?.value || false;
        this.userData.yearOfBirth = this.userForm.get(['basic', 'yearOfBirth'])?.value ?? "";
        this.userData.yearOfBirthVisibility = this.userForm.get(['basic', 'yearOfBirthVisibility'])?.value || false;
        this.userData.pesel = this.userForm.get(['basic', 'pesel'])?.value || '';
        this.userData.peselVisibility = this.userForm.get(['basic', 'peselVisibility'])?.value || false;
        this.userData.phone = this.userForm.get(['basic', 'phone'])?.value || '';
        this.userData.phoneVisibility = this.userForm.get(['basic', 'phoneVisibility'])?.value || false;
        this.userData.phonePrefix = this.userForm.get(['basic', 'phonePrefix'])?.value || '';
        this.userData.phone2 = this.userForm.get(['basic', 'phone2'])?.value || '';
        this.userData.phone2Visibility = this.userForm.get(['basic', 'phone2Visibility'])?.value || false;
        this.userData.phone2Prefix = this.userForm.get(['basic', 'phone2Prefix'])?.value || '';     

        this.mainService.editUser(this.userData).subscribe(r => {
            if (r) {
                if (where == "next") {
                    this.router.navigateByUrl("form3");
                } else if (where == "back") {
                    this.router.navigateByUrl("form");
                } else {
                    this.router.navigateByUrl("profile");
                }
                
            } else {
                alert("Formularz nie został zapisany");
            }
        }, err => {
            alert("Wystąpił błąd")
        })
    }

    toggleSection(sectionId: number) {
        const hasClass = document.getElementById('section' + sectionId).classList.contains('collapsed');
        
        if (hasClass) {
            this.renderer.removeClass(document.getElementById('section' + sectionId), 'collapsed');
            this.renderer.removeClass(document.getElementById('collapse' + sectionId), 'collapsed');
        } else {
            this.renderer.addClass(document.getElementById('section' + sectionId), 'collapsed');
            this.renderer.addClass(document.getElementById('collapse' + sectionId), 'collapsed');
        }
    }
}
