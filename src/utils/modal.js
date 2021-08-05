import { writable } from 'svelte/store';

function createModalStore() {
	const { subscribe, update } = writable({
        
    });

	return {
		subscribe,
        open: (component, props={}, cb) => {
            update(u => ({component, props, cb}))
        },
        close: () => {
            update(u => ({}))
        }
	};
}

export default createModalStore();