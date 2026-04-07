export type Author = {
	name: string;
	affiliation: string;
	role: 'Student Researcher' | 'Mentor';
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
	name: 'The Emerging Engineering Investigators Journal',
	shortName: 'EEIJ',
	tagline: 'Mentored STEM research by high school and undergraduate investigators.',
	description:
		'EEIJ publishes rigorously mentored student research in engineering and applied science, highlighting reproducible methods, ethical experimentation, and practical impact.',
	email: 'editorial@eeijournal.org'
};

export const issues: Issue[] = [
	{
		id: 'v2i1',
		volume: 2,
		number: 1,
		season: 'Spring 2026',
		publicationDate: '2026-03-12',
		theme: 'Trustworthy Computing at the Edge',
		coverLabel: 'Volume 2 • Issue 1'
	},
	{
		id: 'v1i2',
		volume: 1,
		number: 2,
		season: 'Fall 2025',
		publicationDate: '2025-10-04',
		theme: 'Autonomous Systems in Community Contexts',
		coverLabel: 'Volume 1 • Issue 2'
	},
	{
		id: 'v1i1',
		volume: 1,
		number: 1,
		season: 'Spring 2025',
		publicationDate: '2025-04-20',
		theme: 'Foundations of Student-Led Engineering Inquiry',
		coverLabel: 'Volume 1 • Issue 1'
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
				role: 'Student Researcher'
			},
			{
				name: 'Dr. Isaac Romero',
				affiliation: 'University of Maryland, Department of Electrical and Computer Engineering',
				role: 'Mentor'
			}
		],
		abstract:
			'This study benchmarks three quantized convolution pipelines mapped to a mid-range Artix FPGA for on-device particulate matter classification. The student-led team optimized memory movement with line-buffer reuse and demonstrated a 38% reduction in dynamic power compared with baseline HLS-generated kernels while retaining 94.1% classification accuracy. Field tests in school-zone corridors indicate stable latency under variable thermal conditions, supporting practical deployment in battery-constrained sensing stations.',
		tags: ['Machine Learning', 'Embedded Systems', 'FPGA'],
		issueId: 'v2i1',
		publishedOn: '2026-03-12',
		doi: '10.5281/eeij.2026.201',
		citation:
			'Venkataraman, M., & Romero, I. (2026). Low-Power FPGA Architectures for Edge Inference in Portable Air-Quality Monitors. The Emerging Engineering Investigators Journal, 2(1), 1-14. https://doi.org/10.5281/eeij.2026.201',
		figure: {
			title: 'Power-Accuracy Frontier of Candidate FPGA Pipelines',
			caption:
				'Figure 1 compares three synthesized accelerator designs and highlights the proposed architecture as the most efficient operating point for mobile inference workloads.'
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
				role: 'Student Researcher'
			},
			{
				name: 'Prof. Eliana Duarte',
				affiliation: 'Stanford University, Bioengineering',
				role: 'Mentor'
			}
		],
		abstract:
			'The paper introduces a staircase-herringbone channel geometry designed through CFD iterations and fabricated with two-stage soft lithography. Across six donor-matched blood samples, the geometry improved recovery of model tumor cells by 17% over a straight-channel control while maintaining viability above 92%. The authors discuss practical limits around throughput scaling and propose a modular cartridge framework for classroom-compatible translational prototyping.',
		tags: ['Biomedical Engineering', 'Microfluidics'],
		issueId: 'v2i1',
		publishedOn: '2026-03-12',
		doi: '10.5281/eeij.2026.202',
		citation:
			'Kim, N., & Duarte, E. (2026). Shear-Stable Microfluidic Channels for Label-Free Separation of Circulating Tumor Cells. The Emerging Engineering Investigators Journal, 2(1), 15-27. https://doi.org/10.5281/eeij.2026.202',
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
				role: 'Student Researcher'
			},
			{
				name: 'Dr. Peter Halvorsen',
				affiliation: 'Northeastern University, Mechanical and Industrial Engineering',
				role: 'Mentor'
			}
		],
		abstract:
			'This article develops a weighted graph planner that jointly minimizes travel time, acoustic exposure near schools, and emergency landing scarcity. Using open municipal GIS layers and measured propeller signatures, the model reduced aggregate neighborhood disturbance by 24% relative to shortest-path baselines in a Boston test district. The student researcher also reports a transparent policy dashboard that helps civic reviewers inspect route trade-offs before approval.',
		tags: ['Robotics', 'Optimization', 'Civic Systems'],
		issueId: 'v1i2',
		publishedOn: '2025-10-04',
		doi: '10.5281/eeij.2025.112',
		citation:
			'Rodríguez, A., & Halvorsen, P. (2025). Community-Safe Drone Routing with Risk-Aware Graph Optimization. The Emerging Engineering Investigators Journal, 1(2), 45-58. https://doi.org/10.5281/eeij.2025.112',
		figure: {
			title: 'Risk Heatmap and Selected Flight Corridors',
			caption:
				'Figure 3 overlays optimized trajectories on a district risk map that combines noise sensitivity, pedestrian density, and emergency landing coverage.'
		}
	},
	{
		slug: 'recycled-composite-beam-fatigue',
		title:
			'Fatigue Characterization of Recycled PET Composite Beams for Low-Cost Bridge Deck Panels',
		authors: [
			{
				name: 'Ethan Clarke',
				affiliation:
					'Georgia Institute of Technology, School of Civil and Environmental Engineering',
				role: 'Student Researcher'
			},
			{
				name: 'Prof. Nadine Al-Khatib',
				affiliation:
					'Georgia Institute of Technology, School of Civil and Environmental Engineering',
				role: 'Mentor'
			}
		],
		abstract:
			'The authors evaluate a recycled PET-glass composite under one million load cycles to estimate service-life suitability for secondary bridge deck applications. Coupon and beam testing showed progressive stiffness degradation but no catastrophic fracture under 0.6 design stress ratio. A simple Miner-rule calibration, generated from undergraduate laboratory data, predicts inspection intervals within 8% of observed failure-onset trends.',
		tags: ['Materials', 'Civil Engineering', 'Sustainability'],
		issueId: 'v1i2',
		publishedOn: '2025-10-04',
		doi: '10.5281/eeij.2025.113',
		citation:
			'Clarke, E., & Al-Khatib, N. (2025). Fatigue Characterization of Recycled PET Composite Beams for Low-Cost Bridge Deck Panels. The Emerging Engineering Investigators Journal, 1(2), 59-72. https://doi.org/10.5281/eeij.2025.113',
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
				role: 'Student Researcher'
			},
			{
				name: 'Dr. Megan Choi',
				affiliation: 'North Carolina State University, Chemical and Biomolecular Engineering',
				role: 'Mentor'
			}
		],
		abstract:
			'This investigation compares two low-cost heat-recovery loops integrated into a bench-scale solar still suitable for pre-college laboratory settings. The best-performing loop increased freshwater yield from 2.8 to 3.6 L/m²/day during matched irradiance windows and reduced startup transients by recapturing condenser waste heat. The paper includes uncertainty analysis for salinity sensors and practical fabrication notes for reproducibility in school workshops.',
		tags: ['Energy', 'Thermal Systems', 'Sustainability'],
		issueId: 'v1i1',
		publishedOn: '2025-04-20',
		doi: '10.5281/eeij.2025.101',
		citation:
			'Ahmed, L., & Choi, M. (2025). Compact Heat-Recovery Strategies for Student-Built Solar Desalination Columns. The Emerging Engineering Investigators Journal, 1(1), 1-13. https://doi.org/10.5281/eeij.2025.101',
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
				affiliation:
					'University of Washington, Paul G. Allen School of Computer Science & Engineering',
				role: 'Student Researcher'
			},
			{
				name: 'Prof. Rohan Bedi',
				affiliation:
					'University of Washington, Paul G. Allen School of Computer Science & Engineering',
				role: 'Mentor'
			}
		],
		abstract:
			'The paper reports a lightweight occupancy estimator that leverages event-camera motion signatures rather than reconstructing identifiable frames. Evaluated across three campus corridors over four weeks, the method achieved a mean absolute error of 1.4 occupants and reduced personally identifiable data exposure compared with RGB baselines. The authors include deployment guidance for institutions balancing energy optimization with responsible sensing practices.',
		tags: ['Computer Vision', 'Privacy', 'Smart Buildings'],
		issueId: 'v1i1',
		publishedOn: '2025-04-20',
		doi: '10.5281/eeij.2025.102',
		citation:
			'Marin, S., & Bedi, R. (2025). Privacy-Preserving Occupancy Estimation for Campus Buildings Using Event Cameras. The Emerging Engineering Investigators Journal, 1(1), 14-26. https://doi.org/10.5281/eeij.2025.102',
		figure: {
			title: 'Occupancy Estimation Error Across Deployment Sites',
			caption:
				'Figure 6 compares occupancy prediction error and confidence intervals for three sensing locations under variable foot traffic.'
		}
	},
	{
		slug: 'modular-battery-health-analytics',
		title: 'Modular Battery Health Analytics for Student-Built Electric Go-Kart Platforms',
		authors: [
			{
				name: 'Jordan Patel',
				affiliation: 'Thomas Jefferson High School for Science and Technology',
				role: 'Student Researcher'
			},
			{
				name: 'Dr. Hannah McNeil',
				affiliation: 'Virginia Tech, Department of Mechanical Engineering',
				role: 'Mentor'
			}
		],
		abstract:
			'This article describes a low-cost analytics stack for tracking lithium-ion degradation in educational electric vehicle projects. The system combines impedance snapshots, temperature-normalized coulomb counting, and anomaly flags from a compact edge controller. Over a semester-long pilot, the model identified early cell imbalance events up to nine charge cycles before threshold alarms triggered in the stock battery management unit.',
		tags: ['Energy Storage', 'Embedded Systems', 'Data Analytics'],
		issueId: 'v2i1',
		publishedOn: '2026-03-12',
		doi: '10.5281/eeij.2026.203',
		citation:
			'Patel, J., & McNeil, H. (2026). Modular Battery Health Analytics for Student-Built Electric Go-Kart Platforms. The Emerging Engineering Investigators Journal, 2(1), 28-41. https://doi.org/10.5281/eeij.2026.203',
		figure: {
			title: 'Early Degradation Flag Timeline During Pilot Operation',
			caption:
				'Figure 7 illustrates the lead time of analytics-based imbalance alerts relative to default battery management alarms.'
		}
	},
	{
		slug: 'adaptive-haptics-prosthetic-training',
		title: 'Adaptive Haptic Training Protocols for Low-Cost Upper-Limb Prosthetic Controllers',
		authors: [
			{
				name: 'Priya Nair',
				affiliation: 'Carnegie Mellon University, Biomedical Engineering',
				role: 'Student Researcher'
			},
			{
				name: 'Prof. Leon Wu',
				affiliation: 'Carnegie Mellon University, Robotics Institute',
				role: 'Mentor'
			}
		],
		abstract:
			'The study evaluates adaptive vibration cues for improving control consistency in myoelectric prosthetic training. A four-week protocol with twelve participants reduced target acquisition error by 19% compared with fixed-pattern feedback, with strongest gains in novice users. The paper contributes an open calibration routine and reflects on ethical considerations when collecting biometric interaction data from student participants.',
		tags: ['Biomedical Engineering', 'Robotics', 'Human-Computer Interaction'],
		issueId: 'v1i2',
		publishedOn: '2025-10-04',
		doi: '10.5281/eeij.2025.114',
		citation:
			'Nair, P., & Wu, L. (2025). Adaptive Haptic Training Protocols for Low-Cost Upper-Limb Prosthetic Controllers. The Emerging Engineering Investigators Journal, 1(2), 73-86. https://doi.org/10.5281/eeij.2025.114',
		figure: {
			title: 'Error Reduction by Feedback Strategy',
			caption:
				'Figure 8 compares fixed and adaptive haptic cue strategies across training sessions and participant cohorts.'
		}
	}
];

export const editorialBoard: BoardMember[] = [
	{
		name: 'Dr. Helena Price',
		role: 'Editor-in-Chief',
		affiliation: 'Massachusetts Institute of Technology',
		interests: ['Engineering Education', 'Human-Centered Design', 'Ethics in AI'],
		bio: 'Leads EEIJ strategic direction and oversees editorial quality standards for mentored student scholarship.'
	},
	{
		name: 'Prof. Samuel Okafor',
		role: 'Review Editor',
		affiliation: 'University of Michigan',
		interests: ['Cyber-Physical Systems', 'Embedded Controls'],
		bio: 'Coordinates peer-review matching and reviewer calibration to ensure fair, developmental feedback for early-career researchers.'
	},
	{
		name: 'Dr. Clara Jin',
		role: 'Methods and Reproducibility Editor',
		affiliation: 'University of Toronto',
		interests: ['Open Science', 'Computational Reproducibility', 'Data Standards'],
		bio: 'Guides methodological reporting criteria and reproducibility checklists used across all accepted manuscripts.'
	},
	{
		name: 'Prof. Mateo Alvarez',
		role: 'Associate Editor, Robotics & Intelligent Systems',
		affiliation: 'University of California, San Diego',
		interests: ['Autonomous Robotics', 'Optimization', 'Safety Assurance'],
		bio: 'Oversees submissions focused on control, perception, and safe deployment of autonomous systems in real settings.'
	},
	{
		name: 'Dr. Aisha Rahman',
		role: 'Associate Editor, Bioengineering',
		affiliation: 'Johns Hopkins University',
		interests: ['Microfluidics', 'Biomechanics', 'Translational Prototyping'],
		bio: 'Supports interdisciplinary manuscripts bridging biomedical engineering methods with practical translational impact.'
	},
	{
		name: 'Prof. Daniel Mercer',
		role: 'Student Research Liaison',
		affiliation: 'University of Texas at Austin',
		interests: ['STEM Mentorship', 'Inclusive Pedagogy', 'Research Communication'],
		bio: 'Develops mentorship resources and author guides tailored for high school and undergraduate researchers.'
	}
];

export const submissionRequirements = [
	'Manuscripts must include at least one student first author and one qualified mentor as co-author.',
	'Submissions should present original engineering or applied science research with reproducible methods.',
	'Include an abstract (150-250 words), methods, results, limitations, and future work sections.',
	'Use SI units, clearly label figures/tables, and provide data/code access statements when possible.',
	'Mentor attestation confirming ethical oversight and authorship contribution is required at submission.'
];

export const reviewProcess = [
	'Initial editorial screening for scope, ethical compliance, and formatting completeness.',
	'Double-anonymized technical review by two domain specialists and one mentorship-focused reviewer.',
	'Revision round emphasizing methodological clarity, reproducibility, and communication quality.',
	'Final decision with constructive feedback and optional editorial coaching for accepted student teams.'
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
