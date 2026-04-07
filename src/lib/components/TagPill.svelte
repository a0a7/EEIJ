<script lang="ts">
	let { tag } = $props<{ tag: string }>();
</script>

<span
	class="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1 text-xs font-medium tracking-wide text-[var(--text-muted)]"
>
	{tag}
</span>
