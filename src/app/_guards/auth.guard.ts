import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRoute } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(
        private route: ActivatedRoute,
        private router : Router,
    ){}

    canActivate() {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}