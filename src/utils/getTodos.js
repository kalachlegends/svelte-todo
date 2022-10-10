import { v4 as uuid } from 'uuid'
export function getTodos() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([{
                id: uuid(),
                text: 'Todo item from Serve',
                done: false
            },
            {
                id: uuid(),
                text: 'Todo item 2 from Serve',
                done: true
            },
            {
                id: uuid(),
                text: 'Todo item 3 from Serve',
                done: false
            }])
        }, 500)
    })
}