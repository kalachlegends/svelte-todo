export function typewriter(node, { speed = 300 }) {
    const inValid = (
        node.children.length === 1 &&
        node.childNode[0].nodeType === Node.TEXT_NODE
    )

    // if (!inValid) throw new Error("Please write valid values")
    const text = node.textContent
    return {
        tick: (t) => {
            const i = Math.round(text.length * t)
            node.textContent = text.slice(0, i)
        }
    }
}