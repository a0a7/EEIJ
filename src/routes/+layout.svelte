<script lang="ts">
	import { fade } from 'svelte/transition';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { journal } from '$lib/data/journal';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{journal.shortName} | {journal.name}</title>
	<meta name="description" content={journal.description} />
	<meta
		name="keywords"
		content="open access journal, science journal, engineering journal, peer-reviewed, student research"
	/>
	<meta property="og:title" content={journal.name} />
	<meta property="og:description" content={journal.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={journal.domain} />
</svelte:head>

<div class="min-h-screen bg-[var(--bg)] text-[var(--text-default)]">
	<SiteHeader />
	<main class="container-shell py-10">
		{#key page.url.pathname}
			<div in:fade={{ duration: 180 }} out:fade={{ duration: 120 }}>
				{@render children()}
			</div>
		{/key}
	</main>
	<SiteFooter />
</div>
