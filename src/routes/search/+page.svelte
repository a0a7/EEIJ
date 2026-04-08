<script lang="ts">
	import { resolve } from '$app/paths';
	import { articles, journal } from '$lib/data/journal';

	let query = $state('');
	const normalizedQuery = $derived(query.trim().toLowerCase());
	const results = $derived.by(() => {
		if (!normalizedQuery) return articles.slice(0, 12);
		return articles.filter((article) => {
			const haystack =
				`${article.title} ${article.abstract} ${article.tags.join(' ')}`.toLowerCase();
			return haystack.includes(normalizedQuery);
		});
	});
</script>

<svelte:head>
	<title>Search | {journal.shortName}</title>
	<meta name="description" content="Search articles in JYSE." />
</svelte:head>

<section class="space-y-6">
	<div class="space-y-2">
		<p class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">Search</p>
		<h1 class="text-3xl font-semibold text-[var(--text-strong)] md:text-4xl">Search articles</h1>
		<p class="text-sm text-[var(--text-default)]">
			Find articles by title, keywords, or abstract text.
		</p>
	</div>

	<div class="card p-4">
		<label for="article-search" class="mb-2 block text-sm font-medium text-[var(--text-strong)]"
			>Search term</label
		>
		<input
			id="article-search"
			type="search"
			bind:value={query}
			placeholder="Try: sensors, wildfire, machine learning"
			class="focus-ring w-full rounded-sm border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text-default)]"
		/>
	</div>

	<div class="space-y-3">
		<p class="text-sm text-[var(--text-muted)]">{results.length} result(s)</p>
		{#if results.length === 0}
			<p class="card p-4 text-sm text-[var(--text-default)]">No articles matched your search.</p>
		{:else}
			<ul class="grid gap-3 md:grid-cols-2">
				{#each results as article (article.slug)}
					<li class="card p-4">
						<a
							href={resolve(`/articles/${article.slug}`)}
							class="text-base font-medium text-[var(--text-strong)] hover:text-[var(--accent)]"
						>
							{article.title}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</section>
