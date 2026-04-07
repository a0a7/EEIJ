<script lang="ts">
	import { resolve } from '$app/paths';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	type NavHref = '/' | '/articles' | '/issues' | '/submit' | '/about' | '/editorial-board';

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'Aim & Scope' },
		{ href: '/submit', label: 'Submission' },
		{ href: '/articles', label: 'Articles' },
		{ href: '/issues', label: 'Archives' },
		{ href: '/editorial-board', label: 'Editorial Board' }
	] satisfies { href: NavHref; label: string }[];
</script>

<header class="site-shell border-b border-[var(--border)]/80">
	<div class="mx-auto w-full max-w-6xl px-6 py-4">
		<div class="flex flex-wrap items-center justify-between gap-3">
			<a href={resolve('/')} class="space-y-1">
				<p class="text-xs tracking-[0.16em] text-[var(--text-muted)]">
					JYSE • ISSN 2319-6378 (Online)
				</p>
				<p class="text-xl font-semibold text-[var(--text-strong)] md:text-2xl">
					Journal of Young Scientists & Engineers
				</p>
				<p class="text-sm text-[var(--text-muted)]">
					For emerging researchers in science and engineering
				</p>
			</a>
			<div class="flex items-center gap-2">
				<a
					href={resolve('/submit')}
					class="focus-ring hidden items-center gap-1 rounded-sm border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--text-default)] hover:border-[var(--accent)] md:inline-flex"
				>
					<svg aria-hidden="true" viewBox="0 0 24 24" class="h-3.5 w-3.5">
						<path
							fill="currentColor"
							d="M12 3a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7H4a1 1 0 1 1 0-2h7V4a1 1 0 0 1 1-1Z"
						/>
					</svg>
					<span>Submit Article</span>
				</a>
				<ThemeToggle />
			</div>
		</div>
		<nav
			aria-label="Primary"
			class="mt-4 grid gap-1 rounded-md border border-[var(--border)]/90 bg-[var(--surface)] p-2 md:grid-cols-6"
		>
			{#each navItems as item (item.href)}
				<a
					href={resolve(item.href)}
					class="rounded-sm px-3 py-2 text-sm font-medium text-[var(--text-default)] transition-colors duration-150 hover:bg-[var(--surface-elevated)] hover:text-[var(--text-strong)]"
				>
					{item.label}
				</a>
			{/each}
		</nav>
	</div>
</header>
