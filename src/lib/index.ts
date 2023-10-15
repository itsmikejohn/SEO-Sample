import {writable} from "svelte/store";
import type { UserType, SearchModel } from "./types";

export const userData: UserType[] = [
    {
        id: 0,
        name: "Peter",
        address: "Maybunga",
        age: "55",

    },

    {
        id: 1,
        name: "Vanessa",
        address: "Laguna",
        age: "44",

    },

    {
        id: 2,
        name: "Kevin",
        address: "Pateros",
        age: "77",

    },

    {
        id: 3,
        name: "Robert",
        address: "Cainta",
        age: "23",

    },

    {
        id: 4,
        name: "James",
        address: "Pateros",
        age: "55",

    },

    {
        id: 5,
        name: "Ruby",
        address: "Maybunga",
        age: "88",

    },
];

export const createSearchStore = <T extends Record<PropertyKey, any>>(data: T[]) =>
{
    const {set, update, subscribe} = writable<SearchModel<T>>({
        data: data,
        filtered: data,
        search: "",
    })

    return {
        set,
        update,
        subscribe,
    }
}

export const searchHandler =<T extends Record<PropertyKey, any>> (store: SearchModel<T>) => 
{
    const searchTerm = store.search.toLowerCase() || "";
    store.filtered = store.data.filter( (item ) => {
        return item.searchPattern.toLowerCase().includes(searchTerm);
    })
}


