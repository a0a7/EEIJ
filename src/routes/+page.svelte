<script lang="ts">
	import { resolve } from '$app/paths';
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import IssueCard from '$lib/components/IssueCard.svelte';
	import { articles, importantDates, issues, journal } from '$lib/data/journal';

	const featuredArticles = articles.slice(0, 3);
	const recentIssues = issues.slice(0, 2);
</script>

<svelte:head>
	<title>Home | {journal.shortName}</title>
	<meta
		name="description"
		content="Open-access, peer-reviewed science and engineering publishing at Journal of Young Scientists & Engineers."
	/>
</svelte:head>

<section class="hero-grid">
	<div class="space-y-5">
		<p class="text-xs tracking-[0.16em] text-[var(--text-muted)] uppercase">
			Open access | Peer reviewed | ISSN: {journal.issn}
		</p>
		<h1
			class="max-w-4xl text-4xl leading-tight font-semibold text-[var(--text-strong)] md:text-5xl"
		>
			Journal of Young Scientists & Engineers (JYSE)
		</h1>
		<p class="max-w-3xl text-base leading-8 text-[var(--text-default)]">
			{journal.description}
		</p>
		<div class="grid max-w-3xl gap-2 text-sm text-[var(--text-muted)] md:grid-cols-2">
			<p>
				<span class="font-medium text-[var(--text-strong)]">Publishing frequency:</span>
				{journal.frequency}
			</p>
			<p><span class="font-medium text-[var(--text-strong)]">Website:</span> {journal.domain}</p>
			<p>
				<span class="font-medium text-[var(--text-strong)]">Primary field:</span> Science, Engineering
				and Technology
			</p>
			<p>
				<span class="font-medium text-[var(--text-strong)]">First year:</span>
				{journal.firstYear}
			</p>
		</div>
		<div class="flex flex-wrap gap-3">
			<a
				href={resolve('/submit')}
				class="focus-ring rounded-sm bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--accent-contrast)]"
				>Article Submission System</a
			>
			<a
				href={resolve('/about')}
				class="focus-ring rounded-sm border border-[var(--border)] px-5 py-2.5 text-sm text-[var(--text-default)]"
				>Aim and Scope</a
			>
		</div>
	</div>
	<div class="card p-5">
		<p class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">Important dates</p>
		<p class="mt-3 text-sm text-[var(--text-default)]">
			Articles submission open for <span class="font-medium text-[var(--text-strong)]"
				>{importantDates.window}</span
			>
		</p>
		<ul class="mt-4 space-y-2 text-sm text-[var(--text-default)]">
			<li>
				<span class="font-medium text-[var(--text-strong)]">Last date of article submission:</span>
				{importantDates.submissionDeadline}
			</li>
			<li>
				<span class="font-medium text-[var(--text-strong)]">Date of notification:</span>
				{importantDates.notificationDate}
			</li>
			<li>
				<span class="font-medium text-[var(--text-strong)]">Date of publication:</span>
				{importantDates.publicationDate}
			</li>
		</ul>
	</div>
</section>

<section class="mt-14">
	<div class="mb-5 flex items-end justify-between gap-4">
		<div>
			<p class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">
				Latest publications
			</p>
			<h2 class="mt-2 text-2xl font-semibold text-[var(--text-strong)]">From the current issue</h2>
		</div>
		<a href={resolve('/articles')} class="text-sm text-[var(--accent)] hover:underline"
			>View all articles</a
		>
	</div>
	<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
		{#each featuredArticles as article (article.slug)}
			<ArticleCard {article} />
		{/each}
	</div>
</section>

<section class="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
	<div class="card p-5">
		<p class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">
			Article Submission System
		</p>
		<h2 class="mt-3 text-2xl font-semibold text-[var(--text-strong)]">Submit anytime</h2>
		<p class="mt-3 max-w-xl text-sm leading-7 text-[var(--text-default)]">
			Authors may submit manuscripts electronically at any time. All submissions must be original,
			within scope, and publication-ready. Each manuscript undergoes rigorous double-anonymised peer
			review, and editors may decline papers that do not meet originality or quality standards.
		</p>
		<a
			href={resolve('/submit')}
			class="focus-ring mt-5 inline-flex rounded-sm border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-default)] hover:border-[var(--accent)]"
			>Review author guidelines</a
		>
	</div>
	<div class="space-y-5">
		<p class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">Recent issues</p>
		{#each recentIssues as issue (issue.id)}
			<IssueCard {issue} />
		{/each}
	</div>
</section>
