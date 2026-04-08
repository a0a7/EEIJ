<script lang="ts">
	import { journal, reviewProcess } from '$lib/data/journal';
</script>

<svelte:head>
	<title>Aim and Scope | {journal.shortName}</title>
	<meta name="description" content="Aim, scope, policies, and publication details for JYSE." />
</svelte:head>

<section class="space-y-8">
	<header class="space-y-3">
		<p class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">About JYSE</p>
		<h1 class="text-4xl font-semibold text-[var(--text-strong)]">Aim and Scope</h1>
		<p class="max-w-3xl text-sm leading-7 text-[var(--text-default)]">
			The Journal of Young Scientists & Engineers (JYSE) aims to circulate high-quality,
			peer-reviewed original articles in science, engineering, and technology with clear practical
			or methodological contribution.
		</p>
	</header>

	<div class="grid gap-6 lg:grid-cols-2">
		<section class="card p-6">
			<h2 class="text-2xl font-semibold text-[var(--text-strong)]">Subject areas</h2>
			<p class="mt-4 text-sm leading-7 text-[var(--text-default)]">
				Aerospace Engineering, Agricultural Engineering, Biomedical Engineering, Chemical
				Engineering, Civil Engineering, Computer Science, Electrical Engineering, Environmental
				Engineering, Industrial Engineering, Materials Engineering, Mechanical Engineering, Nuclear
				Engineering, and Software Engineering.
			</p>
		</section>
		<section class="card p-6">
			<h2 class="text-2xl font-semibold text-[var(--text-strong)]">Journal details</h2>
			<ul class="mt-4 space-y-2 text-sm leading-7 text-[var(--text-default)]">
				<li><span class="font-medium">Website:</span> www.jyse.org</li>
				<li><span class="font-medium">ISSN:</span> 2319-6378 (Online)</li>
				<li><span class="font-medium">Frequency:</span> 12 issues per year (monthly)</li>
				<li><span class="font-medium">Publication language:</span> English</li>
				<li><span class="font-medium">Open access:</span> Yes</li>
			</ul>
		</section>
	</div>

	<section class="card p-6">
		<h2 class="text-2xl font-semibold text-[var(--text-strong)]">
			Editorial and publishing workflow
		</h2>
		<ul class="mt-4 grid gap-3 text-sm leading-7 text-[var(--text-default)]">
			{#each reviewProcess as step (step)}
				<li>{step}</li>
			{/each}
		</ul>
	</section>
</section>
