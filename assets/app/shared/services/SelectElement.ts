export default class SelectElement {
    private static instance: SelectElement;

    private Constructor() {}

    public static getInstance(): SelectElement {
        return SelectElement.instance || (SelectElement.instance = new SelectElement());
    }

    public element(element:string):HTMLElement | null {
        return document.querySelector(element);
    }

    public elements(element:string): NodeListOf<HTMLElement> {
        return document.querySelectorAll(element);
    }
}