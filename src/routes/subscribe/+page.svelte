<script lang="ts">
	import { resolve } from '$app/paths';
	import { journal } from '$lib/data/journal';
</script>

<svelte:head>
	<title>Subscribe | {journal.shortName}</title>
	<meta name="description" content="Choose a JYSE journal subscription plan." />
</svelte:head>

<section class="space-y-6">
	<div class="space-y-2">
		<p class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">Subscribe</p>
		<h1 class="text-3xl font-semibold text-[var(--text-strong)] md:text-4xl">
			Journal subscriptions
		</h1>
		<p class="text-sm text-[var(--text-default)]">
			Select a subscription tier for online and institutional journal access.
		</p>
	</div>

	<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
		<article class="card flex flex-col gap-3 p-5">
			<h2 class="text-base font-semibold text-[var(--text-strong)]">Student</h2>
			<p class="text-2xl font-semibold text-[var(--text-strong)]">$29 / year</p>
			<p class="text-sm text-[var(--text-default)]">Online archive access and issue alerts.</p>
			<a
				href={resolve('/redirect-stripe?q=30ajvbn330c')}
				class="focus-ring mt-auto inline-flex justify-center rounded-sm bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-contrast)]"
			>
				Choose student
			</a>
		</article>
		<article class="card flex flex-col gap-3 p-5">
			<h2 class="text-base font-semibold text-[var(--text-strong)]">Individual</h2>
			<p class="text-2xl font-semibold text-[var(--text-strong)]">$79 / year</p>
			<p class="text-sm text-[var(--text-default)]">Digital access plus quarterly highlights.</p>
			<a
				href={resolve('/redirect-stripe?q=30ajvbn330c')}
				class="focus-ring mt-auto inline-flex justify-center rounded-sm bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-contrast)]"
			>
				Choose individual
			</a>
		</article>
		<article class="card flex flex-col gap-3 p-5">
			<h2 class="text-base font-semibold text-[var(--text-strong)]">Institutional</h2>
			<p class="text-2xl font-semibold text-[var(--text-strong)]">$299 / year</p>
			<p class="text-sm text-[var(--text-default)]">Campus-wide online access and support.</p>
			<a
				href={resolve('/redirect-stripe?q=30ajvbn330c')}
				class="focus-ring mt-auto inline-flex justify-center rounded-sm bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-contrast)]"
			>
				Choose institutional
			</a>
		</article>
		<article class="card flex flex-col gap-3 p-5">
			<h2 class="text-base font-semibold text-[var(--text-strong)]">Print + Online</h2>
			<p class="text-2xl font-semibold text-[var(--text-strong)]">$199 / year</p>
			<p class="text-sm text-[var(--text-default)]">All digital benefits plus print delivery.</p>
			<a
				href={resolve('/redirect-stripe?q=30ajvbn330c')}
				class="focus-ring mt-auto inline-flex justify-center rounded-sm bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-contrast)]"
			>
				Choose print + online
			</a>
		</article>
	</div>

	<div class="card p-5">
		<h2 class="text-base font-semibold text-[var(--text-strong)]">What’s included</h2>
		<ul class="mt-3 space-y-2 text-sm text-[var(--text-default)]">
			<li>• Full access to current and archived journal issues</li>
			<li>• Citation export and downloadable PDF articles</li>
			<li>• Renewal reminders and account management support</li>
			<li>• Institutional tiers include multi-user access rights</li>
		</ul>
	</div>
</section>
