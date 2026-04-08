<script lang="ts">
	import { editorialBoard, journal } from '$lib/data/journal';
</script>

<svelte:head>
	<title>Editorial Board | {journal.shortName}</title>
	<meta name="description" content="Meet the JYSE editorial board and section editors." />
</svelte:head>

<section class="space-y-6">
	<header class="space-y-3">
		<p class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">Governance</p>
		<h1 class="text-4xl font-semibold text-[var(--text-strong)]">Editorial Board</h1>
		<p class="max-w-3xl text-sm leading-7 text-[var(--text-default)]">
			The editorial board manages peer review quality, publication ethics, and long-term journal
			standards.
		</p>
	</header>

	<div class="grid gap-5 md:grid-cols-2">
		{#each editorialBoard as member (member.name)}
			<article class="card space-y-4 p-6">
				<div>
					<h2 class="text-2xl font-semibold text-[var(--text-strong)]">{member.name}</h2>
					<p class="mt-1 text-sm text-[var(--accent)]">{member.role}</p>
					<p class="mt-1 text-sm text-[var(--text-muted)]">{member.affiliation}</p>
				</div>
				<p class="text-sm leading-7 text-[var(--text-default)]">{member.bio}</p>
				<div>
					<p class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">
						Academic interests
					</p>
					<p class="mt-2 text-sm text-[var(--text-default)]">{member.interests.join(' • ')}</p>
				</div>
			</article>
		{/each}
	</div>
</section>
