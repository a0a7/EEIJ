<script lang="ts">
	import FigurePlaceholder from '$lib/components/FigurePlaceholder.svelte';
	import TagPill from '$lib/components/TagPill.svelte';
	import { journal } from '$lib/data/journal';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();

	const published = $derived(
		new Date(data.article.publishedOn).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	);
</script>

<svelte:head>
	<title>{data.article.title} | {journal.shortName}</title>
	<meta name="description" content={data.article.abstract.slice(0, 150)} />
</svelte:head>

<article class="mx-auto max-w-4xl space-y-8">
	<header class="space-y-4">
		<p class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">
			Volume {data.issue.volume}, Issue {data.issue.number} • {published}
		</p>
		<h1 class="text-4xl leading-tight font-semibold text-[var(--text-strong)] md:text-5xl">
			{data.article.title}
		</h1>
		<p class="text-sm leading-7 text-[var(--text-default)]">
			{#each data.article.authors as author, i (author.name)}
				<span class="font-medium text-[var(--text-strong)]">{author.name}</span>
				<span> ({author.role}) — {author.affiliation}</span>{i < data.article.authors.length - 1
					? '; '
					: ''}
			{/each}
		</p>
		<div class="flex flex-wrap gap-2">
			{#each data.article.tags as tag (tag)}
				<TagPill {tag} />
			{/each}
		</div>
	</header>

	<section class="space-y-3">
		<h2 class="text-2xl font-semibold text-[var(--text-strong)]">Abstract</h2>
		<p class="text-base leading-8 text-[var(--text-default)]">{data.article.abstract}</p>
	</section>

	<section class="space-y-4">
		<FigurePlaceholder title={data.article.figure.title} />
		<p class="text-sm leading-7 text-[var(--text-muted)]">{data.article.figure.caption}</p>
	</section>

	<section class="grid gap-5 md:grid-cols-[1.4fr_1fr]">
		<div class="card p-5">
			<h2 class="text-2xl font-semibold text-[var(--text-strong)]">Citation</h2>
			<p class="mt-3 text-sm leading-7 text-[var(--text-default)]">{data.article.citation}</p>
			<p class="mt-2 text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">
				DOI: {data.article.doi}
			</p>
		</div>
		<div class="card p-5">
			<h2 class="text-2xl font-semibold text-[var(--text-strong)]">Download</h2>
			<p class="mt-3 text-sm leading-7 text-[var(--text-default)]">
				Access the article PDF formatted for citation and offline review.
			</p>
			<a
				href={`https://www.jyse.org/downloads/jyse-${data.article.slug}.pdf`}
				class="focus-ring mt-4 inline-flex rounded-sm bg-[var(--accent)] px-5 py-2 text-sm text-[var(--accent-contrast)]"
				download
			>
				Download PDF
			</a>
		</div>
	</section>
</article>
