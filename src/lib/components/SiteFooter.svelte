<script lang="ts">
	import { resolve } from '$app/paths';
	import footerLogo from '$lib/assets/images/footer-logo-square.svg';
</script>

<footer class="site-shell mt-16 border-t border-[var(--border)]">
	<div
		class="container-shell grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]"
	>
		<div class="space-y-2">
			<img
				src={footerLogo}
				alt="Placeholder square logo"
				class="h-20 w-20 border border-[var(--border)]"
			/>
			<h2 class="text-lg font-semibold text-[var(--text-strong)]">
				Journal of Young Scientists & Engineers
			</h2>
			<p class="max-w-xl text-sm text-[var(--text-muted)]">
				Open-access, peer-reviewed publishing for emerging science and engineering research.
			</p>
			<p class="text-xs break-words text-[var(--text-muted)]">
				www.jyse.org • ISSN: 2319-6378 (Online)
			</p>
		</div>
		<div class="min-w-0">
			<h3 class="text-sm font-semibold tracking-[0.1em] text-[var(--text-muted)] uppercase">
				Journal
			</h3>
			<ul class="mt-3 space-y-2 text-sm text-[var(--text-default)]">
				<li>
					<a href={resolve('/about')} class="hover:text-[var(--text-strong)]">Aim and Scope</a>
				</li>
				<li>
					<a href={resolve('/submit')} class="hover:text-[var(--text-strong)]"
						>Guidelines for Authors</a
					>
				</li>
				<li><a href={resolve('/issues')} class="hover:text-[var(--text-strong)]">Archives</a></li>
				<li>
					<a href={resolve('/editorial-board')} class="hover:text-[var(--text-strong)]"
						>Editorial Board</a
					>
				</li>
			</ul>
		</div>
		<div class="min-w-0 sm:col-span-2 lg:col-span-1">
			<h3 class="text-sm font-semibold tracking-[0.1em] text-[var(--text-muted)] uppercase">
				Contact
			</h3>
			<ul class="mt-3 space-y-2 text-sm break-words text-[var(--text-default)]">
				<li>
					<a href="mailto:editorial@jyse.org" class="hover:text-[var(--text-strong)]"
						>editorial@jyse.org</a
					>
				</li>
				<li>
					<a href="https://www.jyse.org" class="hover:text-[var(--text-strong)]">www.jyse.org</a>
				</li>
				<li>© 2012–Present • JYSE Editorial Office</li>
			</ul>
		</div>
	</div>
</footer>
