import { onDestroy } from "svelte";
export function onInterval(cb,ms) {
    const inteval = setInterval(cb,ms)
    onDestroy(()=>{
        clearInterval(inteval)
    })
}