import '@angular/forms';
import '@angular/platform-browser-dynamic';
import '@angular/http';
import '@angular/router';
import 'rxjs';

// Other famous libraries
import 'jquery';
import 'bootstrap-loader'; // used to import bootstrap as scss

// if you want to remove my custom css to show the initial spinner
// remove the css import and use the following
// import 'font-awesome-sass-loader'; // used to import font-awesome as scss

// use this if you want to see the spinner before angular's booting
import 'font-awesome/css/font-awesome.css';
// css to show a centered spinner before angular's booting
import '../src/loading.css';