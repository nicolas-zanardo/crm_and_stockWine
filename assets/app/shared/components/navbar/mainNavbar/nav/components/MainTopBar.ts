import ComponentsMainNavBar from "../ComponentsMainNavBar";

export default class MainTopBar extends ComponentsMainNavBar {
    constructor() {
        super();
        this.clickNavbarBrand()
    }

    private clickNavbarBrand() {
        this.mainTopBarBrand!.addEventListener('click', () => {
            if(this.mainLeftBar!.style.left === "") {
                this.mainLeftBar!.style.left = "0px";
            }
            if(this.mainLeftBar!.style.left === "0px" ||
                this.mainLeftUnderBar!.style.left === "-50px")
            {
                this.mainLeftBar!.style.left = "-50px";
                this.mainLeftUnderBar!.style.left = "-100px";
            } else {
                this.mainLeftBar!.style.left = "0px";
                this.mainLeftUnderBar!.style.left = "-50px";
            }

        })
    }
}