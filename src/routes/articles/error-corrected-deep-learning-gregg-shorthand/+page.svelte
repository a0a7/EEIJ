<script lang="ts">
	import { resolve } from '$app/paths';
	import { journal } from '$lib/data/journal';

	const title =
		'Error-corrected deep learning approach to handwritten text recognition of Gregg shorthand';
	const publishedLabel = '09 December 2025';
	const submittedLabel = '24 July 2025';
	const doiUrl = 'https://doi.org/10.xxxx/jyse.xxxx';
	const futurePdfPath = `${journal.domain}/downloads/jyse-error-corrected-deep-learning-gregg-shorthand.pdf`;
</script>

<svelte:head>
	<title>{title} | {journal.shortName}</title>
	<meta
		name="description"
		content="Special article page for a deep learning approach to handwritten text recognition of Gregg shorthand."
	/>
</svelte:head>

<article class="mx-auto max-w-4xl space-y-8">
	<header class="space-y-3">
		<p class="text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">
			Volume 13, Issue 11 • {publishedLabel}
		</p>
		<h1 class="text-4xl leading-tight font-semibold text-[var(--text-strong)] md:text-5xl">
			{title}
		</h1>
		<p class="text-sm leading-7 text-[var(--text-default)]">
			<span class="font-medium text-[var(--text-strong)]">Alexander Weimer</span><br />
			Minnetonka Research, 18301 MN-7, Minnetonka, MN 55345<br />
			Corresponding author:
			<a class="text-[var(--accent)] hover:underline" href="mailto:alexander.weimer@a0.ax"
				>alexander.weimer@a0.ax</a
			>
		</p>
	</header>

	<section class="card p-5 text-sm leading-7 text-[var(--text-default)]">
		<p><span class="font-semibold text-[var(--text-strong)]">Editor:</span> Jayaram Hariharan</p>
		<p><span class="font-semibold text-[var(--text-strong)]">Submitted:</span> {submittedLabel}</p>
		<p><span class="font-semibold text-[var(--text-strong)]">Published:</span> {publishedLabel}</p>
		<p class="mt-3">
			<span class="font-semibold text-[var(--text-strong)]">License:</span> Authors of papers retain copyright
			and release the work under a Creative Commons Attribution 4.0 International License (CC-BY).
		</p>
		<p class="mt-3">
			<span class="font-semibold text-[var(--text-strong)]">DOI:</span>
			<a
				href={doiUrl}
				target="_blank"
				rel="noreferrer"
				class="text-[var(--accent)] hover:underline"
			>
				10.xxxx/jyse.xxxx
			</a>
		</p>
	</section>

	<section class="space-y-3">
		<h2 class="text-2xl font-semibold text-[var(--text-strong)]">Abstract</h2>
		<p class="text-base leading-8 text-[var(--text-default)]">
			Background/Objective: Shorthand, also known as pen stenography, is a family of writing systems
			developed for fast writing before the digital age. This study focuses on Gregg shorthand, one
			of the most widely used English systems. Methods: A deep learning pipeline built around a
			Gated Recurrent Unit neural architecture was implemented for handwritten text recognition.
			Results: The model achieved 40.04% accuracy after minimal training. Conclusions: The resulting
			model is openly released for public access and supports ongoing work in shorthand
			digitization.
		</p>
		<p class="text-sm text-[var(--text-default)]">
			<span class="font-semibold text-[var(--text-strong)]">Keywords:</span> handwritten text recognition,
			pen stenography, shorthand
		</p>
	</section>

	<section class="space-y-3">
		<h2 class="text-2xl font-semibold text-[var(--text-strong)]">1. Introduction</h2>
		<p class="text-base leading-8 text-[var(--text-default)]">
			Gregg shorthand remains historically important despite reduced modern use. Transliteration of
			shorthand to standard text is difficult because symbols can be visually similar and words are
			often compressed. Reliable recognition can improve preservation and accessibility of
			historical records in law, medicine, and other domains.
		</p>
		<p class="text-base leading-8 text-[var(--text-default)]">
			Prior work includes classical and machine-learning approaches to Gregg and related shorthand
			systems, as well as recent deep-learning work on Swedish Melin shorthand. This study positions
			an English-language Gregg model in that evolving landscape.
		</p>
	</section>

	<section class="space-y-3">
		<h2 class="text-2xl font-semibold text-[var(--text-strong)]">2. Methods</h2>
		<p class="text-base leading-8 text-[var(--text-default)]">
			The model was implemented with PyTorch and torchvision, with supporting image processing
			through PIL. A GRU-based sequence architecture was selected for ordered shorthand character
			handling. Training used the Gregg-1916 dataset introduced by Zhai et al.
		</p>
	</section>

	<section class="space-y-3">
		<h2 class="text-2xl font-semibold text-[var(--text-strong)]">3. Results</h2>
		<p class="text-base leading-8 text-[var(--text-default)]">
			The model reached 40.04% accuracy after 10 epochs using a reduced training subset of roughly
			3,000 image-caption pairs, corresponding to about 24 hours of compute time.
		</p>
		<p class="text-base leading-8 text-[var(--text-default)]">
			The finalized implementation is published at
			<a
				class="text-[var(--accent)] hover:underline"
				href="https://github.com/a0a7/GreggRecognition"
				target="_blank"
				rel="noreferrer">github.com/a0a7/GreggRecognition</a
			>
			under the MIT license.
		</p>
	</section>

	<section class="space-y-3">
		<h2 class="text-2xl font-semibold text-[var(--text-strong)]">4. Discussion</h2>
		<p class="text-base leading-8 text-[var(--text-default)]">
			Although accuracy remains moderate, the result is meaningful given constrained training size
			and runtime. Performance is expected to improve with larger datasets, longer training, and
			model optimization.
		</p>
	</section>

	<section class="space-y-3">
		<h2 class="text-2xl font-semibold text-[var(--text-strong)]">Acknowledgments</h2>
		<p class="text-base leading-8 text-[var(--text-default)]">
			The author acknowledges Patricia Price and Caitlyn McWhirter for support and for facilitating
			the Minnetonka Research program.
		</p>
	</section>

	<section class="space-y-3">
		<h2 class="text-2xl font-semibold text-[var(--text-strong)]">References</h2>
		<ol class="list-decimal space-y-2 pl-5 text-sm leading-7 text-[var(--text-default)]">
			<li>
				F. Zhai et al. (2018). <em
					>A Dataset and a Novel Neural Approach for Optical Gregg Shorthand Recognition</em
				>. Text, Speech, and Dialogue.
			</li>
			<li>R. Rajasekaran and K. Ramar (2012). <em>Handwritten Gregg Shorthand Recognition</em>.</li>
			<li>
				J. R. Gregg (2001 edition). <em
					>Gregg Shorthand: A Light-Line Phonography for the Million</em
				>.
			</li>
			<li>A. Agarwal (1990). <em>Off-line Shorthand Recognition System</em>.</li>
			<li>
				C. Higgins (2004). <em>Knowledge based transcription of handwritten Pitman’s Shorthand</em>.
			</li>
			<li>
				R. Heil and M. Nauwerck (2024). <em
					>Handwritten stenography recognition and the LION dataset</em
				>.
			</li>
		</ol>
	</section>

	<section class="card p-5">
		<h2 class="text-xl font-semibold text-[var(--text-strong)]">PDF</h2>
		<p class="mt-2 text-sm leading-7 text-[var(--text-default)]">
			PDF is not uploaded yet. Once available, place it at:
		</p>
		<p class="mt-2 text-sm break-all text-[var(--text-strong)]">{futurePdfPath}</p>
	</section>

	<p class="text-sm">
		<a href={resolve('/articles')} class="text-[var(--accent)] hover:underline"
			>← Back to Articles</a
		>
	</p>
</article>
