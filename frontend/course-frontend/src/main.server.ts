import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';
import { provideHttpClient, withFetch } from '@angular/common/http';

// Add fetch-enabled HttpClient to your providers
if (!config.providers) {
  config.providers = [];
}

config.providers.push(
    provideHttpClient(withFetch())
);

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(App, config, context);

export default bootstrap;