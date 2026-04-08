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

const utcMonthYearFormatter = new Intl.DateTimeFormat('en-US', {
	month: 'long',
	year: 'numeric',
	timeZone: 'UTC'
});

const utcLongDateFormatter = new Intl.DateTimeFormat('en-GB', {
	day: '2-digit',
	month: 'long',
	year: 'numeric',
	timeZone: 'UTC'
});

const toIsoDateString = (date: Date) => date.toISOString().slice(0, 10);

const addUtcMonths = (date: Date, delta: number) =>
	new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + delta, 1));

const endOfUtcMonth = (date: Date) =>
	new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0));

const addUtcDays = (date: Date, delta: number) => {
	const result = new Date(date);
	result.setUTCDate(result.getUTCDate() + delta);
	return result;
};

const today = new Date();
const monthsPerCadence = 2;
const secondMonthOffset = monthsPerCadence - 1;
const currentBiMonthlyStartMonth =
	Math.floor(today.getUTCMonth() / monthsPerCadence) * monthsPerCadence;
const currentBiMonthlyAnchorMonth = currentBiMonthlyStartMonth + secondMonthOffset;
const currentBiMonthlyAnchor = new Date(
	Date.UTC(today.getUTCFullYear(), currentBiMonthlyAnchorMonth, 1)
);

const latestIssueDate = endOfUtcMonth(currentBiMonthlyAnchor);
const previousIssueDate = endOfUtcMonth(addUtcMonths(currentBiMonthlyAnchor, -1));
const olderIssueDate = endOfUtcMonth(addUtcMonths(currentBiMonthlyAnchor, -2));

const baseVolumeFor2026 = 14;
const latestIssueVolume = baseVolumeFor2026 + (latestIssueDate.getUTCFullYear() - 2026);
const previousIssueVolume = baseVolumeFor2026 + (previousIssueDate.getUTCFullYear() - 2026);
const olderIssueVolume = baseVolumeFor2026 + (olderIssueDate.getUTCFullYear() - 2026);

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
	tagline:
		'Open-access publishing for emerging researchers in science, engineering, and technology.',
	description:
		'JYSE is an open-access, peer-reviewed international journal for emerging researchers, with a focus on practical studies suitable for high-school and early undergraduate scholarship.',
	email: 'editorial@jyse.org',
	domain: 'https://www.jyse.org',
	issn: '2319-6378 (Online)',
	frequency: '12 issues per year (Monthly)',
	publisher: 'JYSE Editorial Office',
	firstYear: '2012'
};

export const importantDates = {
	window: `Volume ${latestIssueVolume}, Issue ${latestIssueDate.getUTCMonth() + 1} (${utcMonthYearFormatter.format(latestIssueDate)})`,
	submissionDeadline: utcLongDateFormatter.format(addUtcDays(latestIssueDate, -30)),
	notificationDate: utcLongDateFormatter.format(addUtcDays(latestIssueDate, -15)),
	publicationDate: utcLongDateFormatter.format(latestIssueDate)
};

export const issues: Issue[] = [
	{
		id: 'v14i6',
		volume: latestIssueVolume,
		number: latestIssueDate.getUTCMonth() + 1,
		season: utcMonthYearFormatter.format(latestIssueDate),
		publicationDate: toIsoDateString(latestIssueDate),
		theme: 'Student-Led Experiments in Sensors, Energy, and Computing',
		coverLabel: `Volume ${latestIssueVolume} • Issue ${latestIssueDate.getUTCMonth() + 1}`
	},
	{
		id: 'v14i5',
		volume: previousIssueVolume,
		number: previousIssueDate.getUTCMonth() + 1,
		season: utcMonthYearFormatter.format(previousIssueDate),
		publicationDate: toIsoDateString(previousIssueDate),
		theme: 'Applied Engineering Projects for Schools and Early Undergraduates',
		coverLabel: `Volume ${previousIssueVolume} • Issue ${previousIssueDate.getUTCMonth() + 1}`
	},
	{
		id: 'v14i4',
		volume: olderIssueVolume,
		number: olderIssueDate.getUTCMonth() + 1,
		season: utcMonthYearFormatter.format(olderIssueDate),
		publicationDate: toIsoDateString(olderIssueDate),
		theme: 'Accessible Methods in Robotics, Environment, and Materials',
		coverLabel: `Volume ${olderIssueVolume} • Issue ${olderIssueDate.getUTCMonth() + 1}`
	}
];

export const articles: Article[] = [
	{
		slug: 'classroom-air-quality-sensor-network',
		title: 'A Low-Cost Distributed Air-Quality Sensor Network Built with ESP32 Boards',
		authors: [
			{
				name: 'Maya Venkataraman',
				affiliation: 'Montgomery Blair High School',
				role: 'Author'
			}
		],
		abstract:
			'This study presents a budget-friendly air-quality monitoring setup for school classrooms using ESP32 microcontrollers and optical dust sensors. The author assembled eight nodes, calibrated them against a reference monitor, and logged PM2.5 values over six weeks. The network achieved an average absolute error of 4.8 µg/m³ after calibration and helped identify ventilation periods associated with elevated particle levels. The work demonstrates an approachable pathway for high-school students to conduct meaningful environmental sensing projects.',
		tags: ['Environmental Engineering', 'Embedded Systems', 'Sensors'],
		issueId: 'v14i6',
		publishedOn: toIsoDateString(latestIssueDate),
		doi: '10.35940/jyse.ENV.2026.140601',
		citation:
			'Venkataraman, M. (2026). A Low-Cost Classroom Air-Quality Sensor Network Built with ESP32 Boards. Journal of Young Scientists & Engineers, 14(6), 1-10. https://doi.org/10.35940/jyse.ENV.2026.140601',
		figure: {
			title: 'Sensor Node Accuracy After Two-Point Calibration',
			caption:
				'Figure 1 compares raw and calibrated PM2.5 readings from the student-built sensor nodes against a reference instrument.'
		}
	},
	{
		slug: 'solar-phone-charging-bench-study',
		title: 'Benchmarking Portable Solar Phone Charging Kits for Outdoor Field Use',
		authors: [
			{
				name: 'Noah Kim',
				affiliation: 'Palo Alto High School',
				role: 'Author'
			},
			{
				name: 'Eliana Duarte',
				affiliation: 'Stanford University, School of Engineering',
				role: 'Co-author'
			}
		],
		abstract:
			'The authors evaluate three compact solar charging kits designed for student use in outdoor campus areas. Over twelve clear-sky sessions, they compared charging rate, thermal behavior, and conversion efficiency under controlled load conditions. The best-performing kit delivered 18% higher average charging power than the baseline product and maintained safer operating temperatures through passive heat sinking. The paper provides practical recommendations for schools exploring resilient, low-cost renewable charging infrastructure.',
		tags: ['Energy', 'Electrical Engineering', 'Sustainability'],
		issueId: 'v14i6',
		publishedOn: toIsoDateString(latestIssueDate),
		doi: '10.35940/jyse.EEE.2026.140602',
		citation:
			'Kim, N., & Duarte, E. (2026). Benchmarking Portable Solar Phone Charging Kits for Campus Use. Journal of Young Scientists & Engineers, 14(6), 11-22. https://doi.org/10.35940/jyse.EEE.2026.140602',
		figure: {
			title: 'Charging Power vs. Time Across Three Portable Kits',
			caption:
				'Figure 2 shows median output power for each kit measured during repeated noon-time charging trials.'
		}
	},
	{
		slug: 'rainwater-filter-column-study',
		title:
			'Evaluating Layered Sand-Charcoal Filters for Decentralized Rainwater Harvesting Systems',
		authors: [
			{
				name: 'Ana Rodríguez',
				affiliation: 'Northeastern University, First-Year Engineering Program',
				role: 'Author'
			},
			{
				name: 'Peter Halvorsen',
				affiliation: 'Northeastern University, Mechanical and Industrial Engineering',
				role: 'Co-author'
			},
			{
				name: 'Leila Ahmed',
				affiliation: 'Raleigh Charter High School',
				role: 'Co-author'
			}
		],
		abstract:
			'This project compares four layered filter column designs for rainwater harvested from school rooftops. Student researchers measured turbidity, conductivity, and flow rate across 40 test runs using locally available materials. A mixed-media column with gravel, fine sand, and activated charcoal achieved the best balance between clarity improvement and sustainable flow, reducing turbidity by 71% while maintaining practical throughput. The study offers a replicable protocol for classroom-level water treatment investigations.',
		tags: ['Civil Engineering', 'Environmental Engineering', 'Water Systems'],
		issueId: 'v14i5',
		publishedOn: toIsoDateString(previousIssueDate),
		doi: '10.35940/jyse.CEE.2026.140503',
		citation:
			'Rodríguez, A., Halvorsen, P., & Ahmed, L. (2026). Evaluating Layered Sand-Charcoal Filters for School Rainwater Harvesting Systems. Journal of Young Scientists & Engineers, 14(5), 23-36. https://doi.org/10.35940/jyse.CEE.2026.140503',
		figure: {
			title: 'Turbidity Reduction Across Column Configurations',
			caption:
				'Figure 3 summarizes average turbidity outcomes for each filter design tested in the student-built bench setup.'
		}
	},
	{
		slug: 'first-year-drone-landing-pad-detection',
		title: 'Simple Vision Markers for Reliable Drone Landing in Robotics Workflows',
		authors: [
			{
				name: 'Ethan Clarke',
				affiliation: 'Georgia Institute of Technology, First-Year Engineering',
				role: 'Author'
			}
		],
		abstract:
			'This paper investigates low-complexity visual markers for autonomous drone landing exercises in introductory robotics courses. The author tested marker size, contrast, and border thickness using a simulated camera pipeline and indoor quadcopter trials. A high-contrast concentric-square marker reduced average landing error by 27% compared with common QR-pattern references while requiring less processing time. The method is intended for beginner-friendly robotics labs with limited hardware resources.',
		tags: ['Robotics', 'Computer Vision', 'Education Technology'],
		issueId: 'v14i5',
		publishedOn: toIsoDateString(previousIssueDate),
		doi: '10.35940/jyse.ROB.2026.140504',
		citation:
			'Clarke, E. (2026). Simple Vision Markers for Reliable Drone Landing in Introductory Robotics Labs. Journal of Young Scientists & Engineers, 14(5), 37-46. https://doi.org/10.35940/jyse.ROB.2026.140504',
		figure: {
			title: 'Landing Error by Marker Style',
			caption:
				'Figure 4 compares median landing offset for marker designs evaluated in simulation and indoor flight tests.'
		}
	},
	{
		slug: 'bioplastic-film-tensile-tests',
		title: 'Tensile Testing of Starch-Based Bioplastic Films for Flexible Packaging Prototypes',
		authors: [
			{
				name: 'Sofia Marin',
				affiliation: 'University of Washington, Engineering Undeclared Program',
				role: 'Author'
			},
			{
				name: 'Rohan Bedi',
				affiliation: 'University of Washington, Materials Science and Engineering',
				role: 'Co-author'
			},
			{
				name: 'Jordan Patel',
				affiliation: 'Thomas Jefferson High School for Science and Technology',
				role: 'Co-author'
			},
			{
				name: 'Priya Nair',
				affiliation: 'Carnegie Mellon University, Biomedical Engineering',
				role: 'Co-author'
			}
		],
		abstract:
			'The authors produced starch-based bioplastic films with varying glycerol concentrations and evaluated their tensile behavior for low-load packaging applications. Using a benchtop tensile rig, they measured stress-strain response, elongation at break, and humidity sensitivity. One formulation improved elongation by 34% over the control while maintaining comparable tensile strength. The paper discusses trade-offs between flexibility and moisture resistance in student-manufactured biodegradable materials.',
		tags: ['Materials Engineering', 'Sustainability', 'Manufacturing'],
		issueId: 'v14i4',
		publishedOn: toIsoDateString(olderIssueDate),
		doi: '10.35940/jyse.MAT.2026.140405',
		citation:
			'Marin, S., Bedi, R., Patel, J., & Nair, P. (2026). Tensile Testing of Starch-Based Bioplastic Films for School Packaging Prototypes. Journal of Young Scientists & Engineers, 14(4), 12-26. https://doi.org/10.35940/jyse.MAT.2026.140405',
		figure: {
			title: 'Stress-Strain Curves for Four Film Formulations',
			caption:
				'Figure 5 presents representative tensile curves and highlights the formulation with the best strength-flexibility balance.'
		}
	},
	{
		slug: 'smart-greenhouse-soil-moisture-control',
		title: 'Rule-Based Soil Moisture Control for a Compact Automated Greenhouse',
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
			'This paper describes a microcontroller-based irrigation controller for a mini greenhouse used in student agriculture experiments. The system uses threshold rules from soil moisture sensors and ambient temperature readings to schedule pump operation. Over a 30-day basil growth trial, automated control reduced water use by 21% compared with manual watering while maintaining similar plant height and leaf count. The implementation is designed for reproducible deployment in school laboratories.',
		tags: ['Agricultural Engineering', 'IoT', 'Control Systems'],
		issueId: 'v14i4',
		publishedOn: toIsoDateString(olderIssueDate),
		doi: '10.35940/jyse.AGR.2026.140406',
		citation:
			'Ahmed, L., & Choi, M. (2026). Rule-Based Soil Moisture Control for a Student-Built Mini Greenhouse. Journal of Young Scientists & Engineers, 14(4), 27-38. https://doi.org/10.35940/jyse.AGR.2026.140406',
		figure: {
			title: 'Water Usage and Plant Growth Comparison',
			caption:
				'Figure 6 compares cumulative water consumption and growth outcomes between manual and automated irrigation groups.'
		}
	},
	{
		slug: 'edge-inference-wildfire-smoke-nowcasting',
		title: 'Edge-Inference Pipeline for Short-Horizon Wildfire Smoke Nowcasting',
		authors: [
			{
				name: 'Nadia Torres',
				affiliation: 'University of California, Davis',
				role: 'Author'
			},
			{
				name: 'Ethan Clarke',
				affiliation: 'Georgia Institute of Technology, First-Year Engineering',
				role: 'Co-author'
			}
		],
		abstract:
			'This study evaluates a lightweight edge-inference workflow for near-real-time smoke-density nowcasting from low-power camera nodes. The authors compare quantized CNN variants under variable haze and lighting conditions and report latency, power draw, and forecast consistency across 600 annotated windows. The selected model reduced median inference latency by 31% while preserving prediction agreement within 4.2% of a larger cloud baseline. The paper outlines deployment trade-offs for constrained environmental sensing systems.',
		tags: ['Environmental Monitoring', 'Machine Learning', 'Edge Computing'],
		issueId: 'v14i6',
		publishedOn: toIsoDateString(latestIssueDate),
		doi: '10.35940/jyse.AIML.2026.140603',
		citation:
			'Torres, N., & Clarke, E. (2026). Edge-Inference Pipeline for Short-Horizon Wildfire Smoke Nowcasting. Journal of Young Scientists & Engineers, 14(6), 23-35. https://doi.org/10.35940/jyse.AIML.2026.140603',
		figure: {
			title: 'Latency-Accuracy Trade-Off Across Edge Models',
			caption:
				'Figure 3 compares end-to-end inference latency and forecast agreement for model variants deployed on embedded hardware.'
		}
	},
	{
		slug: 'thermal-battery-pack-anomaly-screening',
		title: 'Thermal Imaging Workflow for Early Battery Pack Anomaly Screening',
		authors: [
			{
				name: 'Priya Nair',
				affiliation: 'Carnegie Mellon University, Biomedical Engineering',
				role: 'Author'
			},
			{
				name: 'Rohan Bedi',
				affiliation: 'University of Washington, Materials Science and Engineering',
				role: 'Co-author'
			}
		],
		abstract:
			'The authors present a thermal-imaging protocol for identifying early anomaly signatures in small lithium-ion battery modules. By combining frame differencing, region-threshold tracking, and cycle-level normalization, the workflow flags localized hotspots before threshold breach events. Across 120 controlled charge-discharge cycles, the method detected precursor anomalies an average of 14 minutes earlier than a voltage-only baseline. The study offers a reproducible screening framework for battery safety diagnostics.',
		tags: ['Energy Storage', 'Thermal Analysis', 'Safety Engineering'],
		issueId: 'v14i5',
		publishedOn: toIsoDateString(previousIssueDate),
		doi: '10.35940/jyse.ENE.2026.140505',
		citation:
			'Nair, P., & Bedi, R. (2026). Thermal Imaging Workflow for Early Battery Pack Anomaly Screening. Journal of Young Scientists & Engineers, 14(5), 47-58. https://doi.org/10.35940/jyse.ENE.2026.140505',
		figure: {
			title: 'Representative Thermal Drift Profiles',
			caption:
				'Figure 7 shows normalized hotspot trajectories across nominal and anomalous battery cycles.'
		}
	},
	{
		slug: 'federated-urban-noise-monitoring-benchmark',
		title: 'Federated Benchmarking for Privacy-Preserving Urban Noise Monitoring',
		authors: [
			{
				name: 'Ana Rodríguez',
				affiliation: 'Northeastern University, First-Year Engineering Program',
				role: 'Author'
			},
			{
				name: 'Megan Choi',
				affiliation: 'North Carolina State University, Chemical and Biomolecular Engineering',
				role: 'Co-author'
			}
		],
		abstract:
			'This paper benchmarks a federated learning setup for acoustic event classification where raw recordings remain local to collection nodes. The authors evaluate aggregation rounds, client-dropout tolerance, and class-balance strategies using a shared protocol across five independently curated datasets. The best configuration improved macro-F1 by 9.6 points over a non-adaptive baseline while preserving data locality. Results highlight practical controls for robust privacy-preserving environmental audio analytics.',
		tags: ['Signal Processing', 'Federated Learning', 'Smart Infrastructure'],
		issueId: 'v14i4',
		publishedOn: toIsoDateString(olderIssueDate),
		doi: '10.35940/jyse.DSP.2026.140407',
		citation:
			'Rodríguez, A., & Choi, M. (2026). Federated Benchmarking for Privacy-Preserving Urban Noise Monitoring. Journal of Young Scientists & Engineers, 14(4), 39-52. https://doi.org/10.35940/jyse.DSP.2026.140407',
		figure: {
			title: 'Macro-F1 by Aggregation Strategy',
			caption:
				'Figure 8 compares performance across federated aggregation strategies under varying client-availability conditions.'
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
