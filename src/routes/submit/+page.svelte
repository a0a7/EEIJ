<script lang="ts">
	import { journal, reviewProcess, submissionRequirements } from '$lib/data/journal';

	let submitted = $state(false);

	const handleSubmit = (event: SubmitEvent) => {
		event.preventDefault();
		submitted = true;
	};
</script>

<svelte:head>
	<title>Guidelines for Authors | {journal.shortName}</title>
	<meta
		name="description"
		content="Submission system, author guidelines, and review process for JYSE."
	/>
</svelte:head>

<section class="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
	<div class="space-y-8">
		<div class="space-y-3">
			<p class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">
				Article Submission System
			</p>
			<h1 class="text-4xl font-semibold text-[var(--text-strong)]">Guidelines for Authors</h1>
			<p class="text-sm leading-7 text-[var(--text-default)]">
				Authors can electronically submit articles anytime. Manuscripts should present clear,
				reproducible contributions suitable for emerging researchers and early-career authors.
			</p>
		</div>
		<div class="card p-6">
			<h2 class="text-2xl font-semibold text-[var(--text-strong)]">Submission requirements</h2>
			<ul class="mt-4 space-y-3 text-sm leading-7 text-[var(--text-default)]">
				{#each submissionRequirements as requirement (requirement)}
					<li class="flex gap-3">
						<span class="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]"></span><span
							>{requirement}</span
						>
					</li>
				{/each}
			</ul>
		</div>
		<div class="card p-6">
			<h2 class="text-2xl font-semibold text-[var(--text-strong)]">Review process</h2>
			<ol class="mt-4 space-y-3 text-sm leading-7 text-[var(--text-default)]">
				{#each reviewProcess as step (step)}
					<li>{step}</li>
				{/each}
			</ol>
		</div>
	</div>

	<form class="card space-y-5 p-6" onsubmit={handleSubmit}>
		<h2 class="text-2xl font-semibold text-[var(--text-strong)]">Manuscript intake</h2>
		<label class="block text-sm text-[var(--text-default)]">
			Corresponding author
			<input
				required
				class="mt-2 w-full rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-2"
				placeholder="Full name"
			/>
		</label>
		<label class="block text-sm text-[var(--text-default)]">
			Email
			<input
				type="email"
				required
				class="mt-2 w-full rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-2"
				placeholder="name@institute.edu"
			/>
		</label>
		<label class="block text-sm text-[var(--text-default)]">
			Institution
			<input
				required
				class="mt-2 w-full rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-2"
				placeholder="School or university"
			/>
		</label>
		<label class="block text-sm text-[var(--text-default)]">
			Article title
			<input
				required
				class="mt-2 w-full rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-2"
				placeholder="Manuscript title"
			/>
		</label>
		<label class="block text-sm text-[var(--text-default)]">
			Abstract
			<textarea
				required
				rows="5"
				class="mt-2 w-full rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-2"
				placeholder="Summarize problem, methods, key findings, and contribution."
			></textarea>
		</label>
		<label class="block text-sm text-[var(--text-default)]">
			Upload manuscript (PDF)
			<input
				type="file"
				accept=".pdf"
				required
				class="mt-2 w-full rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-2"
			/>
		</label>
		<label class="flex items-start gap-2 text-sm text-[var(--text-default)]">
			<input type="checkbox" required class="mt-1" />
			<span
				>I confirm this work is original, not under review elsewhere, and complies with journal
				policies.</span
			>
		</label>
		<button
			type="submit"
			class="focus-ring rounded-sm bg-[var(--accent)] px-5 py-2 text-sm font-medium text-[var(--accent-contrast)]"
		>
			Submit manuscript package
		</button>
		{#if submitted}
			<p
				class="rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm text-[var(--text-default)]"
			>
				Submission received successfully. Your manuscript is now in editorial screening, and a
				confirmation email with tracking details has been sent to the corresponding author.
			</p>
		{/if}
	</form>
</section>
