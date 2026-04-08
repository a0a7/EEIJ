<script lang="ts">
	import { resolve } from '$app/paths';
	import { tick } from 'svelte';

	type NavHref = '/' | '/articles' | '/issues' | '/submit' | '/about' | '/editorial-board';

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'Aim & Scope' },
		{ href: '/submit', label: 'Submission' },
		{ href: '/articles', label: 'Articles' },
		{ href: '/issues', label: 'Archives' },
		{ href: '/editorial-board', label: 'Editorial Board' }
	] satisfies { href: NavHref; label: string }[];

	let showSearch = $state(false);
	let searchInput = $state<HTMLInputElement | null>(null);

	const openSearch = async () => {
		showSearch = true;
		await tick();
		searchInput?.focus();
	};
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
					onclick={openSearch}
					class="focus-ring text-sm font-medium text-[var(--text-default)] transition-colors duration-150 hover:text-[var(--text-strong)]"
				>
					Search
				</button>
				<a
					href={resolve('/subscribe')}
					class="focus-ring text-sm font-medium text-[var(--text-default)] transition-colors duration-150 hover:text-[var(--text-strong)]"
				>
					Subscribe
				</a>
				<a
					href={resolve('/login')}
					class="focus-ring text-sm font-medium text-[var(--text-default)] transition-colors duration-150 hover:text-[var(--text-strong)]"
				>
					Log in
				</a>
			</div>
		</div>
		{#if showSearch}
			<form action={resolve('/search')} method="get" class="mt-4 flex max-w-xl items-center gap-2">
				<label for="header-search" class="sr-only">Search articles</label>
				<input
					bind:this={searchInput}
					id="header-search"
					name="q"
					type="search"
					required
					placeholder="Search articles..."
					class="focus-ring w-full rounded-sm border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text-default)]"
				/>
				<button
					type="submit"
					class="focus-ring rounded-sm bg-[var(--accent)] px-3 py-2 text-sm font-medium text-[var(--accent-contrast)]"
				>
					Go
				</button>
			</form>
		{/if}
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
