<script lang="ts">
	import { onMount } from 'svelte';

	type Theme = 'light' | 'dark';
	let theme = $state<Theme>('dark');
	let initialized = $state(false);

	const applyTheme = (nextTheme: Theme) => {
		document.documentElement.dataset.theme = nextTheme;
	};

	onMount(() => {
		const savedTheme = localStorage.getItem('jyse-theme');
		if (savedTheme === 'light' || savedTheme === 'dark') {
			theme = savedTheme;
		} else {
			theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}

		applyTheme(theme);
		initialized = true;
	});

	$effect(() => {
		if (!initialized) return;
		applyTheme(theme);
		localStorage.setItem('jyse-theme', theme);
	});

	const toggleTheme = () => {
		theme = theme === 'dark' ? 'light' : 'dark';
	};
</script>

<button
	class="theme-toggle"
	type="button"
	onclick={toggleTheme}
	aria-label="Toggle color theme"
	aria-pressed={theme === 'dark'}
	title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
>
	{#if theme === 'dark'}
		<svg aria-hidden="true" viewBox="0 0 24 24" class="h-4 w-4">
			<path
				fill="currentColor"
				d="M12 4a1 1 0 0 1 1 1v1.2a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Zm0 12.8a1 1 0 0 1 1 1V19a1 1 0 1 1-2 0v-1.2a1 1 0 0 1 1-1Zm8-4.8a1 1 0 0 1-1 1h-1.2a1 1 0 1 1 0-2H19a1 1 0 0 1 1 1Zm-12.8 0a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h1.2a1 1 0 0 1 1 1Zm9.06-5.66a1 1 0 0 1 1.41 0l.85.85a1 1 0 0 1-1.41 1.41l-.85-.85a1 1 0 0 1 0-1.41Zm-9.78 9.78a1 1 0 0 1 1.41 0l.85.85a1 1 0 1 1-1.41 1.41l-.85-.85a1 1 0 0 1 0-1.41Zm11.19.85a1 1 0 0 1 0 1.41l-.85.85a1 1 0 1 1-1.41-1.41l.85-.85a1 1 0 0 1 1.41 0Zm-9.78-9.78a1 1 0 0 1 0 1.41l-.85.85a1 1 0 1 1-1.41-1.41l.85-.85a1 1 0 0 1 1.41 0ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"
			/>
		</svg>
		<span>Light</span>
	{:else}
		<svg aria-hidden="true" viewBox="0 0 24 24" class="h-4 w-4">
			<path
				fill="currentColor"
				d="M14.91 3.14a1 1 0 0 1 .84 1.63A7.5 7.5 0 1 0 19.23 16a1 1 0 0 1 1.46 1.22A9.5 9.5 0 1 1 13.77 3.3a1 1 0 0 1 1.14-.16Z"
			/>
		</svg>
		<span>Dark</span>
	{/if}
</button>
