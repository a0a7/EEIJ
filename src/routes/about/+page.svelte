<script lang="ts">
	import { journal, reviewProcess } from '$lib/data/journal';
</script>

<svelte:head>
	<title>About | {journal.shortName}</title>
	<meta name="description" content="Learn about EEIJ mission, scope, and editorial standards." />
</svelte:head>

<section class="space-y-8">
	<header class="space-y-3">
		<p class="text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase">About EEIJ</p>
		<h1 class="font-serif text-4xl text-[var(--text-strong)]">Mission and Editorial Scope</h1>
		<p class="max-w-3xl text-sm leading-7 text-[var(--text-default)]">{journal.description}</p>
	</header>

	<div class="grid gap-6 lg:grid-cols-2">
		<section class="card p-6">
			<h2 class="font-serif text-2xl text-[var(--text-strong)]">Who this journal serves</h2>
			<p class="mt-4 text-sm leading-7 text-[var(--text-default)]">
				EEIJ is designed for high school and undergraduate researchers conducting mentored projects
				in engineering, applied science, and computational design. Our audience includes student
				investigators, faculty mentors, and educators seeking high-quality exemplars of early-stage
				research.
			</p>
		</section>
		<section class="card p-6">
			<h2 class="font-serif text-2xl text-[var(--text-strong)]">Editorial standards</h2>
			<p class="mt-4 text-sm leading-7 text-[var(--text-default)]">
				Accepted manuscripts must demonstrate methodological transparency, credible analysis, and
				responsible reporting of limitations. We encourage open data and reproducible workflows
				wherever possible.
			</p>
		</section>
	</div>

	<section class="card p-6">
		<h2 class="font-serif text-2xl text-[var(--text-strong)]">Review process overview</h2>
		<ul class="mt-4 grid gap-3 text-sm leading-7 text-[var(--text-default)]">
			{#each reviewProcess as step (step)}
				<li>{step}</li>
			{/each}
		</ul>
	</section>
</section>
