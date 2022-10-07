import { v4 as uuid } from 'uuid'
export function getTodos() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([{
                id: uuid(),
                text: 'Todo item from Serve'
            },
            {
                id: uuid(),
                text: 'Todo item 2 from Serve'
            },
            {
                id: uuid(),
                text: 'Todo item 3 from Serve'
            }])
        }, 1000)
    })
}