import { writable } from "svelte/store";

export let theme = writable<"light" | "dark">("light");
export let hideTopSpace = writable<boolean>(false);
export let hideBottomMenu = writable<boolean>(false);
export let hideIntroOverflow = writable<boolean>(false);
export let hideGradient = writable<boolean>(false);
export const inputEthValue = writable(0);
export const setEtheValue = writable(0);

inputEthValue.subscribe((value) => {
    localStorage.setItem('inputEthValue', value);
})


