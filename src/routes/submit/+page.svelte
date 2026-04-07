<script lang="ts">
	import { journal, reviewProcess, submissionRequirements } from '$lib/data/journal';

	let submitted = $state(false);

	const handleSubmit = (event: SubmitEvent) => {
		event.preventDefault();
		submitted = true;
	};
</script>

<svelte:head>
	<title>Submit Your Research | {journal.shortName}</title>
	<meta
		name="description"
		content="Submission guidelines and manuscript intake form for EEIJ authors."
	/>
</svelte:head>

<section class="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
	<div class="space-y-8">
		<div class="space-y-3">
			<p class="text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase">Contribute</p>
			<h1 class="font-serif text-4xl text-[var(--text-strong)]">Submit Your Research</h1>
			<p class="text-sm leading-7 text-[var(--text-default)]">
				EEIJ accepts technically rigorous manuscripts from high school and undergraduate researchers
				working with qualified mentors.
			</p>
		</div>
		<div class="card p-6">
			<h2 class="font-serif text-2xl text-[var(--text-strong)]">Submission requirements</h2>
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
			<h2 class="font-serif text-2xl text-[var(--text-strong)]">Review process</h2>
			<ol class="mt-4 space-y-3 text-sm leading-7 text-[var(--text-default)]">
				{#each reviewProcess as step (step)}
					<li>{step}</li>
				{/each}
			</ol>
		</div>
	</div>

	<form class="card space-y-5 p-6" onsubmit={handleSubmit}>
		<h2 class="font-serif text-2xl text-[var(--text-strong)]">Manuscript intake</h2>
		<p class="text-sm leading-7 text-[var(--text-muted)]">
			This form is a front-end demo and does not submit to a backend service.
		</p>
		<label class="block text-sm text-[var(--text-default)]">
			Lead student author
			<input
				required
				class="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-2"
				placeholder="Full name"
			/>
		</label>
		<label class="block text-sm text-[var(--text-default)]">
			Email
			<input
				type="email"
				required
				class="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-2"
				placeholder="name@school.edu"
			/>
		</label>
		<label class="block text-sm text-[var(--text-default)]">
			Institution
			<input
				required
				class="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-2"
				placeholder="School or university"
			/>
		</label>
		<label class="block text-sm text-[var(--text-default)]">
			Mentor name and affiliation
			<input
				required
				class="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-2"
				placeholder="Dr. First Last, Department"
			/>
		</label>
		<label class="block text-sm text-[var(--text-default)]">
			Paper title
			<input
				required
				class="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-2"
				placeholder="Working manuscript title"
			/>
		</label>
		<label class="block text-sm text-[var(--text-default)]">
			Abstract (150-250 words)
			<textarea
				required
				rows="5"
				class="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-2"
				placeholder="Summarize your methods, key results, and contribution."
			></textarea>
		</label>
		<label class="flex items-start gap-2 text-sm text-[var(--text-default)]">
			<input type="checkbox" required class="mt-1" />
			<span
				>I confirm this submission includes mentor oversight and original work by the listed student
				author(s).</span
			>
		</label>
		<button
			type="submit"
			class="focus-ring rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-medium text-[var(--accent-contrast)]"
			>Submit manuscript package</button
		>
		{#if submitted}
			<p
				class="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm text-[var(--text-default)]"
			>
				Submission draft recorded locally. Our editorial office will contact you at {journal.email} once
				backend intake is enabled.
			</p>
		{/if}
	</form>
</section>
