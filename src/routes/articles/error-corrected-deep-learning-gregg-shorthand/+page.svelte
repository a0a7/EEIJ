<script lang="ts">
	import { resolve } from '$app/paths';
	import TagPill from '$lib/components/TagPill.svelte';
	import { articles, journal } from '$lib/data/journal';
	import type { Author } from '$lib/data/journal';
	import type { PageData } from './$types';
	import pdfAsset from '$lib/assets/error-corrected-deep-learning-gregg-shorthand.pdf';

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
		`${data.article.authors.map((author: Author) => author.name).join(', ')} (${new Date(data.article.publishedOn).getFullYear()}). ${data.article.title}. ${journal.name}, ${data.issue.volume}(${data.issue.number}). `
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
		<header class="space-y-0">
			<p class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">
				Volume {data.issue.volume}, Issue {data.issue.number} • {published}
			</p>
						<p
				class="inline-flex flex-wrap items-center gap-2 text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase"
			>
				<span>Open access • CC BY-NC-SA 4.0 • doi:10.31224/4661</span>
			</p>
			<div class="flex flex-wrap gap-2 pt-3 pb-1">
				{#each data.article.tags as tag (tag)}
					<TagPill {tag} />
				{/each}
			</div>
			
			<h1 class="text-4xl pb-6 leading-tight font-semibold text-[var(--text-strong)] md:text-5xl">
				{data.article.title}
			</h1>
			<p class="text-sm leading-4 text-[var(--text-default)]">
				{#each data.article.authors as author, i (author.name)}
					<span class="font-medium text-[var(--text-strong)]">{author.name}</span>
					<span class="ml-1 inline">({author.role})</span>
					<a
						href="https://orcid.org/0009-0008-5679-3042"
						target="_blank"
						rel="noreferrer"
						class="ml-1 -translate-y-10 text-xs text-[var(--accent)]"
						><br />
						<svg
							class="inline-block"
							wixmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							version="1.1"
							id="Layer_1"
							x="0px"
							y="0px"
							viewBox="0 0 256 256"
							style="enable-background:new 0 0 256 256; width: 14px; height: 14px"
							xml:space="preserve"
						>
							<style type="text/css">
								.st0 {
									fill: #a6ce39;
								}
								.st1 {
									fill: #ffffff;
								}
							</style>
							<path
								class="st0"
								d="M256,128c0,70.7-57.3,128-128,128C57.3,256,0,198.7,0,128C0,57.3,57.3,0,128,0C198.7,0,256,57.3,256,128z"
							/>
							<g>
								<path class="st1" d="M86.3,186.2H70.9V79.1h15.4v48.4V186.2z" />
								<path
									class="st1"
									d="M108.9,79.1h41.6c39.6,0,57,28.3,57,53.6c0,27.5-21.5,53.6-56.8,53.6h-41.8V79.1z M124.3,172.4h24.5   c34.9,0,42.9-26.5,42.9-39.7c0-21.5-13.7-39.7-43.7-39.7h-23.7V172.4z"
								/>
								<path
									class="st1"
									d="M88.7,56.8c0,5.5-4.5,10.1-10.1,10.1c-5.6,0-10.1-4.6-10.1-10.1c0-5.6,4.5-10.1,10.1-10.1   C84.2,46.7,88.7,51.3,88.7,56.8z"
								/>
							</g>
						</svg>
						<p class="inline-block">https://orcid.org/0009-0008-5679-3042</p>
					</a>
					<!-- eslint-enable svelte/no-navigation-without-resolve -->{i <
					data.article.authors.length - 1
						? '; '
						: ''}
				{/each}
			</p>

		</header>

		<section id="abstract" class="space-y-3">
			<h2 class="text-2xl font-semibold text-[var(--text-strong)]">Abstract</h2>
			<p class="text-base leading-8 text-[var(--text-default)]">{data.article.abstract}</p>
		</section>

		<section id="pdf-viewer" class="space-y-3">
			<div
				class="scrollbar-hide h-[800px] w-full overflow-hidden rounded-md border border-[var(--border)] bg-[#2b2b2b]"
			>
				<object
					data="{pdfAsset}#navpanes=0&view=FitH"
					type="application/pdf"
					title="Article PDF"
					class="scrollbar-hide h-full w-full"
				>
					<p class="p-8 text-center text-[var(--text-default)]">
						Unable to display PDF file. <a
							href={pdfAsset}
							class="text-[var(--accent)] hover:underline"
							target="_blank"
							rel="noopener noreferrer">Download</a
						> instead.
					</p>
				</object>
			</div>
		</section>

		<section id="access" class="grid gap-5 md:grid-cols-[1.4fr_1fr]">
			<div class="card p-4">
				<h2 class="text-2xl font-semibold text-[var(--text-strong)]">Citation</h2>
				<p class="mt-3 text-sm leading-7 text-[var(--text-default)]">{citation}</p>
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
						<span class="text-[var(--text-muted)]">doi:10.31224/4661</span>
					{/if}
					<!-- eslint-disable svelte/no-navigation-without-resolve -->
					<a
						href="https://zenodo.org/records/19465507"
						target="_blank"
						rel="noreferrer"
						class="text-[var(--accent)] hover:underline">Zenodo</a
					>
					<!-- eslint-enable svelte/no-navigation-without-resolve -->
				</div>
			</div>
			<div class="card p-4">
				<h2 class="text-2xl font-semibold text-[var(--text-strong)]">Access</h2>
				<p class="mt-3 text-sm leading-7 text-[var(--text-default)]">
					This article is available with open access and permanent identifier links for citation.
				</p>
				<div class="mt-4 flex flex-wrap gap-1">
					<a
						href={pdfAsset}
						download
						target="_blank"
						rel="noreferrer"
						class="focus-ring inline-block inline-flex rounded-sm border border-[var(--border)] px-2 py-1 text-sm text-[var(--text-default)] hover:border-[var(--accent)]"
					>
						Download PDF
					</a>
					<a
						href="https://huggingface.co/a0a7/gregg-recognition"
						target="_blank"
						rel="noreferrer"
						class="focus-ring inline-block inline-flex rounded-sm border border-[var(--border)] px-2 py-1 text-sm text-[var(--text-default)] hover:border-[var(--accent)]"
					>
						Supporting Repository
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
				{:else}{/if}
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
