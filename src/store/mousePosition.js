import { readable } from "svelte/store";

export const mousePosition = readable({
    x: 0,
    y: 0
}, (set) => {
    const handler = Event => {
        set({
            x: Event.clientX,
            y: Event.clientY
        })


    }
    document.addEventListener('mousemove', handler)

    return () => {
        document.removeEventListener('mousemove', handler)
    }
})
