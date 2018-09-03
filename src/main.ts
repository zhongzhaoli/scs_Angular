import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { environmentLoader as environmentLoaderPromise } from './app/environments/environmentLoader';

environmentLoaderPromise.then(env => {
    if (env.production) {
        enableProdMode();
        environment.url = env.url;
    }
    else{
        environment.url = env.url_dev;
    }

    platformBrowserDynamic().bootstrapModule(AppModule);
});
