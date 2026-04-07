<script lang="ts">
	import { resolve } from '$app/paths';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	type NavHref = '/' | '/articles' | '/issues' | '/submit' | '/about' | '/editorial-board';

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'Aim & Scope' },
		{ href: '/submit', label: 'Guidelines' },
		{ href: '/articles', label: 'Articles' },
		{ href: '/issues', label: 'Archives' },
		{ href: '/editorial-board', label: 'Editorial Board' }
	] satisfies { href: NavHref; label: string }[];
</script>

<header class="site-shell border-b border-[var(--border)]/80">
	<div class="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
		<a href={resolve('/')} class="space-y-1">
			<p class="text-xs tracking-[0.16em] text-[var(--text-muted)]">JYSE • ISSN 2319-6378</p>
			<p class="text-lg font-semibold text-[var(--text-strong)] md:text-xl">
				Journal of Young Scientists & Engineers
			</p>
		</a>
		<div class="flex flex-wrap items-center gap-3 md:gap-4">
			<nav aria-label="Primary" class="flex flex-wrap items-center gap-1 md:gap-2">
				{#each navItems as item (item.href)}
					<a
						href={resolve(item.href)}
						class="rounded-sm px-2.5 py-1.5 text-sm text-[var(--text-default)] transition-colors duration-150 hover:bg-[var(--surface-elevated)] hover:text-[var(--text-strong)]"
					>
						{item.label}
					</a>
				{/each}
			</nav>
			<ThemeToggle />
		</div>
	</div>
</header>
