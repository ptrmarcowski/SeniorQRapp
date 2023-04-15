import { Component, OnInit } from '@angular/core'
import { UserData } from 'src/app/models/models';
import { MainService } from 'src/app/services/mainService.service';

@Component({
    selector: 'data-saved',
    templateUrl: 'data-saved.component.html',
    styleUrls: ['data-saved.component.css'],
})
export class DataSaved implements OnInit {
    qrCodeData: string;
    userData: UserData = new UserData();

    constructor(private mainService: MainService,) {}

    ngOnInit(): void {
        this.mainService.getUserDataById(this.mainService.getCurrentUserId()).subscribe(r => {
            this.userData = r;     
            this.qrCodeData = this.getQrUrl(r.hash);
        }, err => {
            //blad
        })     
    }

    getQrUrl(hash: string): string {
        let port = window.location.port != '' ? ':' + window.location.port : "";
        return `${window.location.protocol}//${window.location.hostname}${port}/userInfo?hash=${hash}`;
    }
}
