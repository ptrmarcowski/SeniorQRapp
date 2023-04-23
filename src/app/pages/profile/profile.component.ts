import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { MainService } from '../../services/mainService.service'
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { BloodType, UserData } from 'src/app/models/models';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
})
export class Profile implements OnInit {
    isUserInfoFromHash = false;
    userHash: string;
    qrCodeData: string;
    userData: UserData = new UserData();
    bloodType: string;
    showBasicData: boolean = false;

    constructor(
        private mainService: MainService,
        private route: ActivatedRoute,
        private router: Router) {
        if (this.route.snapshot.queryParamMap.has("hash")) {
            this.userHash = this.route.snapshot.queryParamMap.get('hash');
            this.isUserInfoFromHash = true;
        }
    }

    get convertBloodType(): string {
        switch(this.userData?.bloodType) {
            case(0): {
                this.bloodType = 'ARh+';
                break;
            }
            case(1): {
                this.bloodType = 'BRh+';
                break;
            }
            case(2): {
                this.bloodType = 'ABRh+';
                break;
            }
            case(3): {
                this.bloodType = '0Rh+';
                break;
            }
            case(4): {
                this.bloodType = 'ARh-';
                break;
            }
            case(5): {
                this.bloodType = 'BRh-';
                break;
            }
            case(6): {
                this.bloodType = 'ABRh-';
                break;
            }
            case(7): {
                this.bloodType = '0Rh-';
                break;
            }
        } 
        return this.bloodType;
    }



    ngOnInit(): void {
        if (this.isUserInfoFromHash) {
            this.mainService.getUserDataByHash(this.userHash).subscribe(r => {
                this.userData = r;
                if((this.userData.firstName && this.userData.firstNameVisibility)
                || (this.userData.lastName && this.userData.lastNameVisibility)
                || (this.userData.yearOfBirth && this.userData.yearOfBirthVisibility)
                || (this.userData.pesel && this.userData.peselVisibility)
                || (this.userData.phone && this.userData.phoneVisibility)
                || (this.userData.phone2 && this.userData.phone2Visibility)) {
                    this.showBasicData = true;
                }
            }, err => {
                //blad
            })
        } else {
            this.mainService.getUserDataById(this.mainService.getCurrentUserId()).subscribe(r => {
                this.userData = r;
                this.qrCodeData = this.getQrUrl(r.hash);
                if((this.userData.firstName && this.userData.firstNameVisibility)
                || (this.userData.lastName && this.userData.lastNameVisibility)
                || (this.userData.yearOfBirth && this.userData.yearOfBirthVisibility)
                || (this.userData.pesel && this.userData.peselVisibility)
                || (this.userData.phone && this.userData.phoneVisibility)
                || (this.userData.phone2 && this.userData.phone2Visibility)) {
                    this.showBasicData = true;
                }
            }, err => {
                //blad
            })
        }        
    }

    getQrUrl(hash: string): string {
        let port = window.location.port != '' ? ':' + window.location.port : "";
        return `${window.location.protocol}//${window.location.hostname}${port}/userInfo?hash=${hash}`;
    }

    logout() {
        this.mainService.logout();
        this.router.navigateByUrl("/");
    }

    htmltoPDF() {
        html2canvas(document.querySelector("#qrCodeBox")).then(canvas => {
            var pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
            var imgData  = canvas.toDataURL("image/jpeg", 1.0);
            pdf.addImage(imgData,0,0,canvas.width, canvas.height);
            pdf.save('kodQR.pdf');
        });
    }

    checkAndChangeContrast() {
        if (document.querySelector('body').hasAttribute('contrast')) {
            document.querySelector('body').removeAttribute('contrast');
            localStorage.removeItem('contrast');
        }
    }
}
