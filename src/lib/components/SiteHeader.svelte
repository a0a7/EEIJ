<script lang="ts">
	import { resolve } from '$app/paths';

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
	<div class="container-shell py-4">
		<div class="flex flex-wrap items-start justify-between gap-3">
			<a href={resolve('/')} class="space-y-1">
				<p class="text-xs tracking-[0.16em] text-[var(--text-muted)]">
					JYSE • ISSN 2319-6378 (Online)
				</p>
				<p class="text-lg font-semibold text-[var(--text-strong)] md:text-2xl">
					Journal of Young Scientists & Engineers
				</p>
			</a>
			<div class="flex items-center gap-4">
				<button
					type="button"
					class="focus-ring text-sm font-medium text-[var(--text-default)] transition-colors duration-150 hover:text-[var(--text-strong)]"
				>
					Search
				</button>
				<button
					type="button"
					class="focus-ring text-sm font-medium text-[var(--text-default)] transition-colors duration-150 hover:text-[var(--text-strong)]"
				>
					Log in
				</button>
			</div>
		</div>
		<nav aria-label="Primary" class="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
			{#each navItems as item (item.href)}
				<a
					href={resolve(item.href)}
					class="text-sm font-medium text-[var(--text-default)] transition-colors duration-150 hover:text-[var(--text-strong)]"
				>
					{item.label}
				</a>
			{/each}
		</nav>
	</div>
</header>
