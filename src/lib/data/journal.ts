export type Author = {
	name: string;
	affiliation: string;
	role: 'Author' | 'Co-author';
};

export type Article = {
	slug: string;
	title: string;
	authors: Author[];
	abstract: string;
	tags: string[];
	issueId: string;
	publishedOn: string;
	doi: string;
	citation: string;
	figure: {
		title: string;
		caption: string;
	};
};

export type Issue = {
	id: string;
	volume: number;
	number: number;
	season: string;
	publicationDate: string;
	theme: string;
	coverLabel: string;
};

export type BoardMember = {
	name: string;
	role: string;
	affiliation: string;
	interests: string[];
	bio: string;
};

export const journal = {
	name: 'Journal of Young Scientists & Engineers',
	shortName: 'JYSE',
	tagline: 'Exploring innovation in science, engineering, and technology.',
	description:
		'JYSE is an open-access, peer-reviewed international journal focused on emerging science and engineering research, methodological quality, and practical impact.',
	email: 'editorial@jyse.org',
	domain: 'https://www.jyse.org',
	issn: '2319-6378 (Online)',
	frequency: '12 issues per year (Monthly)',
	publisher: 'JYSE Editorial Office',
	firstYear: '2012'
};

export const importantDates = {
	window: 'Volume 14, Issue 6 (May 2026)',
	submissionDeadline: '30 April 2026',
	notificationDate: '15 May 2026',
	publicationDate: '30 May 2026'
};

export const issues: Issue[] = [
	{
		id: 'v14i6',
		volume: 14,
		number: 6,
		season: 'May 2026',
		publicationDate: '2026-05-30',
		theme: 'Emerging Methods in Engineering and Applied Sciences',
		coverLabel: 'Volume 14 • Issue 6'
	},
	{
		id: 'v14i5',
		volume: 14,
		number: 5,
		season: 'April 2026',
		publicationDate: '2026-04-30',
		theme: 'Digital Systems, Sustainable Infrastructure, and Materials',
		coverLabel: 'Volume 14 • Issue 5'
	},
	{
		id: 'v14i4',
		volume: 14,
		number: 4,
		season: 'March 2026',
		publicationDate: '2026-03-31',
		theme: 'AI, Robotics, and Biomedical Engineering',
		coverLabel: 'Volume 14 • Issue 4'
	}
];

export const articles: Article[] = [
	{
		slug: 'low-power-fpga-edge-inference',
		title: 'Low-Power FPGA Architectures for Edge Inference in Portable Air-Quality Monitors',
		authors: [
			{
				name: 'Maya Venkataraman',
				affiliation: 'Montgomery Blair High School',
				role: 'Author'
			},
			{
				name: 'Isaac Romero',
				affiliation: 'University of Maryland, Department of Electrical and Computer Engineering',
				role: 'Co-author'
			}
		],
		abstract:
			'This paper benchmarks three quantized convolution pipelines mapped to a mid-range Artix FPGA for on-device particulate matter classification. The proposed architecture reduces dynamic power by 38% compared with baseline kernels while retaining 94.1% classification accuracy. Field tests in school-zone corridors indicate stable latency under variable thermal conditions, supporting deployment in battery-constrained sensing stations.',
		tags: ['Machine Learning', 'Embedded Systems', 'FPGA'],
		issueId: 'v14i6',
		publishedOn: '2026-05-30',
		doi: '10.35940/jyse.FPGA.2026.140601',
		citation:
			'Venkataraman, M., & Romero, I. (2026). Low-Power FPGA Architectures for Edge Inference in Portable Air-Quality Monitors. Journal of Young Scientists & Engineers, 14(6), 1-12. https://doi.org/10.35940/jyse.FPGA.2026.140601',
		figure: {
			title: 'Power-Accuracy Frontier of Candidate FPGA Pipelines',
			caption:
				'Figure 1 compares synthesized accelerator designs and highlights the proposed architecture as the most efficient operating point for mobile inference workloads.'
		}
	},
	{
		slug: 'microfluidic-cancer-cell-separation',
		title:
			'Shear-Stable Microfluidic Channels for Label-Free Separation of Circulating Tumor Cells',
		authors: [
			{
				name: 'Noah Kim',
				affiliation: 'Palo Alto High School',
				role: 'Author'
			},
			{
				name: 'Eliana Duarte',
				affiliation: 'Stanford University, Bioengineering',
				role: 'Co-author'
			}
		],
		abstract:
			'The paper introduces a staircase-herringbone channel geometry designed through CFD iterations and fabricated with two-stage soft lithography. Across donor-matched blood samples, the geometry improved recovery of model tumor cells by 17% over a straight-channel control while maintaining viability above 92%. The study discusses throughput limits and a modular cartridge framework for translational prototyping.',
		tags: ['Biomedical Engineering', 'Microfluidics'],
		issueId: 'v14i6',
		publishedOn: '2026-05-30',
		doi: '10.35940/jyse.BIO.2026.140602',
		citation:
			'Kim, N., & Duarte, E. (2026). Shear-Stable Microfluidic Channels for Label-Free Separation of Circulating Tumor Cells. Journal of Young Scientists & Engineers, 14(6), 13-25. https://doi.org/10.35940/jyse.BIO.2026.140602',
		figure: {
			title: 'Velocity Distribution Across Adaptive Channel Segments',
			caption:
				'Figure 2 visualizes laminar flow profiles generated from simulation and validated using particle-image velocimetry in the fabricated prototype.'
		}
	},
	{
		slug: 'community-safe-drone-routing',
		title: 'Community-Safe Drone Routing with Risk-Aware Graph Optimization',
		authors: [
			{
				name: 'Ana Rodríguez',
				affiliation: 'Northeastern University, Undergraduate Research Scholars Program',
				role: 'Author'
			},
			{
				name: 'Peter Halvorsen',
				affiliation: 'Northeastern University, Mechanical and Industrial Engineering',
				role: 'Co-author'
			}
		],
		abstract:
			'This article develops a weighted graph planner that jointly minimizes travel time, acoustic exposure near schools, and emergency landing scarcity. Using municipal GIS layers and measured propeller signatures, the model reduced aggregate neighborhood disturbance by 24% relative to shortest-path baselines. A transparent policy dashboard is also presented for civic review workflows.',
		tags: ['Robotics', 'Optimization', 'Civic Systems'],
		issueId: 'v14i5',
		publishedOn: '2026-04-30',
		doi: '10.35940/jyse.ROB.2026.140503',
		citation:
			'Rodríguez, A., & Halvorsen, P. (2026). Community-Safe Drone Routing with Risk-Aware Graph Optimization. Journal of Young Scientists & Engineers, 14(5), 34-47. https://doi.org/10.35940/jyse.ROB.2026.140503',
		figure: {
			title: 'Risk Heatmap and Selected Flight Corridors',
			caption:
				'Figure 3 overlays optimized trajectories on a district risk map combining noise sensitivity, pedestrian density, and emergency landing coverage.'
		}
	},
	{
		slug: 'recycled-composite-beam-fatigue',
		title:
			'Fatigue Characterization of Recycled PET Composite Beams for Low-Cost Bridge Deck Panels',
		authors: [
			{
				name: 'Ethan Clarke',
				affiliation: 'Georgia Institute of Technology, Civil and Environmental Engineering',
				role: 'Author'
			},
			{
				name: 'Nadine Al-Khatib',
				affiliation: 'Georgia Institute of Technology, Civil and Environmental Engineering',
				role: 'Co-author'
			}
		],
		abstract:
			'The authors evaluate a recycled PET-glass composite under one million load cycles to estimate service-life suitability for secondary bridge deck applications. Testing showed progressive stiffness degradation but no catastrophic fracture under a 0.6 design stress ratio. A calibrated Miner-rule model predicts inspection intervals within 8% of observed failure-onset trends.',
		tags: ['Materials', 'Civil Engineering', 'Sustainability'],
		issueId: 'v14i5',
		publishedOn: '2026-04-30',
		doi: '10.35940/jyse.MAT.2026.140504',
		citation:
			'Clarke, E., & Al-Khatib, N. (2026). Fatigue Characterization of Recycled PET Composite Beams for Low-Cost Bridge Deck Panels. Journal of Young Scientists & Engineers, 14(5), 48-61. https://doi.org/10.35940/jyse.MAT.2026.140504',
		figure: {
			title: 'S-N Behavior of Recycled Composite Samples',
			caption:
				'Figure 4 summarizes fatigue life distributions and confidence intervals for three manufacturing conditions.'
		}
	},
	{
		slug: 'solar-desalination-heat-recovery',
		title: 'Compact Heat-Recovery Strategies for Student-Built Solar Desalination Columns',
		authors: [
			{
				name: 'Leila Ahmed',
				affiliation: 'Raleigh Charter High School',
				role: 'Author'
			},
			{
				name: 'Megan Choi',
				affiliation: 'North Carolina State University, Chemical and Biomolecular Engineering',
				role: 'Co-author'
			}
		],
		abstract:
			'This investigation compares low-cost heat-recovery loops integrated into a bench-scale solar still suitable for pre-college laboratory settings. The best-performing loop increased freshwater yield from 2.8 to 3.6 L/m²/day during matched irradiance windows and reduced startup transients by recapturing condenser waste heat. The paper includes uncertainty analysis for salinity sensors and fabrication notes for reproducibility.',
		tags: ['Energy', 'Thermal Systems', 'Sustainability'],
		issueId: 'v14i4',
		publishedOn: '2026-03-31',
		doi: '10.35940/jyse.ENE.2026.140405',
		citation:
			'Ahmed, L., & Choi, M. (2026). Compact Heat-Recovery Strategies for Student-Built Solar Desalination Columns. Journal of Young Scientists & Engineers, 14(4), 10-22. https://doi.org/10.35940/jyse.ENE.2026.140405',
		figure: {
			title: 'Distillate Yield Under Matched Solar Profiles',
			caption:
				'Figure 5 shows measured hourly yield and cumulative output for baseline and heat-recovery-enhanced prototypes.'
		}
	},
	{
		slug: 'privacy-preserving-campus-occupancy',
		title: 'Privacy-Preserving Occupancy Estimation for Campus Buildings Using Event Cameras',
		authors: [
			{
				name: 'Sofia Marin',
				affiliation: 'University of Washington, Computer Science & Engineering',
				role: 'Author'
			},
			{
				name: 'Rohan Bedi',
				affiliation: 'University of Washington, Computer Science & Engineering',
				role: 'Co-author'
			}
		],
		abstract:
			'The paper reports a lightweight occupancy estimator that uses event-camera motion signatures rather than reconstructing identifiable frames. Evaluated across three campus corridors over four weeks, the method achieved a mean absolute error of 1.4 occupants and reduced personally identifiable data exposure compared with RGB baselines. The authors include deployment guidance for institutions balancing energy optimization with responsible sensing.',
		tags: ['Computer Vision', 'Privacy', 'Smart Buildings'],
		issueId: 'v14i4',
		publishedOn: '2026-03-31',
		doi: '10.35940/jyse.CS.2026.140406',
		citation:
			'Marin, S., & Bedi, R. (2026). Privacy-Preserving Occupancy Estimation for Campus Buildings Using Event Cameras. Journal of Young Scientists & Engineers, 14(4), 23-35. https://doi.org/10.35940/jyse.CS.2026.140406',
		figure: {
			title: 'Occupancy Estimation Error Across Deployment Sites',
			caption:
				'Figure 6 compares occupancy prediction error and confidence intervals for three sensing locations under variable foot traffic.'
		}
	}
];

export const editorialBoard: BoardMember[] = [
	{
		name: 'Dr. Helena Price',
		role: 'Editor-in-Chief',
		affiliation: 'Massachusetts Institute of Technology',
		interests: ['Engineering Education', 'Research Integrity', 'Applied AI'],
		bio: 'Oversees editorial direction, publication quality, and strategic planning for JYSE.'
	},
	{
		name: 'Prof. Samuel Okafor',
		role: 'Managing Editor',
		affiliation: 'University of Michigan',
		interests: ['Cyber-Physical Systems', 'Embedded Controls'],
		bio: 'Coordinates manuscript handling, reviewer assignment, and editorial timelines.'
	},
	{
		name: 'Dr. Clara Jin',
		role: 'Associate Editor (Methods & Reproducibility)',
		affiliation: 'University of Toronto',
		interests: ['Open Science', 'Data Standards', 'Computational Reproducibility'],
		bio: 'Leads reproducibility checks and standards for methods, data, and reporting.'
	},
	{
		name: 'Prof. Mateo Alvarez',
		role: 'Associate Editor (Robotics & Intelligent Systems)',
		affiliation: 'University of California, San Diego',
		interests: ['Autonomous Robotics', 'Optimization', 'Safety Assurance'],
		bio: 'Handles submissions in robotics, controls, autonomous systems, and deployment safety.'
	},
	{
		name: 'Dr. Aisha Rahman',
		role: 'Associate Editor (Bioengineering)',
		affiliation: 'Johns Hopkins University',
		interests: ['Microfluidics', 'Biomechanics', 'Translational Prototyping'],
		bio: 'Manages biomedical engineering manuscripts and translational science submissions.'
	},
	{
		name: 'Prof. Daniel Mercer',
		role: 'Section Editor (Student Research)',
		affiliation: 'University of Texas at Austin',
		interests: ['STEM Mentorship', 'Research Communication', 'Inclusive Pedagogy'],
		bio: 'Supports student-focused submissions and editorial development resources for new authors.'
	}
];

export const submissionRequirements = [
	'Submissions must be original and must not be under review or published elsewhere.',
	'Manuscripts must be within the journal scope of science, engineering, and technology.',
	'Include title, abstract, keywords, methods, results, discussion, and references.',
	'Use clear figures/tables, standard citation style, and publication-ready English.',
	'Authors should review editorial policies, publication ethics, and open-access conditions before submission.'
];

export const reviewProcess = [
	'Initial editorial screening for scope, quality, plagiarism, and formatting compliance.',
	'Double-anonymised peer review by subject experts for technical and methodological quality.',
	'Editorial decision (accept, minor revision, major revision, or reject) with reviewer comments.',
	'Accepted papers are published online and assigned to an issue in the archive.'
];

export const allTags = Array.from(new Set(articles.flatMap((article) => article.tags))).sort();

export function getIssueById(id: string) {
	return issues.find((issue) => issue.id === id);
}

export function getArticleBySlug(slug: string) {
	return articles.find((article) => article.slug === slug);
}

export function getArticlesByIssue(issueId: string) {
	return articles.filter((article) => article.issueId === issueId);
}
