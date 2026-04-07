<script lang="ts">
	import { resolve } from '$app/paths';
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import IssueCard from '$lib/components/IssueCard.svelte';
	import { articles, issues, journal } from '$lib/data/journal';

	const featuredArticles = articles.slice(0, 3);
	const recentIssues = issues.slice(0, 2);
</script>

<svelte:head>
	<title>Home | {journal.shortName}</title>
	<meta
		name="description"
		content="Explore mentored engineering research from high school and undergraduate investigators."
	/>
</svelte:head>

<section class="hero-grid">
	<div class="space-y-6">
		<p class="text-xs tracking-[0.24em] text-[var(--text-muted)] uppercase">
			Peer-reviewed student research journal
		</p>
		<h1 class="max-w-3xl font-serif text-4xl leading-tight text-[var(--text-strong)] md:text-6xl">
			The Emerging Engineering Investigators Journal
		</h1>
		<p class="max-w-2xl text-lg leading-8 text-[var(--text-muted)]">{journal.tagline}</p>
		<div class="flex flex-wrap gap-3">
			<a
				href={resolve('/articles')}
				class="focus-ring rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--accent-contrast)]"
				>Read current research</a
			>
			<a
				href={resolve('/submit')}
				class="focus-ring rounded-full border border-[var(--border)] px-6 py-3 text-sm text-[var(--text-default)]"
				>Submit your manuscript</a
			>
		</div>
	</div>
	<div class="card p-6">
		<p class="text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase">About the journal</p>
		<p class="mt-4 text-sm leading-7 text-[var(--text-default)]">
			EEIJ publishes mentored STEM investigations by high school and undergraduate teams. We
			prioritize methodological clarity, responsible experimentation, and practical engineering
			impact.
		</p>
		<a
			href={resolve('/about')}
			class="mt-6 inline-flex text-sm font-medium text-[var(--accent)] hover:underline"
			>Learn about our mission</a
		>
	</div>
</section>

<section class="mt-16">
	<div class="mb-6 flex items-end justify-between gap-4">
		<div>
			<p class="text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase">Featured papers</p>
			<h2 class="mt-2 font-serif text-3xl text-[var(--text-strong)]">From the latest issue</h2>
		</div>
		<a href={resolve('/articles')} class="text-sm text-[var(--accent)] hover:underline"
			>View all publications</a
		>
	</div>
	<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
		{#each featuredArticles as article (article.slug)}
			<ArticleCard {article} />
		{/each}
	</div>
</section>

<section class="mt-16 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
	<div class="card p-6">
		<p class="text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase">Call for submissions</p>
		<h2 class="mt-3 font-serif text-3xl text-[var(--text-strong)]">
			Publish your mentored research
		</h2>
		<p class="mt-4 max-w-xl text-sm leading-7 text-[var(--text-default)]">
			We welcome technically rigorous studies in robotics, AI, bioengineering, circuits, sustainable
			infrastructure, and adjacent fields. Student-first authorship and mentor co-supervision are
			required.
		</p>
		<a
			href={resolve('/submit')}
			class="focus-ring mt-6 inline-flex rounded-full border border-[var(--border)] px-5 py-2 text-sm text-[var(--text-default)] hover:border-[var(--accent)]"
			>Review submission guidelines</a
		>
	</div>
	<div class="space-y-5">
		<p class="text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase">Recent issues</p>
		{#each recentIssues as issue (issue.id)}
			<IssueCard {issue} />
		{/each}
	</div>
</section>
