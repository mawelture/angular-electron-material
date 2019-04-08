import { Component, OnInit } from "@angular/core";

export declare class MxMenuItem {
    /**
     * Item Title
     * @type {string}
     */
    title: string;
    /**
     * Item relative link (for routerLink)
     * @type {string}
     */
    link?: string;
    /**
     * Item URL (absolute)
     * @type {string}
     */
    url?: string;
    /**
     * Icon class name
     * @type {string}
     */
    icon?: string;
    /**
     * Expanded by default
     * @type {boolean}
     */
    expanded?: boolean;
    /**
     * Children items
     * @type {List<MxMenuItem>}
     */
    children?: MxMenuItem[];

    /**
     * Hidden Item
     * @type {boolean}
     */
    hidden?: boolean;
    
    /**
     * Whether the item is just a group (non-clickable)
     * @type {boolean}
     */
    group?: boolean;

    parent?: MxMenuItem;
    selected?: boolean;
    data?: any;

    /**
     * @returns item parents in top-down order
     */
    static getParents(item: MxMenuItem): MxMenuItem[];
    static isParent(item: MxMenuItem, possibleChild: MxMenuItem): boolean;
}

@Component({
    selector: "app-menu-item",
    templateUrl: "./menu-item.component.html",
    styleUrls: ["./menu-item.component.scss"]
})
export class MenuItemComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    onItemClick(item:MxMenuItem) {
        
    }
}
