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
		content="Open-access, peer-reviewed publishing for emerging researchers in science and engineering."
	/>
</svelte:head>

<section class="hero-grid">
	<div class="card p-6 md:p-7">
		<p class="text-xs tracking-[0.16em] text-[var(--text-muted)] uppercase">
			Open access | Peer reviewed | ISSN: {journal.issn}
		</p>
		<h1
			class="mt-3 max-w-4xl text-4xl leading-tight font-semibold text-[var(--text-strong)] md:text-5xl"
		>
			Journal of Young Scientists & Engineers (JYSE)
		</h1>
		<p class="mt-4 max-w-3xl text-base leading-8 text-[var(--text-default)]">
			{journal.description} JYSE is designed for emerging researchers, including high-school and early
			undergraduate authors building strong foundations in scientific writing.
		</p>
		<div class="mt-5 grid max-w-3xl gap-2 text-sm text-[var(--text-muted)] md:grid-cols-2">
			<p class="flex items-center gap-2">
				<svg aria-hidden="true" viewBox="0 0 24 24" class="h-4 w-4">
					<path
						fill="currentColor"
						d="M5 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14V4H5Zm5 2h7v12h-2V8h-5V6Z"
					/>
				</svg>
				<span
					><span class="font-medium text-[var(--text-strong)]">Frequency:</span>
					{journal.frequency}</span
				>
			</p>
			<p class="flex items-center gap-2">
				<svg aria-hidden="true" viewBox="0 0 24 24" class="h-4 w-4">
					<path
						fill="currentColor"
						d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm6.92 9h-2.95a15.91 15.91 0 0 0-1.2-5.09A8.03 8.03 0 0 1 18.92 11Zm-6.92 9a13.7 13.7 0 0 1-2-7 13.7 13.7 0 0 1 2-7 13.7 13.7 0 0 1 2 7 13.7 13.7 0 0 1-2 7Zm-2.77-14.09A15.91 15.91 0 0 0 8.03 11H5.08a8.03 8.03 0 0 1 4.15-5.09ZM5.08 13h2.95a15.91 15.91 0 0 0 1.2 5.09A8.03 8.03 0 0 1 5.08 13Zm9.69 5.09a15.91 15.91 0 0 0 1.2-5.09h2.95a8.03 8.03 0 0 1-4.15 5.09Z"
					/>
				</svg>
				<span
					><span class="font-medium text-[var(--text-strong)]">Website:</span>
					{journal.domain}</span
				>
			</p>
			<p>
				<span class="font-medium text-[var(--text-strong)]">Primary field:</span> Science, Engineering
				and Technology
			</p>
			<p>
				<span class="font-medium text-[var(--text-strong)]">First year:</span>
				{journal.firstYear}
			</p>
		</div>
		<div class="mt-6 flex flex-wrap gap-3">
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

	<aside class="card p-5">
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
	</aside>
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
			Authors may submit manuscripts electronically at any time. Each manuscript undergoes editorial
			screening and double-anonymised peer review. JYSE prioritizes constructive feedback that helps
			emerging researchers improve methodological rigor and publication quality.
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
