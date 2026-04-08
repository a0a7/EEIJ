<script lang="ts">
	import { resolve } from '$app/paths';
	import { journal } from '$lib/data/journal';
</script>

<svelte:head>
	<title>Log in | {journal.shortName}</title>
	<meta name="description" content="Access author and editorial workflows for JYSE." />
</svelte:head>

<section class="max-w-2xl space-y-6">
	<div class="space-y-2">
		<p class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">Log in</p>
		<h1 class="text-3xl font-semibold text-[var(--text-strong)] md:text-4xl">Author access</h1>
		<p class="text-sm text-[var(--text-default)]">
			Use the submission system to submit a manuscript and track editorial progress.
		</p>
	</div>

	<div class="card space-y-4 p-5">
		<p class="text-sm text-[var(--text-default)]">
			Submission and account access are handled through the author portal.
		</p>
		<a
			href={resolve('/submit')}
			class="focus-ring inline-flex rounded-sm bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-contrast)]"
		>
			Go to author portal
		</a>
	</div>
</section>
