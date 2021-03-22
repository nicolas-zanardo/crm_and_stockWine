import ComponentsMainNavBar from "../ComponentsMainNavBar";

export default class MainLeftUnderBar extends ComponentsMainNavBar {
    constructor() {
        super();
        this.mouseEnterListener();
        this.mouseLeaveListener();
    }

    private mouseEnterListener(): void {
        this.mainDescriptionLeftUnderBar.forEach(
            (description,keyDescription) => {
            description.addEventListener("mouseenter", () => {
                this.mainLeftUnderBar!.style.left = "50px";
                description!.style.backgroundColor = "#666666";
                this.mainLogoLeftBar.forEach(
                    (logo, keyLogo) => {
                        if(keyLogo === keyDescription) {
                            logo!.style.backgroundColor = "#666666";
                        }
                    }
                )
            });
        })
    }

    private mouseLeaveListener(): void {
        this.mainDescriptionLeftUnderBar.forEach(
            (description,keyDescription) => {
            description.addEventListener("mouseleave", () => {
                description!.style.backgroundColor = "";
                this.mainLeftUnderBar!.style.left = "-50px";
                this.mainLogoLeftBar.forEach(
                    (logo, keyLogo) => {
                        if(keyLogo === keyDescription) {
                            logo!.style.backgroundColor = "";
                        }
                    }
                )
            });
        })
    }
}