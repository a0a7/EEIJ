<script lang="ts">
	import IssueCard from '$lib/components/IssueCard.svelte';
	import { issues, journal } from '$lib/data/journal';
</script>

<svelte:head>
	<title>Issues | {journal.shortName}</title>
	<meta name="description" content="Browse EEIJ issues by volume and publication cycle." />
</svelte:head>

<section class="space-y-6">
	<div class="space-y-3">
		<p class="text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase">Archive</p>
		<h1 class="font-serif text-4xl text-[var(--text-strong)]">Journal Issues</h1>
		<p class="max-w-3xl text-sm leading-7 text-[var(--text-default)]">
			EEIJ issues are organized by volume and release cycle, with each issue featuring mentored
			student papers selected through technical peer review.
		</p>
	</div>

	<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
		{#each issues as issue (issue.id)}
			<IssueCard {issue} />
		{/each}
	</div>
</section>
