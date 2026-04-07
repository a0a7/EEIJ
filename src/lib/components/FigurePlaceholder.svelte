<script lang="ts">
	let { title } = $props<{ title: string }>();

	const bars = [30, 52, 40, 66, 58, 70, 62];
</script>

<figure class="card overflow-hidden p-4">
	<div class="rounded-xl bg-[var(--surface-elevated)] p-4">
		<svg viewBox="0 0 420 200" role="img" aria-label={title} class="h-auto w-full">
			<defs>
				<linearGradient id="figureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stop-color="var(--figure-a)" />
					<stop offset="100%" stop-color="var(--figure-b)" />
				</linearGradient>
			</defs>
			<rect x="0" y="0" width="420" height="200" fill="var(--surface)" rx="12" />
			<path
				d="M24 158 C 120 64, 220 184, 396 48"
				stroke="url(#figureGradient)"
				stroke-width="4"
				fill="none"
			/>
			{#each bars as height, i (i)}
				<rect
					x={28 + i * 54}
					y={176 - height * 1.9}
					width="28"
					height={height * 1.9}
					rx="4"
					fill="var(--figure-b)"
					opacity="0.5"
				/>
			{/each}
		</svg>
	</div>
	<figcaption class="mt-3 text-sm text-[var(--text-muted)]">{title}</figcaption>
</figure>
