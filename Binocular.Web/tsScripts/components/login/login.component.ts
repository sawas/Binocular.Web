import { Component, OnInit } from '@angular/core';


@Component({
    templateUrl: `app/components/login/login.component.html`
})

export class LoginComponent {
    
    public ngAfterViewInit(): void {
        this.loadScript("");
    }

    public loadScript(url: string) {
        
        document.getElementsByTagName('body')[0].classList.remove("theme-green");
        document.getElementsByTagName('body')[0].classList.add("login-page");
    }

    onSubmit() {  }
}