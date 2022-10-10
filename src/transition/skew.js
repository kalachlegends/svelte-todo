import { cubicIn } from "svelte/easing"

export function skew(node, { duration }) {
    return {
        duration,
        css: t => {
            const eased = cubicIn(t)

            return `
            transform: scale(${eased}) skew(${eased * 180}deg);
            `
        }
    }
}