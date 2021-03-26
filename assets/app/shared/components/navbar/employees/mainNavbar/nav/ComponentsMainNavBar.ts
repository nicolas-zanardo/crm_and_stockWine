import SelectElement from "../../../../../services/SelectElement";

export default class ComponentsMainNavBar {



    constructor(
        /** TOP BAR **/
        protected mainTopBar:HTMLElement | null= SelectElement
            .getInstance().element("#navbar-employees"),
        protected mainTopBarBrand:HTMLElement | null= SelectElement
            .getInstance().element(".navbar-brand"),

        /** LEFT BAR **/
        protected  mainLeftBar: HTMLElement | null = SelectElement
            .getInstance().element("#nav-left"),
        // All elements of left bar
        protected mainLogoLeftBar:NodeListOf<HTMLElement> = SelectElement
            .getInstance().elements("#nav-left>.logo-nav-left"),
        /** LEFT UNDER BAR **/
        protected mainLeftUnderBar:HTMLElement | null= SelectElement
            .getInstance().element("#nav-left-under"),
        protected mainDescriptionLeftUnderBar: NodeListOf<HTMLElement> = SelectElement
            .getInstance().elements("#nav-left-under>.description-nav-left"),
    ) {}


    protected checkIsOpenNavBar():string | null {
        return localStorage.getItem('isOpenNavBar');
    }

}