<script lang="ts">
	import { onMount } from 'svelte';

	type Theme = 'light' | 'dark';
	let theme = $state<Theme>('dark');

	const applyTheme = (nextTheme: Theme) => {
		document.documentElement.dataset.theme = nextTheme;
	};

	onMount(() => {
		const savedTheme = localStorage.getItem('jyse-theme');
		if (savedTheme === 'light' || savedTheme === 'dark') {
			theme = savedTheme;
		}
		applyTheme(theme);
	});

	const toggleTheme = () => {
		theme = theme === 'dark' ? 'light' : 'dark';
		applyTheme(theme);
		localStorage.setItem('jyse-theme', theme);
	};
</script>

<button class="theme-toggle" type="button" onclick={toggleTheme} aria-label="Toggle color theme">
	<span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
</button>
