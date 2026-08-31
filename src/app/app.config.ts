import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import {
  provideRouter,
  withHashLocation,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
      withViewTransitions(),
      withHashLocation(),
    ),
    provideClientHydration(withEventReplay()),
    provideToastr(),
    provideHttpClient(
      withFetch(),
      // withInterceptors([headerInterceptor, errorInterceptor, loadInterceptor]),
    ),
    // provideTranslateService({
    // loader: provideTranslateHttpLoader({
    // prefix: '/i18n/',
    // suffix: '.json',
    // }),
    // fallbackLang: 'en',
    // lang: 'en',
    // }),
    // importProvidersFrom(NgxSpinnerModule),
  ],
};
