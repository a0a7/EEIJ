<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Article, Author } from '$lib/data/journal';
	import { getIssueById } from '$lib/data/journal';
	import TagPill from '$lib/components/TagPill.svelte';

	let { article } = $props<{ article: Article }>();

	const issue = $derived(getIssueById(article.issueId));
	const authorNames = $derived(article.authors.map((author: Author) => author.name).join(', '));
</script>

<article class="card article-card group flex h-full flex-col gap-4 p-6">
	<div class="space-y-2">
		<p class="text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase">
			{issue ? `Volume ${issue.volume}, Issue ${issue.number}` : 'EEIJ Article'}
		</p>
		<h3
			class="font-serif text-xl text-[var(--text-strong)] transition-colors duration-200 group-hover:text-[var(--accent)]"
		>
			<a href={resolve(`/articles/${article.slug}`)} class="focus-ring">{article.title}</a>
		</h3>
		<p class="text-sm text-[var(--text-default)]">{authorNames}</p>
	</div>
	<p class="line-clamp-4 text-sm leading-7 text-[var(--text-muted)]">{article.abstract}</p>
	<div class="mt-auto flex flex-wrap gap-2">
		{#each article.tags as tag (tag)}
			<TagPill {tag} />
		{/each}
	</div>
</article>
