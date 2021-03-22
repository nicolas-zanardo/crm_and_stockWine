import MainLeftBar from "./nav/components/MainLeftBar";
import MainLeftUnderBar from "./nav/components/MainLeftUnderBar";
import MainTopBar from "./nav/components/MainTopBar";


export default class MainNavbar {
    constructor() {
        new MainTopBar();
        new MainLeftBar();
        new MainLeftUnderBar();
    }
}