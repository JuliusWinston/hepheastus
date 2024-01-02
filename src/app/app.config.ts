import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, provideProtractorTestingSupport } from '@angular/platform-browser';
import routeConfig from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routeConfig),
    provideClientHydration()
  ]
};
