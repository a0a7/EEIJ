<script lang="ts">
	import IssueCard from '$lib/components/IssueCard.svelte';
	import { issues, journal } from '$lib/data/journal';
</script>

<svelte:head>
	<title>Archives | {journal.shortName}</title>
	<meta name="description" content="Browse JYSE archives by volume and issue." />
</svelte:head>

<section class="space-y-6">
	<div class="space-y-3">
		<p class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">Archive</p>
		<h1 class="text-4xl font-semibold text-[var(--text-strong)]">Journal Archives</h1>
		<p class="max-w-3xl text-sm leading-7 text-[var(--text-default)]">
			Browse published issues by volume and month. Each issue contains peer-reviewed articles in
			science, engineering, and technology.
		</p>
	</div>

	<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
		{#each issues as issue (issue.id)}
			<IssueCard {issue} />
		{/each}
	</div>
</section>
