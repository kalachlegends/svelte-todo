import { writable } from "svelte/store";
import { v4 as uuid } from 'uuid'

function createTodoStore() {
    const { subscribe, set, update } = writable([{
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
    return {
        subscribe,
        add: (text) => {

            console.log(text)
            update((items) => {
                console.log(items)
                return [
                    ...items,
                    {
                        id: uuid(),
                        text,
                        done: false,
                    },
                ]
            });
        },
        setDone: (id, done) => {
            update((items) => {
                return items.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item,
                            done,
                        };
                    } else {
                        return item;
                    }
                });
            });
        },
        remove: (id) => {
            update((items) => {
                return items.filter((item) => {
                    return item.id != id;
                });
            });
        }
    }
}

export const todoItems = createTodoStore()