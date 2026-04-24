<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { browser } from '$app/environment';
	import { resolve } from '$app/paths';

	const STORAGE_KEY = 'cookie-consent';

	let visible = $state(false);

	if (browser) {
		const stored = localStorage.getItem(STORAGE_KEY);
		visible = stored === null;
	}

	function accept() {
		localStorage.setItem(STORAGE_KEY, 'accepted');
		visible = false;
	}

	function decline() {
		localStorage.setItem(STORAGE_KEY, 'declined');
		visible = false;
	}
</script>

{#if visible}
	<div
		role="dialog"
		aria-label="Cookie consent"
		aria-live="polite"
		class="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 pb-4"
		in:fly={{ y: 80, duration: 320 }}
		out:fade={{ duration: 200 }}
	>
		<div
			class="card flex w-full max-w-2xl flex-col gap-4 p-5 shadow-2xl sm:flex-row sm:items-center sm:gap-6"
		>
			<div class="flex-1 space-y-1">
				<p class="text-sm font-semibold text-[var(--text-strong)]">🍪 This site uses cookies</p>
				<p class="text-sm text-[var(--text-muted)]">
					We use cookies to analyze traffic and improve your experience. You can accept or decline
					non-essential cookies below. See our
					<a
						href={resolve('/about')}
						class="underline underline-offset-2 hover:text-[var(--accent)] focus-ring"
					>privacy policy</a> for details.
				</p>
			</div>
			<div class="flex shrink-0 gap-2">
				<button
					onclick={decline}
					class="focus-ring rounded-md border border-[var(--border)] bg-transparent px-4 py-2 text-sm font-medium text-[var(--text-default)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
				>
					Decline
				</button>
				<button
					onclick={accept}
					class="focus-ring rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent-contrast)] transition-opacity hover:opacity-90"
				>
					Accept cookies
				</button>
			</div>
		</div>
	</div>
{/if}
