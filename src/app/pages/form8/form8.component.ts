import { PrefixNot } from '@angular/compiler';
import { Component, OnInit, Renderer2 } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { BloodType, UserData } from '../../models/models'
import { MainService } from '../../services/mainService.service'

@Component({
    selector: 'app-form8',
    templateUrl: 'form8.component.html',
    styleUrls: ['form8.component.css'],
})
export class Form implements OnInit {
    userForm: FormGroup;
    userData: UserData = new UserData();
    bloodTypeEnum = BloodType;

    medsList = [];
    foodAllergiesList = [];
    medsAllergiesList = [];
    otherAllergiesList = [];
    circulationList = [];
    digestList = [];
    respiratoryList = [];
    metabolismList = [];
    kidneyList = [];
    nervousList = [];
    muscleList = [];
    liverList = [];
    boneList = [];
    eyeList = [];
    earList = [];
    mentalList = [];
    bloodList = [];
    proceduresList = [];
    immunoList = [];
    immunoTreatmentList = [];
    oldCancerList = [];
    cancerList = [];
    implantsList = [];

    medication: string = '';
    medsAll: string = '';
    foodAll: string = '';
    otherAll: string = '';
    circulation: string = '';
    digest: string = '';
    respiratory: string = '';
    metabolism: string = '';
    kidney: string = '';
    nervous: string = '';
    muscle: string = '';
    liver: string = '';
    bone: string = '';
    eye: string = '';
    ear: string = '';
    mental: string = '';
    blood: string = '';
    procedures: string = '';
    immuno: string = '';
    immunoTreatment: string = '';
    oldCancer: string = '';
    cancer: string = '';
    implants: string = '';

    drugAllergiesVisibility: boolean;
    foodAllergiesVisibility: boolean;
    otherAllergiesVisibility: boolean;
    medsVisibility: boolean;

    chronicDiseasesCirculatorySystemVisibility: boolean;
    chronicDiseasesDigestiveSystemVisibility: boolean;
    chronicDiseasesRespiratorySystemVisibility: boolean;
    metabolicDiseasesVisibility: boolean;
    kidneyDiseasesVisibility: boolean;
    nervousSystemVisibility: boolean;
    neuromuscularSystemVisibility: boolean;
    liverDiseasesVisibility: boolean;
    boneStructureDiseasesVisibility: boolean;
    eyeDiseasesVisibility: boolean;
    earDiseasesVisibility: boolean;
    mentalDisordersVisibility: boolean;
    bloodDiseasesVisibility: boolean;
    pastSurgeriesProceduresVisibility: boolean;
    autoimmuneDiseasesVisibility: boolean;
    immunosuppressiveTreatmentsVisibility: boolean;
    pastCancerVisibility: boolean;
    currentCancerVisibility: boolean;
    implantsVisibility: boolean;

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
            }),
            address: formBuilder.group({
                street: '',
                streetVisibility: false,
                houseNo: '',
                houseNoVisibility: false,
                flatNo: '',
                postCode: '',
                postCodeVisibility: false,
                city: '',
                cityVisibility: false,
                state: '',
                stateVisibility: false,
              }),
            bloodType: '',   
            bloodTypeVisibility: false,  
            hiv: false,
            hivVisibility: false,
            wzw: false,
            wzwVisibility: false,
            additionalInfo: '',
            additionalInfoVisibility: false
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
                }),
                address: this.formBuilder.group({
                    street: this.userData.street || '',
                    streetVisibility: this.userData.streetVisibility || false,
                    houseNo: this.userData.houseNo || '',
                    houseNoVisibility: this.userData.houseNoVisibility || false,
                    flatNo: this.userData.flatNo || '',
                    postCode: this.userData.postCode || '',
                    postCodeVisibility: this.userData.postCodeVisibility || false,
                    city: this.userData.city || '',
                    cityVisibility: this.userData.cityVisibility || false,
                    state: this.userData.state || '',
                    stateVisibility: this.userData.stateVisibility || false,
                  }),
                bloodType: this.userData.bloodType || '',       
                hiv: this.userData.hiv || false,
                wzw: this.userData.wzw || false,
                additionalInfo: this.userData.additionalInfo || '',
                bloodTypeVisibility: this.userData.bloodTypeVisibility || false,     
                hivVisibility: this.userData.hivVisibility || false,
                wzwVisibility: this.userData.wzwVisibility || false,
                additionalInfoVisibility: this.userData.additionalInfoVisibility || false,
            });
    
            this.medsList = this.userData.meds.length ? this.userData.meds?.split(';') : null;
            this.medsVisibility = this.userData.medsVisibility || false;
            this.foodAllergiesList = this.userData.foodAllergies.length ? this.userData.foodAllergies.split(';') : [];
            this.foodAllergiesVisibility = this.userData.foodAllergiesVisibility || false;
            this.medsAllergiesList = this.userData.drugAllergies.length ? this.userData.drugAllergies?.split(';') : [];
            this.drugAllergiesVisibility = this.userData.drugAllergiesVisibility || false;
            this.otherAllergiesList = this.userData.otherAllergies.length ? this.userData.otherAllergies.split(';') : [];            
            this.otherAllergiesVisibility = this.userData.otherAllergiesVisibility || false;
            this.circulationList = this.userData.chronicDiseasesCirculatorySystem.length ? this.userData.chronicDiseasesCirculatorySystem?.split(';') : [];
            this.digestList = this.userData.chronicDiseasesDigestiveSystem.length ? this.userData.chronicDiseasesDigestiveSystem?.split(';') : [];
            this.respiratoryList = this.userData.chronicDiseasesRespiratorySystem.length ? this.userData.chronicDiseasesRespiratorySystem?.split(';') : [];
            this.metabolismList = this.userData.metabolicDiseases.length ? this.userData.metabolicDiseases?.split(';') : [];
            this.kidneyList = this.userData.kidneyDiseases.length ? this.userData.kidneyDiseases?.split(';') : [];
            this.nervousList = this.userData.nervousSystem.length ? this.userData.nervousSystem?.split(';') : [];
            this.muscleList = this.userData.neuromuscularSystem.length ? this.userData.neuromuscularSystem?.split(';') : [];
            this.liverList = this.userData.liverDiseases.length ? this.userData.liverDiseases?.split(';') : [];
            this.boneList = this.userData.boneStructureDiseases.length ? this.userData.boneStructureDiseases?.split(';') : [];
            this.eyeList = this.userData.eyeDiseases.length ? this.userData.eyeDiseases?.split(';') : [];
            this.earList = this.userData.earDiseases.length ? this.userData.earDiseases?.split(';') : [];
            this.mentalList = this.userData.mentalDisorders.length ? this.userData.mentalDisorders?.split(';') : [];
            this.bloodList = this.userData.bloodDiseases.length ? this.userData.bloodDiseases?.split(';') : [];
            this.proceduresList = this.userData.pastSurgeriesProcedures.length ? this.userData.pastSurgeriesProcedures?.split(';') : [];
            this.immunoList = this.userData.autoimmuneDiseases.length ? this.userData.autoimmuneDiseases?.split(';') : [];
            this.immunoTreatmentList = this.userData.immunosuppressiveTreatments.length ? this.userData.immunosuppressiveTreatments?.split(';') : [];
            this.oldCancerList = this.userData.pastCancer.length ? this.userData.pastCancer?.split(';') : [];
            this.cancerList = this.userData.currentCancer.length ? this.userData.currentCancer?.split(';') : [];
            this.implantsList = this.userData.implants.length ? this.userData.implants?.split(';') : [];
            this.chronicDiseasesCirculatorySystemVisibility = this.userData.chronicDiseasesCirculatorySystemVisibility || false;
            this.chronicDiseasesDigestiveSystemVisibility = this.userData.chronicDiseasesDigestiveSystemVisibility || false;
            this.chronicDiseasesRespiratorySystemVisibility = this.userData.chronicDiseasesRespiratorySystemVisibility || false;
            this.metabolicDiseasesVisibility = this.userData.metabolicDiseasesVisibility || false;
            this.kidneyDiseasesVisibility = this.userData.kidneyDiseasesVisibility || false;
            this.nervousSystemVisibility = this.userData.nervousSystemVisibility || false;
            this.neuromuscularSystemVisibility = this.userData.neuromuscularSystemVisibility || false;
            this.liverDiseasesVisibility = this.userData.liverDiseasesVisibility || false;
            this.boneStructureDiseasesVisibility = this.userData.boneStructureDiseasesVisibility || false;
            this.eyeDiseasesVisibility = this.userData.eyeDiseasesVisibility || false;
            this.earDiseasesVisibility = this.userData.earDiseasesVisibility || false;
            this.mentalDisordersVisibility = this.userData.mentalDisordersVisibility || false;
            this.bloodDiseasesVisibility = this.userData.bloodDiseasesVisibility || false;
            this.pastSurgeriesProceduresVisibility = this.userData.pastSurgeriesProceduresVisibility || false;
            this.autoimmuneDiseasesVisibility = this.userData.autoimmuneDiseasesVisibility || false;
            this.immunosuppressiveTreatmentsVisibility = this.userData.immunosuppressiveTreatmentsVisibility || false;
            this.pastCancerVisibility = this.userData.pastCancerVisibility || false;
            this.currentCancerVisibility = this.userData.currentCancerVisibility || false;
            this.implantsVisibility = this.userData.implantsVisibility || false;
        }, err => {
            //blad
        })
    }
    
    get formValues(){
        return this.userForm.controls;
    }

    trackBy(index) { return index; }

    addMedication(){
        this.medsList.push(this.medication)
        this.medication = '';
    }
    
    removeMed(index: number) {
        this.medsList.splice(index, 1);
    }

    addAllergy(allergyType: number) {
        switch(allergyType) {
            case(0): {
                this.medsAllergiesList.push(this.medsAll)
                this.medsAll = '';            
                break;
            }
            case(1): {
                this.foodAllergiesList.push(this.foodAll)
                this.foodAll = '';
                break;
            }
            case(2): {
                this.otherAllergiesList.push(this.otherAll)
                this.otherAll = '';
                break;
            }
        }       
    }

    removeAllergy(index: number, allergyType: number) {
        switch(allergyType) {
            case(0): {
                this.medsAllergiesList.splice(index, 1);
                break;
            }
            case(1): {
                this.foodAllergiesList.splice(index, 1);
                break;
            }
            case(2): {
                this.otherAllergiesList.splice(index, 1);
                break;
            }
        }
    }

    addDisease(disease: number) {
        switch(disease) {
            case(0): {
                this.circulationList.push(this.circulation)
                this.circulation = '';
                break;
            }
            case(1): {
                this.digestList.push(this.digest)
                this.digest = '';
                break;
            }
            case(2): {
                this.respiratoryList.push(this.respiratory)
                this.respiratory = '';
                break;
            }
            case(3): {
                this.metabolismList.push(this.metabolism)
                this.metabolism = '';
                break;
            }
            case(4): {
                this.kidneyList.push(this.kidney)
                this.kidney = '';
                break;
            }
            case(5): {
                this.nervousList.push(this.nervous)
                this.nervous = '';
                break;
            }
            case(6): {
                this.muscleList.push(this.muscle)
                this.muscle = '';
                break;
            }
            case(7): {
                this.liverList.push(this.liver)
                this.liver = '';
                break;
            }
            case(8): {
                this.boneList.push(this.bone)
                this.bone = '';
                break;
            }
            case(9): {
                this.eyeList.push(this.eye)
                this.eye = '';
                break;
            }
            case(10): {
                this.earList.push(this.ear)
                this.ear = '';
                break;
            }
            case(11): {
                this.mentalList.push(this.mental)
                this.mental = '';
                break;
            }
            case(12): {
                this.bloodList.push(this.blood)
                this.blood = '';
                break;
            }
            case(13): {
                this.proceduresList.push(this.procedures)
                this.procedures = '';
                break;
            }
            case(14): {
                this.immunoList.push(this.immuno)
                this.immuno = '';
                break;
            }
            case(15): {
                this.immunoTreatmentList.push(this.immunoTreatment)
                this.immunoTreatment = '';
                break;
            }
            case(16): {
                this.oldCancerList.push(this.oldCancer)
                this.oldCancer = '';
                break;
            }
            case(17): {
                this.cancerList.push(this.cancer)
                this.cancer = '';
                break;
            }
            case(18): {
                this.implantsList.push(this.implants)
                this.implants = '';
                break;
            }
        }
    }

    removeDisease(index: number, disease: number) {
        switch(disease) {
            case(0): {
                this.circulationList.splice(index, 1);
                break;
            }
            case(1): {
                this.digestList.splice(index, 1);
                break;
            }
            case(2): {
                this.respiratoryList.splice(index, 1);
                break;
            }
            case(3): {
                this.metabolismList.splice(index, 1);
                break;
            }
            case(4): {
                this.kidneyList.splice(index, 1);
                break;
            }
            case(5): {
                this.nervousList.splice(index, 1);
                break;
            }
            case(6): {
                this.muscleList.splice(index, 1);
                break;
            }
            case(7): {
                this.liverList.splice(index, 1);
                break;
            }
            case(8): {
                this.boneList.splice(index, 1);
                break;
            }
            case(9): {
                this.eyeList.splice(index, 1);
                break;
            }
            case(10): {
                this.earList.splice(index, 1);
                break;
            }
            case(11): {
                this.mentalList.splice(index, 1);
                break;
            }
            case(12): {
                this.bloodList.splice(index, 1);
                break;
            }
            case(13): {
                this.proceduresList.splice(index, 1);
                break;
            }
            case(14): {
                this.immunoList.splice(index, 1);
                break;
            }
            case(15): {
                this.immunoTreatmentList.splice(index, 1);
                break;
            }
            case(16): {
                this.oldCancerList.splice(index, 1);
                break;
            }
            case(17): {
                this.cancerList.splice(index, 1);
                break;
            }
            case(18): {
                this.implantsList.splice(index, 1);
                break;
            }
        }
    }

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

        this.userData.street = this.userForm.get(['address', 'street'])?.value || '';
        this.userData.streetVisibility = this.userForm.get(['address', 'streetVisibility'])?.value || false;
        this.userData.houseNo = this.userForm.get(['address', 'houseNo'])?.value || '';
        this.userData.houseNoVisibility = this.userForm.get(['address', 'houseNoVisibility'])?.value || false;
        this.userData.postCode = this.userForm.get(['address', 'postCode'])?.value || '';
        this.userData.postCodeVisibility = this.userForm.get(['address', 'postCodeVisibility'])?.value || false;
        this.userData.flatNo = this.userForm.get(['address', 'flatNo'])?.value || '';
        this.userData.city = this.userForm.get(['address', 'city'])?.value || '';
        this.userData.cityVisibility = this.userForm.get(['address', 'cityVisibility'])?.value || false;
        this.userData.state = this.userForm.get(['address', 'state'])?.value || '';
        this.userData.stateVisibility = this.userForm.get(['address', 'stateVisibility'])?.value || false;

        this.userData.bloodType = this.formValues.bloodType?.value || null;
        this.userData.bloodTypeVisibility = this.formValues.bloodTypeVisibility?.value || false;

        this.userData.drugAllergies = this.medsAllergiesList?.join(';') || '';
        this.userData.drugAllergiesVisibility = this.drugAllergiesVisibility;
        this.userData.foodAllergies = this.foodAllergiesList?.join(';') || '';
        this.userData.foodAllergiesVisibility = this.foodAllergiesVisibility;
        this.userData.otherAllergies = this.otherAllergiesList?.join(';') || '';
        this.userData.otherAllergiesVisibility = this.otherAllergiesVisibility;
        this.userData.chronicDiseasesCirculatorySystem = this.circulationList?.join(';') || '';
        this.userData.chronicDiseasesDigestiveSystem = this.digestList?.join(';') || '';
        this.userData.chronicDiseasesRespiratorySystem = this.respiratoryList?.join(';') || '';
        this.userData.metabolicDiseases = this.metabolismList?.join(';') || '';
        this.userData.kidneyDiseases = this.kidneyList?.join(';') || '';
        this.userData.nervousSystem = this.nervousList?.join(';') || '';
        this.userData.neuromuscularSystem = this.muscleList?.join(';') || '';
        this.userData.liverDiseases = this.liverList?.join(';') || '';
        this.userData.boneStructureDiseases = this.boneList?.join(';') || '';
        this.userData.eyeDiseases = this.eyeList?.join(';') || '';
        this.userData.earDiseases = this.earList?.join(';') || '';
        this.userData.mentalDisorders = this.mentalList?.join(';') || '';
        this.userData.bloodDiseases = this.bloodList?.join(';') || '';
        this.userData.pastSurgeriesProcedures = this.proceduresList?.join(';') || '';
        this.userData.autoimmuneDiseases = this.immunoList?.join(';') || '';
        this.userData.immunosuppressiveTreatments = this.immunoTreatmentList?.join(';') || '';
        this.userData.pastCancer = this.oldCancerList?.join(';') || '';
        this.userData.currentCancer = this.cancerList?.join(';') || '';
        this.userData.implants = this.implantsList?.join(';') || '';

        this.userData.hiv = this.formValues.hiv.value;
        this.userData.wzw = this.formValues.wzw.value;               
        this.userData.additionalInfo = this.formValues.additionalInfo?.value || '';
        this.userData.hivVisibility = this.formValues.hivVisibility.value;
        this.userData.wzwVisibility = this.formValues.wzwVisibility.value;               
        this.userData.additionalInfoVisibility = this.formValues.additionalInfoVisibility?.value;

        this.userData.chronicDiseasesCirculatorySystemVisibility = this.chronicDiseasesCirculatorySystemVisibility;
        this.userData.chronicDiseasesDigestiveSystemVisibility = this.chronicDiseasesDigestiveSystemVisibility;
        this.userData.chronicDiseasesRespiratorySystemVisibility = this.chronicDiseasesRespiratorySystemVisibility;
        this.userData.metabolicDiseasesVisibility = this.metabolicDiseasesVisibility;
        this.userData.kidneyDiseasesVisibility = this.kidneyDiseasesVisibility;
        this.userData.nervousSystemVisibility = this.nervousSystemVisibility;
        this.userData.neuromuscularSystemVisibility = this.neuromuscularSystemVisibility;
        this.userData.liverDiseasesVisibility = this.liverDiseasesVisibility;
        this.userData.boneStructureDiseasesVisibility = this.boneStructureDiseasesVisibility;
        this.userData.eyeDiseasesVisibility = this.eyeDiseasesVisibility;
        this.userData.earDiseasesVisibility = this.earDiseasesVisibility;
        this.userData.mentalDisordersVisibility = this.mentalDisordersVisibility;
        this.userData.bloodDiseasesVisibility = this.bloodDiseasesVisibility;
        this.userData.pastSurgeriesProceduresVisibility = this.pastSurgeriesProceduresVisibility;
        this.userData.autoimmuneDiseasesVisibility = this.autoimmuneDiseasesVisibility;
        this.userData.immunosuppressiveTreatmentsVisibility = this.immunosuppressiveTreatmentsVisibility;
        this.userData.pastCancerVisibility = this.pastCancerVisibility;
        this.userData.currentCancerVisibility = this.currentCancerVisibility;
        this.userData.implantsVisibility = this.implantsVisibility;

        this.userData.meds = this.medsList?.join(';') || '';
        this.userData.medsVisibility = this.medsVisibility;       

        this.mainService.editUser(this.userData).subscribe(r => {
            if (r) {
                if (where == "next") {
                    this.router.navigateByUrl("form9");
                } else if (where == "back") {
                    this.router.navigateByUrl("form7");
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
