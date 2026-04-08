<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Issue } from '$lib/data/journal';
	import { getArticlesByIssue } from '$lib/data/journal';

	let { issue } = $props<{ issue: Issue }>();

	const issueArticles = $derived(getArticlesByIssue(issue.id));
	const published = $derived(
		new Date(issue.publicationDate).toLocaleDateString('en-US', {
			month: 'long',
			year: 'numeric',
			day: 'numeric'
		})
	);
</script>

<article class="card flex h-full flex-col overflow-hidden">
	<div class="border-b border-[var(--border)] p-5">
		<div class="cover-card flex min-h-32 items-end rounded-md p-4">
			<p class="text-base font-medium text-white/95">{issue.coverLabel}</p>
		</div>
		<h3 class="mt-4 text-xl font-semibold text-[var(--text-strong)]">
			Volume {issue.volume}, Issue {issue.number}
		</h3>
		<p class="mt-1 text-sm text-[var(--text-muted)]">{issue.season} • Published {published}</p>
		<p class="mt-3 line-clamp-2 text-sm leading-7 break-words text-[var(--text-default)]">
			{issue.theme}
		</p>
	</div>
	<div class="p-5">
		<p class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">
			Articles in this issue
		</p>
		<ul class="mt-3 space-y-2 text-sm text-[var(--text-default)]">
			{#each issueArticles as article (article.slug)}
				<li>
					<a
						href={resolve(`/articles/${article.slug}`)}
						class="line-clamp-2 block break-words hover:text-[var(--text-strong)]"
					>
						>{article.title}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</article>
