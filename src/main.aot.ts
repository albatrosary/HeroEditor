import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './shared/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
