<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<footer class="site-shell mt-20 border-t border-[var(--border)]">
	<div class="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
		<div class="space-y-3">
			<h2 class="font-serif text-xl text-[var(--text-strong)]">
				The Emerging Engineering Investigators Journal
			</h2>
			<p class="max-w-xl text-sm text-[var(--text-muted)]">
				EEIJ is an editorially mentored publication platform for high school and undergraduate STEM
				researchers publishing technically credible, reproducible work.
			</p>
		</div>
		<div>
			<h3 class="text-sm font-semibold tracking-[0.2em] text-[var(--text-muted)] uppercase">
				Navigate
			</h3>
			<ul class="mt-3 space-y-2 text-sm text-[var(--text-default)]">
				<li><a href={resolve('/articles')} class="hover:text-[var(--text-strong)]">Articles</a></li>
				<li><a href={resolve('/issues')} class="hover:text-[var(--text-strong)]">Issues</a></li>
				<li>
					<a href={resolve('/submit')} class="hover:text-[var(--text-strong)]">Submit Research</a>
				</li>
				<li><a href={resolve('/about')} class="hover:text-[var(--text-strong)]">About</a></li>
			</ul>
		</div>
		<div>
			<h3 class="text-sm font-semibold tracking-[0.2em] text-[var(--text-muted)] uppercase">
				Connect
			</h3>
			<ul class="mt-3 space-y-2 text-sm text-[var(--text-default)]">
				<li>
					<a href="mailto:editorial@eeijournal.org" class="hover:text-[var(--text-strong)]"
						>editorial@eeijournal.org</a
					>
				</li>
				<li>
					<a href="https://www.linkedin.com" class="hover:text-[var(--text-strong)]">LinkedIn</a>
				</li>
				<li><a href="https://github.com" class="hover:text-[var(--text-strong)]">GitHub</a></li>
				<li><a href="https://x.com" class="hover:text-[var(--text-strong)]">X</a></li>
			</ul>
		</div>
	</div>
</footer>
