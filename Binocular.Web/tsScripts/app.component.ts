import { Component } from "@angular/core"
import { Logger } from "./_services/logger.service";

@Component({
    selector: "user-app",
    templateUrl: `app/app.component.html`
})

export class AppComponent {

    constructor(
        private logger: Logger
    ) { }

    public ngAfterViewInit(): void {
        this.loadScript('../js/admin.js');
    }

    public loadScript(url: string) {
        this.logger.log('preparing to load...');
        this.logger.log('loading ' + url);
        let node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }
}