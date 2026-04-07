<script lang="ts">
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import { allTags, articles, journal } from '$lib/data/journal';

	let selectedTag = $state('All');

	const filteredArticles = $derived(
		selectedTag === 'All'
			? articles
			: articles.filter((article) => article.tags.includes(selectedTag))
	);
</script>

<svelte:head>
	<title>Articles | {journal.shortName}</title>
	<meta
		name="description"
		content="Browse peer-reviewed engineering articles authored by student investigators and mentors."
	/>
</svelte:head>

<section class="space-y-6">
	<div class="space-y-3">
		<p class="text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase">Publications</p>
		<h1 class="font-serif text-4xl text-[var(--text-strong)]">Articles & Research Papers</h1>
		<p class="max-w-3xl text-sm leading-7 text-[var(--text-default)]">
			All manuscripts in EEIJ undergo editorial screening and technical peer review focused on
			rigor, reproducibility, and student-led contribution.
		</p>
	</div>

	<div class="flex flex-wrap gap-2">
		<button
			type="button"
			onclick={() => (selectedTag = 'All')}
			class={`rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-colors duration-200 ${selectedTag === 'All' ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-contrast)]' : 'border-[var(--border)] text-[var(--text-default)] hover:border-[var(--accent)]'}`}
		>
			All Topics
		</button>
		{#each allTags as tag (tag)}
			<button
				type="button"
				onclick={() => (selectedTag = tag)}
				class={`rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-colors duration-200 ${selectedTag === tag ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-contrast)]' : 'border-[var(--border)] text-[var(--text-default)] hover:border-[var(--accent)]'}`}
			>
				{tag}
			</button>
		{/each}
	</div>

	<div class="grid gap-5 md:grid-cols-2">
		{#each filteredArticles as article (article.slug)}
			<ArticleCard {article} />
		{/each}
	</div>
</section>
