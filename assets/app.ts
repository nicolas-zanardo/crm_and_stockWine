/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import 'bootstrap/scss/bootstrap.scss';
import './styles/app.scss';
import './fontawesome-free-5.15.2-web/scss/fontawesome.scss';
// import library JS
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Module
import AllNavBar from "./app/shared/components/navbar/AllNavBar";

// Instance
new AllNavBar();


