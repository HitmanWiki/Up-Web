import * as localforage from "localforage"

const store = localforage.createInstance({
    driver: localforage.LOCALSTORAGE,
    name: "gate-fi",
    version: 1.0,
})

export const storageService = {
    getItem: (key) => store.getItem(key),
    setItem: (key, value) => store.setItem(key, value),
    removeItem: (key) => store.removeItem(key),
}