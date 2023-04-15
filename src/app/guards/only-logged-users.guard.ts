import { Injectable } from "@angular/core";
import { CanLoad, Route, CanActivate, Router } from "@angular/router";
import { MainService } from "../services/mainService.service";

@Injectable()
export class OnlyLoggedInUsersGuard implements CanLoad, CanActivate {

    constructor(
        private router: Router,
        private mainService: MainService) { }

    async canActivate() {
        let isLogged = await this.mainService.getCurrentUserId() != 0;
        if (!isLogged) {
            this.router.navigateByUrl("/login");
        }

        return isLogged;
    }

    async canLoad(route: Route): Promise<boolean> {
        let isLogged = await this.mainService.getCurrentUserId() != 0;
        if (!isLogged) {
            this.router.navigateByUrl("/login");
        }

        return isLogged;
    }
}

