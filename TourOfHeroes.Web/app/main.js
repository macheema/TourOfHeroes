"use strict";
// The browser platform with a compiler
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// Load i18n providers
// import { TranslationProviders } from './i18n.providers';
// The app module
var app_module_1 = require('./app.module');
//if (String('<%= BUILD_TYPE %>') === 'prod') { enableProdMode(); }
// Compile and launch the module with i18n providers
// let TP = new TranslationProviders();
// TP.getTranslationFile().then((providers: any) => {
// const options: any = { providers };
//enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule /*, options*/);
// });
//# sourceMappingURL=main.js.map