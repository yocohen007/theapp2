import { Injectable } from "@angular/core";
import { Platform, AlertController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class LanguageService {
    private lang: string;
    private readonly LANGUAGE_STORAGE_KEY: string = "digitize.theapp.lang";

    constructor(private storage: Storage,
        public platform: Platform,
        private translateService: TranslateService,
        public alertCtrl: AlertController
    ) {
        console.log("constructor model-service");
    }

    public setLanguage(callback, app): void {
        this.storage.get(this.LANGUAGE_STORAGE_KEY).then(val => {
            this.lang = val != null ? val : "eng";
            this.translateService.setDefaultLang(this.lang);
            console.log("language is", this.lang);
            this.translateService.use(this.lang);
            callback(app);
        });
    }

    public getCurrentLang(): string {
        return this.lang;
    }
}