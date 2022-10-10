export function draggable(node) {
    let x = 0
    let y = 0
    function handleMouseDown(Event) {
        x = Event.clientX
        y = Event.clientY
        node.dispatchEvent(new CustomEvent('dragstart', {
            detail: {
                x: Event.clientX,
                y: Event.clientY
            }
        }))
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseup', handleMouseUp)
    }
    function handleMouseMove(event) {
        const dx = event.clientX - x
        const dy = event.clientY - y
        x = event.clientX
        y = event.clientY
        console.log(dy)
        node.dispatchEvent(new CustomEvent('dragmove',
            {
                detail: {
                    x,
                    y,
                    dx,
                    dy
                }
            }))
    }
    function handleMouseUp(event) {
        x = event.clientX
        y = event.clientY
        node.dispatchEvent(new CustomEvent('dragend'), {
            detail: {
                x,
                y,

            }
        })
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
    }

    node.addEventListener('mousedown', handleMouseDown)
    return {
        destroy() {
            node.removeEventListener('mousedown', handleMouseDown)
        }
    }
}