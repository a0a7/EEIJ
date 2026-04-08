<script lang="ts">
	import { resolve } from '$app/paths';
	import { journal } from '$lib/data/journal';
</script>

<svelte:head>
	<title>Log in | {journal.shortName}</title>
	<meta name="description" content="Access author and editorial workflows for JYSE." />
</svelte:head>

<section class="max-w-3xl space-y-6">
	<div class="space-y-2">
		<p class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">Log in</p>
		<h1 class="text-3xl font-semibold text-[var(--text-strong)] md:text-4xl">Account sign in</h1>
		<p class="text-sm text-[var(--text-default)]">
			Log in to manage submissions, reviews, and subscription details.
		</p>
	</div>

	<div class="grid gap-4 md:grid-cols-[1.3fr_1fr]">
		<div class="card p-5">
			<form class="space-y-4">
				<div class="space-y-1">
					<label for="email" class="text-sm font-medium text-[var(--text-strong)]">Email</label>
					<input
						id="email"
						name="email"
						type="email"
						required
						autocomplete="email"
						class="focus-ring w-full rounded-sm border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text-default)]"
						placeholder="name@example.com"
					/>
				</div>

				<div class="space-y-1">
					<label for="password" class="text-sm font-medium text-[var(--text-strong)]"
						>Password</label
					>
					<input
						id="password"
						name="password"
						type="password"
						required
						autocomplete="current-password"
						class="focus-ring w-full rounded-sm border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text-default)]"
						placeholder="Enter your password"
					/>
				</div>

				<div class="flex flex-wrap items-center justify-between gap-3">
					<label class="inline-flex items-center gap-2 text-sm text-[var(--text-default)]">
						<input type="checkbox" name="remember" class="h-4 w-4 rounded border-[var(--border)]" />
						Remember me
					</label>
					<a
						href="mailto:editorial@jyse.org?subject=Password%20assistance"
						class="text-sm text-[var(--accent)] hover:underline"
					>
						Forgot password?
					</a>
				</div>

				<button
					type="submit"
					class="focus-ring inline-flex rounded-sm bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-contrast)]"
				>
					Log in
				</button>
			</form>
		</div>

		<aside class="space-y-4">
			<div class="card space-y-2 p-4">
				<h2 class="text-sm font-semibold tracking-[0.08em] text-[var(--text-muted)] uppercase">
					Author access
				</h2>
				<p class="text-sm text-[var(--text-default)]">
					New to JYSE? Create an author account to submit manuscripts and track reviews.
				</p>
				<a
					href={resolve('/submit')}
					class="focus-ring inline-flex rounded-sm border border-[var(--border)] px-3 py-2 text-sm font-medium text-[var(--text-default)] hover:text-[var(--text-strong)]"
				>
					Author sign up
				</a>
			</div>

			<div class="card space-y-2 p-4">
				<h2 class="text-sm font-semibold tracking-[0.08em] text-[var(--text-muted)] uppercase">
					Journal subscription
				</h2>
				<p class="text-sm text-[var(--text-default)]">
					View student and institutional rates for annual journal access.
				</p>
				<a
					href={resolve('/subscribe')}
					class="focus-ring inline-flex rounded-sm border border-[var(--border)] px-3 py-2 text-sm font-medium text-[var(--text-default)] hover:text-[var(--text-strong)]"
				>
					View subscription plans
				</a>
			</div>
		</aside>
	</div>
</section>
