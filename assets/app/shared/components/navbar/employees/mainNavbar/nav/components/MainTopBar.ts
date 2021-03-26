import ComponentsMainNavBar from "../ComponentsMainNavBar";

export default class MainTopBar extends ComponentsMainNavBar {

    constructor() {
        super();
        this.onInit();
        this.endLoad();
    }

    /**
     * onInit()
     * --------
     * function that starts when the class is instantiated
     * @private
     */
    protected onInit(): void {
        this.clickNavbarBrand();
        this.setDisplayLeftBar();
    }

    /**
     * onload()
     * -------
     * function that starts when the page is finished loading
     * @private
     */
    protected endLoad(): void {
        window.addEventListener("load", () => {
            this.setValueFasMenu();
        });
    }

    /**
     * setValueFasMenu()
     * -----------------
     * Constraint: Onload
     * Control the Dynamics SCC fontaswome for the menu navbar
     * @private
     */
    private setValueFasMenu() {
        const navbarBrandFont = this.mainTopBarBrand!
            .querySelector(".navbar-brand>svg");
        // NavBar Is Open
        if (localStorage.getItem("isOpenNavBar") == "open") {
            navbarBrandFont!.classList.add("fa-bars");
            navbarBrandFont!.classList.replace("fa-bars", "fa-times");
        }
        // NavBar Is Close
        if (localStorage.getItem("isOpenNavBar") == "close") {
            navbarBrandFont!.classList.add("fa-times");
            navbarBrandFont!.classList.replace("fa-times", "fa-bars");

        }
        // NavBar Is not initialized
        if (localStorage.getItem("isOpenNavBar") == undefined || null) {
            navbarBrandFont!.classList.remove("fa-times");
            navbarBrandFont!.classList.add("fa-bars");
        }
    }

    /**
     * setDisplayLeftBar
     * -----------------
     * Open and close whit CSS main left nav bar
     * @private
     */
    private setDisplayLeftBar() {

        const navbarBrandSelect_i: HTMLElement | null = this.mainTopBar!
            .querySelector(".navbar-brand>i")

        // NavBar Is Open
        if (localStorage.getItem("isOpenNavBar") == "open") {
            this.mainLeftBar!.style.left = "0px";
            this.mainLeftUnderBar!.style.left = "-50px";
            navbarBrandSelect_i!.classList.add("fa-times");
        }
        // NavBar Is Close
        if (localStorage.getItem("isOpenNavBar") == "close") {
            navbarBrandSelect_i!.classList.add("fa-bars");
            this.mainLeftBar!.style.left = "-50px";
            this.mainLeftUnderBar!.style.left = "-100px";
        }
        // NavBar Is not initialized
        if (localStorage.getItem("isOpenNavBar") == undefined || null) {
            navbarBrandSelect_i!.classList.add("fa-bars");
            this.mainLeftBar!.style.left = "0px";
            this.mainLeftUnderBar!.style.left = "-50px";
        }
    }


    /**
     * clickNavbarBrand()
     * ------------------
     * Open and close the left navBar
     * @private
     */
    private clickNavbarBrand(): void {
        this.mainTopBarBrand!.addEventListener('click', () => {

            // Initialisation value CSS with JS
            if (this.mainLeftBar!.style.left == "" || this.mainLeftUnderBar!.style.left == "") {
                this.mainLeftBar!.style.left = "-50px";
                this.mainLeftUnderBar!.style.left = "-100px";
            }

            // If left navbar is close
            if (this.mainLeftBar!.style.left === "-50px" &&
                this.mainLeftUnderBar!.style.left === "-100px") {
                this.mainLeftBar!.style.left = "0px";
                this.mainLeftUnderBar!.style.left = "-50px";
                // Set value in local storage for don't change the
                // status of navbar
                localStorage.setItem("isOpenNavBar", "open");
                this.setValueFasMenu();
            } else {
                this.mainLeftBar!.style.left = "-50px";
                this.mainLeftUnderBar!.style.left = "-100px";
                // Set value in local storage for don't change the
                // status of navbar
                localStorage.setItem("isOpenNavBar", "close");
                this.setValueFasMenu();
            }
        })
    }
}