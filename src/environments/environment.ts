// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyCp-GiBZmuAu10Yk0wACE9P4uMC9zekOGg",
    authDomain: "myapp-da24b.firebaseapp.com",
    databaseURL: "https://myapp-da24b.firebaseio.com",
    projectId: "myapp-da24b",
    storageBucket: "myapp-da24b.appspot.com",
    messagingSenderId: "1082541659537"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
