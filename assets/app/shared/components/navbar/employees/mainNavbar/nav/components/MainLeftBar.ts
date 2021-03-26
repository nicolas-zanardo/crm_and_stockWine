import ComponentsMainNavBar from "../ComponentsMainNavBar";

export default class MainLeftBar extends ComponentsMainNavBar {
    constructor() {
        super();
        this.mouseEnterListener();
        this.mouseLeaveListener();
    }

    private mouseEnterListener(): void {
            this.mainLogoLeftBar.forEach((logo ,keyLogo) => {
                logo.addEventListener("mouseenter", () => {
                    logo!.style.backgroundColor = "#666666";
                    this.mainLeftUnderBar!.style.left = "50px";
                    logo.querySelector("svg")?.classList.replace("fs-4", "fs-2")
                    this.mainDescriptionLeftUnderBar.forEach(
                        (description, keyDescription) => {
                            if(keyDescription === keyLogo) {
                                description!.style.backgroundColor = "#666666";
                            }
                        })
                });
            })
    }

    private mouseLeaveListener(): void {
            this.mainLogoLeftBar.forEach((logo, keyLogo) => {
                logo.addEventListener("mouseleave", () => {
                    logo!.style.backgroundColor = "#444";
                    this.mainLeftUnderBar!.style.left = "-50px";
                    logo.querySelector("svg")?.classList.replace("fs-2", "fs-4")
                    this.mainDescriptionLeftUnderBar.forEach(
                        (description, keyDescription) => {
                            if(keyDescription === keyLogo) {
                                description!.style.backgroundColor = "";
                            }
                        })
                });
            })
    }
}