<script lang="ts">
	import { journal } from '$lib/data/journal';
</script>

<svelte:head>
	<title>Subscribe | {journal.shortName}</title>
	<meta
		name="description"
		content="Subscribe to JYSE notifications for new issues and publication updates."
	/>
</svelte:head>

<section class="max-w-2xl space-y-6">
	<div class="space-y-2">
		<p class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">Subscribe</p>
		<h1 class="text-3xl font-semibold text-[var(--text-strong)] md:text-4xl">Stay updated</h1>
		<p class="text-sm text-[var(--text-default)]">
			Get notifications when new issues and featured articles are published.
		</p>
	</div>

	<div class="card space-y-4 p-5">
		<p class="text-sm text-[var(--text-default)]">
			To subscribe, send an email request to the editorial office.
		</p>
		<a
			href="mailto:editorial@jyse.org?subject=Subscribe%20to%20JYSE%20updates"
			class="focus-ring inline-flex rounded-sm bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-contrast)]"
		>
			Subscribe by email
		</a>
	</div>
</section>
