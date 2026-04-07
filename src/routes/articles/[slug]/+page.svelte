<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve -- this page intentionally renders dynamic external DOI/Zenodo/ORCID URLs */
	import TagPill from '$lib/components/TagPill.svelte';
	import { journal } from '$lib/data/journal';
	import type { Author } from '$lib/data/journal';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();

	const published = $derived(
		new Date(data.article.publishedOn).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	);

	const doiUrl = $derived(`https://doi.org/${data.article.doi}`);
	const zenodoUrl = $derived(
		`https://zenodo.org/search?page=1&size=20&q=${encodeURIComponent(data.article.doi)}`
	);
	const citation = $derived(
		`${data.article.authors.map((author: Author) => author.name).join(', ')} (${new Date(data.article.publishedOn).getFullYear()}). ${data.article.title}. ${journal.name}, ${data.issue.volume}(${data.issue.number}). https://doi.org/${data.article.doi}`
	);

	const getOrcidSearchUrl = (name: string) =>
		`https://orcid.org/orcid-search/search?searchQuery=${encodeURIComponent(name)}`;
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
		<p
			class="inline-flex items-center gap-2 text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase"
		>
			<span aria-hidden="true">🔓</span>
			<span>Open access • Peer reviewed • CC BY 4.0</span>
		</p>
		<h1 class="text-4xl leading-tight font-semibold text-[var(--text-strong)] md:text-5xl">
			{data.article.title}
		</h1>
		<p class="text-sm leading-7 text-[var(--text-default)]">
			{#each data.article.authors as author, i (author.name)}
				<span class="font-medium text-[var(--text-strong)]">{author.name}</span>
				<span> ({author.role}) — {author.affiliation}</span>
				<a
					href={getOrcidSearchUrl(author.name)}
					target="_blank"
					rel="noreferrer"
					class="ml-1 text-xs text-[var(--accent)] hover:underline"
				>
					ORCID
				</a>{i < data.article.authors.length - 1 ? '; ' : ''}
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

	<section class="grid gap-5 md:grid-cols-[1.4fr_1fr]">
		<div class="card p-5">
			<h2 class="text-2xl font-semibold text-[var(--text-strong)]">Citation</h2>
			<p class="mt-3 text-sm leading-7 text-[var(--text-default)]">{citation}</p>
			<p class="mt-3 text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">Identifiers</p>
			<div class="mt-2 flex flex-wrap gap-3 text-sm">
				<a
					href={doiUrl}
					target="_blank"
					rel="noreferrer"
					class="text-[var(--accent)] hover:underline">DOI</a
				>
				<a
					href={zenodoUrl}
					target="_blank"
					rel="noreferrer"
					class="text-[var(--accent)] hover:underline">Zenodo</a
				>
			</div>
		</div>
		<div class="card p-5">
			<h2 class="text-2xl font-semibold text-[var(--text-strong)]">Access</h2>
			<p class="mt-3 text-sm leading-7 text-[var(--text-default)]">
				This article is available with open access and permanent identifier links for citation and
				discovery.
			</p>
			<div class="mt-4 flex flex-wrap gap-3">
				<a
					href={`https://www.jyse.org/downloads/jyse-${data.article.slug}.pdf`}
					class="focus-ring inline-flex rounded-sm bg-[var(--accent)] px-5 py-2 text-sm text-[var(--accent-contrast)]"
					download
				>
					Download PDF
				</a>
				<a
					href={doiUrl}
					target="_blank"
					rel="noreferrer"
					class="focus-ring inline-flex rounded-sm border border-[var(--border)] px-5 py-2 text-sm text-[var(--text-default)] hover:border-[var(--accent)]"
				>
					View DOI record
				</a>
			</div>
		</div>
	</section>
</article>
