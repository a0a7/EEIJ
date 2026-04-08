<script lang="ts">
	import { resolve } from '$app/paths';
	import TagPill from '$lib/components/TagPill.svelte';
	import { articles, journal } from '$lib/data/journal';
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

	const hasDoi = $derived(Boolean(data.article.doi?.trim()));
	const doiUrl = $derived(hasDoi ? `https://doi.org/${data.article.doi}` : '');
	const zenodoUrl = $derived(
		`https://zenodo.org/search?page=1&size=20&q=${encodeURIComponent(data.article.doi)}`
	);
	const pdfUrl = $derived(`${journal.domain}/downloads/jyse-${data.article.slug}.pdf`);
	const supportingInfoUrl = $derived(
		`https://huggingface.co/models?search=${encodeURIComponent(`${data.article.doi} ${data.article.tags.join(' ')}`)}`
	);
	const licenseUrl = 'https://creativecommons.org/licenses/by-nc-sa/4.0/';
	const citation = $derived(
		`${data.article.authors.map((author: Author) => author.name).join(', ')} (${new Date(data.article.publishedOn).getFullYear()}). ${data.article.title}. ${journal.name}, ${data.issue.volume}(${data.issue.number}). ${hasDoi ? `https://doi.org/${data.article.doi}` : 'DOI pending assignment.'}`
	);
	const recommendedArticles = $derived(
		articles.filter((article) => article.slug !== data.article.slug).slice(0, 3)
	);

	const getOrcidSearchUrl = (name: string) =>
		`https://orcid.org/orcid-search/search?searchQuery=${encodeURIComponent(name)}`;
</script>

<svelte:head>
	<title>{data.article.title} | {journal.shortName}</title>
	<meta name="description" content={data.article.abstract.slice(0, 150)} />
</svelte:head>

<article class="mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-8">
	<div class="space-y-8">
		<header class="space-y-4">
			<p class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">
				Volume {data.issue.volume}, Issue {data.issue.number} • {published}
			</p>
			<p
				class="inline-flex flex-wrap items-center gap-2 text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase"
			>
				<span aria-hidden="true">🔓</span>
				<span>Open access • Peer reviewed • CC BY-NC-SA 4.0</span>
			</p>
			<h1 class="text-4xl leading-tight font-semibold text-[var(--text-strong)] md:text-5xl">
				{data.article.title}
			</h1>
			<p class="text-sm leading-7 text-[var(--text-default)]">
				{#each data.article.authors as author, i (author.name)}
					<span class="font-medium text-[var(--text-strong)]">{author.name}</span>
					<span class="ml-1">({author.role})</span>
					<!-- eslint-disable svelte/no-navigation-without-resolve -->
					<a
						href={getOrcidSearchUrl(author.name)}
						target="_blank"
						rel="noreferrer"
						class="ml-1 text-xs text-[var(--accent)] hover:underline"
					>
						ORCID
					</a>
					<!-- eslint-enable svelte/no-navigation-without-resolve -->{i <
					data.article.authors.length - 1
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

		<section id="abstract" class="space-y-3">
			<h2 class="text-2xl font-semibold text-[var(--text-strong)]">Abstract</h2>
			<p class="text-base leading-8 text-[var(--text-default)]">{data.article.abstract}</p>
		</section>

		<section id="access" class="grid gap-5 md:grid-cols-[1.4fr_1fr]">
			<div class="card p-5">
				<h2 class="text-2xl font-semibold text-[var(--text-strong)]">Citation</h2>
				<p class="mt-3 text-sm leading-7 text-[var(--text-default)]">{citation}</p>
				<p class="mt-3 text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">Identifiers</p>
				<div class="mt-2 flex flex-wrap gap-3 text-sm">
					{#if hasDoi}
						<!-- eslint-disable svelte/no-navigation-without-resolve -->
						<a
							href={doiUrl}
							target="_blank"
							rel="noreferrer"
							class="text-[var(--accent)] hover:underline">DOI</a
						>
						<!-- eslint-enable svelte/no-navigation-without-resolve -->
					{:else}
						<span class="text-[var(--text-muted)]">DOI pending assignment</span>
					{/if}
					<!-- eslint-disable svelte/no-navigation-without-resolve -->
					<a
						href={zenodoUrl}
						target="_blank"
						rel="noreferrer"
						class="text-[var(--accent)] hover:underline">Zenodo</a
					>
					<!-- eslint-enable svelte/no-navigation-without-resolve -->
				</div>
			</div>
			<div class="card p-5">
				<h2 class="text-2xl font-semibold text-[var(--text-strong)]">Access</h2>
				<p class="mt-3 text-sm leading-7 text-[var(--text-default)]">
					This article is available with open access and permanent identifier links for citation and
					discovery.
				</p>
				<div class="mt-4 flex flex-wrap gap-3">
					<!-- eslint-disable svelte/no-navigation-without-resolve -->
					<a
						href={licenseUrl}
						target="_blank"
						rel="noreferrer"
						class="focus-ring inline-flex rounded-sm bg-[var(--accent)] px-5 py-2 text-sm text-[var(--accent-contrast)]"
					>
						Open Access
					</a>
					<a
						href={pdfUrl}
						target="_blank"
						rel="noreferrer"
						class="focus-ring inline-flex rounded-sm border border-[var(--border)] px-5 py-2 text-sm text-[var(--text-default)] hover:border-[var(--accent)]"
					>
						View PDF
					</a>
					<a
						href={supportingInfoUrl}
						target="_blank"
						rel="noreferrer"
						class="focus-ring inline-flex rounded-sm border border-[var(--border)] px-5 py-2 text-sm text-[var(--text-default)] hover:border-[var(--accent)]"
					>
						Search supporting repositories
					</a>
					<!-- eslint-enable svelte/no-navigation-without-resolve -->
				</div>
			</div>
		</section>
	</div>

	<aside class="mt-8 hidden space-y-5 lg:mt-0 lg:block">
		<section class="card space-y-4 p-5">
			<h2 class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">Go to</h2>
			<nav class="space-y-2 text-sm">
				<a href="#abstract" class="block text-[var(--accent)] hover:underline">Abstract</a>
				<a href="#access" class="block text-[var(--accent)] hover:underline">Access options</a>
			</nav>
			<div
				class="space-y-3 border-t border-[var(--border)]/70 pt-4 text-sm text-[var(--text-default)]"
			>
				<a
					href="mailto:editorial@jyse.org?subject=Get%20e-Alerts%20for%20JYSE"
					class="font-medium text-[var(--accent)] hover:underline"
				>
					Get e-Alerts
				</a>
				<p class="font-medium text-[var(--text-strong)]">{journal.name}</p>
				<p>
					<span class="font-medium">Cite this:</span>
					{citation}
				</p>
				{#if hasDoi}
					<!-- eslint-disable svelte/no-navigation-without-resolve -->
					<a
						href={doiUrl}
						target="_blank"
						rel="noreferrer"
						class="block break-all text-[var(--accent)] hover:underline"
					>
						{doiUrl}
					</a>
				{:else}
					<p>DOI pending assignment</p>
				{/if}
				<p>Published {published}</p>
				<p>Copyright © {new Date(data.article.publishedOn).getFullYear()} {journal.publisher}</p>
				<a
					href={licenseUrl}
					target="_blank"
					rel="noreferrer"
					class="text-[var(--accent)] hover:underline"
				>
					Request reuse permissions
				</a>
				<!-- eslint-enable svelte/no-navigation-without-resolve -->
			</div>
		</section>

		<section class="card p-5">
			<h2 class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">
				Recommended articles
			</h2>
			<ul class="mt-3 space-y-3 text-sm">
				{#each recommendedArticles as article (article.slug)}
					<li>
						<a
							href={resolve(`/articles/${article.slug}`)}
							class="font-medium text-[var(--text-strong)] hover:text-[var(--accent)] hover:underline"
						>
							{article.title}
						</a>
					</li>
				{/each}
			</ul>
		</section>
	</aside>
</article>
