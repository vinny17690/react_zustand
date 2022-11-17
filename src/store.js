import create from 'zustand'; // just 1.2kb gzipped

// Count store
export const useCountStore = create((set) => ({
	count: 0,
	inc: () => set((state) => ({ count: state.count + 1 })),
}));

// Posts store
export const usePostStore = create((set) => ({
	posts: [],
	setPosts: async ({ count, greeting }) => {
		// We can pass params to the store, either individually or as an object
		console.log('Count Param: ', count);
		console.log('Greeting Param: ', greeting);
		// We can perform async operations inside the store like redux middlewares
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		// Just call `set` function whenever we are ready! That's all.
		// All subscribed components will be updated with new data.
		set(({ posts: await response.json() }));
	},
	clearPosts: () => set({ posts: [] }),
}));

