import MainNavbar from "./employees/mainNavbar/MainNavBar";


export default class AllNavBar {

     constructor() {
        if( window.location.pathname.match(AllNavBar.pathRegex("employees")) ) {
            new MainNavbar();
        }


    }

    private static pathRegex(path: string) {
        return new RegExp(`${path}(\\/)?(((\\w+((-)?(\\w+))+(\\/)?))?)+`);
    }

}