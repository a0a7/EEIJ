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
const journalStartVolume = 1;
const latestArchiveVolume = latestIssueVolume;
const recentVolumesExcludedFromLegacyArchive = 2;

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

const latestAndFeaturedIssues: Issue[] = [
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
	},
	{
		id: 'v14i1',
		volume: 14,
		number: 1,
		season: 'January 2026',
		publicationDate: '2026-01-31',
		theme: 'Foundational Student Projects in Energy, Robotics, and Data Systems',
		coverLabel: 'Volume 14 • Issue 1'
	},
	{
		id: 'v13i12',
		volume: 13,
		number: 12,
		season: 'December 2025',
		publicationDate: '2025-12-31',
		theme: 'Applied Sensing and Data Collection for School-Led Research',
		coverLabel: 'Volume 13 • Issue 12'
	},
	{
		id: 'v13i11',
		volume: 13,
		number: 11,
		season: 'December 2025',
		publicationDate: '2025-12-09',
		theme: 'Historical Script Digitization and Handwritten Text Recognition',
		coverLabel: 'Volume 13 • Issue 11'
	}
];

const legacyVolumeArchiveIssues: Issue[] = Array.from(
	{
		length: Math.max(0, latestArchiveVolume - recentVolumesExcludedFromLegacyArchive)
	},
	(_, index) => {
		const volume = latestArchiveVolume - recentVolumesExcludedFromLegacyArchive - index;
		const publicationYear = Number(journal.firstYear) + (volume - journalStartVolume);
		return {
			id: `v${volume}i1`,
			volume,
			number: 1,
			season: `January ${publicationYear}`,
			publicationDate: `${publicationYear}-01-31`,
			theme: `Selected archive papers from Volume ${volume}`,
			coverLabel: `Volume ${volume} • Issue 1`
		};
	}
);

export const issues: Issue[] = [...latestAndFeaturedIssues, ...legacyVolumeArchiveIssues];

const articleSeedData: Article[] = [
	{
		slug: 'error-corrected-deep-learning-gregg-shorthand',
		title:
			'Error-corrected deep learning approach to handwritten text recognition of Gregg shorthand',
		authors: [
			{
				name: 'Alexander Weimer',
				affiliation: 'Minnetonka Research, 18301 MN-7, Minnetonka, MN 55345',
				role: 'Author'
			}
		],
		abstract:
			'Shorthand, also known as pen stenography, is a family of writing systems for English and other languages that emerged out of a need for a fast and efficient writing system in a predigital age. Of the many English shorthand systems, Gregg shorthand is the most prevalent (Zhai et al., 2018). While largely made obsolete by general-purpose computers, the cultural and legal value within old shorthand documents means that being able to efficiently scan shorthand documents into modern computer systems holds significant value. This investigation explored the implementation of a model built around a Gated Convolutional Neural network for purposes of handwritten text recognition of Gregg shorthand. An accuracy of 40.04% was achieved after minimal training. The finalized model is freely licensed and made available online for public access.',
		tags: ['Handwritten Text Recognition', 'Machine Learning', 'Shorthand'],
		issueId: 'v13i11',
		publishedOn: '2025-12-09',
		doi: '10.31224/4661',
		citation:
			'Weimer, A. (2025). Error-corrected deep learning approach to handwritten text recognition of Gregg shorthand. Journal of Young Scientists & Engineers, 13(11). https://doi.org/10.31224/4661',
		figure: {
			title: 'Training and Validation Accuracy',
			caption:
				'Figure 2 shows the progression of training and validation accuracy during model optimization.'
		}
	},
	{
		slug: 'campus-energy-dashboard-baseline-v14i1',
		title: 'Baseline Campus Energy Dashboard for Student-Led Power Monitoring',
		authors: [
			{
				name: 'Eliana Duarte',
				affiliation: 'Stanford University, School of Engineering',
				role: 'Author'
			}
		],
		abstract:
			'This paper presents a baseline design for a student-operated campus energy dashboard integrating smart-meter streams, occupancy schedules, and weather context. The dashboard supported weekly audit reviews and highlighted avoidable peak-load periods in common study spaces.',
		tags: ['Energy', 'Data Systems', 'Smart Infrastructure'],
		issueId: 'v14i1',
		publishedOn: '2026-01-31',
		doi: '10.35940/jyse.EEE.2026.140101',
		citation:
			'Duarte, E. (2026). Baseline Campus Energy Dashboard for Student-Led Power Monitoring. Journal of Young Scientists & Engineers, 14(1), 1-9. https://doi.org/10.35940/jyse.EEE.2026.140101',
		figure: {
			title: 'Daily Demand Curves by Building Zone',
			caption:
				'Figure 1 compares normalized weekday demand profiles across monitored classroom and lab zones.'
		}
	},
	{
		slug: 'introductory-robotics-slam-workflow-v14i1',
		title: 'Introductory SLAM Workflow for Low-Cost Educational Robots',
		authors: [
			{
				name: 'Ethan Clarke',
				affiliation: 'Georgia Institute of Technology, First-Year Engineering',
				role: 'Author'
			},
			{
				name: 'Maya Venkataraman',
				affiliation: 'Montgomery Blair High School',
				role: 'Co-author'
			}
		],
		abstract:
			'The authors evaluate a lightweight simultaneous localization and mapping workflow adapted for low-cost educational robots. The pipeline produced stable maps in classroom corridors and reduced navigation drift during repeated autonomous runs.',
		tags: ['Robotics', 'Sensors', 'Control Systems'],
		issueId: 'v14i1',
		publishedOn: '2026-01-31',
		doi: '10.35940/jyse.ROB.2026.140102',
		citation:
			'Clarke, E., & Venkataraman, M. (2026). Introductory SLAM Workflow for Low-Cost Educational Robots. Journal of Young Scientists & Engineers, 14(1), 10-20. https://doi.org/10.35940/jyse.ROB.2026.140102',
		figure: {
			title: 'Localization Drift Across Mapping Sessions',
			caption:
				'Figure 2 summarizes pose drift over repeated autonomous traversals in two indoor test layouts.'
		}
	},
	{
		slug: 'school-weather-station-network-v13i12',
		title: 'Distributed School Weather-Station Network for Local Microclimate Analysis',
		authors: [
			{
				name: 'Leila Ahmed',
				affiliation: 'Raleigh Charter High School',
				role: 'Author'
			}
		],
		abstract:
			'This work deploys a distributed weather-station network across school grounds to characterize microclimate variation. The collected data exposed persistent temperature and humidity gradients between shaded and exposed locations.',
		tags: ['Environmental Monitoring', 'Sensors', 'Data Collection'],
		issueId: 'v13i12',
		publishedOn: '2025-12-31',
		doi: '',
		citation:
			'Ahmed, L. (2025). Distributed School Weather-Station Network for Local Microclimate Analysis. Journal of Young Scientists & Engineers, 13(12). DOI pending assignment.',
		figure: {
			title: 'Microclimate Variation Across Campus Zones',
			caption:
				'Figure 3 presents temperature and humidity differences measured by station location over four weeks.'
		}
	},
	{
		slug: 'classroom-network-latency-audit-v13i12',
		title: 'Latency Audit of Classroom IoT Networks Under Peak Device Load',
		authors: [
			{
				name: 'Noah Kim',
				affiliation: 'Palo Alto High School',
				role: 'Author'
			},
			{
				name: 'Jordan Patel',
				affiliation: 'Thomas Jefferson High School for Science and Technology',
				role: 'Co-author'
			}
		],
		abstract:
			'The paper audits classroom network latency behavior when many student IoT devices publish telemetry simultaneously. Results identify queueing thresholds and practical routing adjustments that reduce packet delay variation.',
		tags: ['IoT', 'Networking', 'Performance Analysis'],
		issueId: 'v13i12',
		publishedOn: '2025-12-31',
		doi: '',
		citation:
			'Kim, N., & Patel, J. (2025). Latency Audit of Classroom IoT Networks Under Peak Device Load. Journal of Young Scientists & Engineers, 13(12). DOI pending assignment.',
		figure: {
			title: 'Latency Percentiles by Device Count',
			caption: 'Figure 4 compares median and tail latencies as active publisher counts increase.'
		}
	},
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
	},
	{
		slug: 'autonomous-crop-row-following-mini-rover',
		title: 'Autonomous Crop-Row Following with a Mini Rover for School Field Plots',
		authors: [
			{
				name: 'Noah Kim',
				affiliation: 'Palo Alto High School',
				role: 'Author'
			}
		],
		abstract:
			'This study evaluates a lightweight vision and control stack for autonomous row-following in small student-managed crop plots. The rover maintained stable tracking across mixed lighting conditions and reduced manual guidance time during routine field observations.',
		tags: ['Robotics', 'Computer Vision', 'Agricultural Engineering'],
		issueId: 'v14i6',
		publishedOn: toIsoDateString(latestIssueDate),
		doi: '10.35940/jyse.ROB.2026.140604',
		citation:
			'Kim, N. (2026). Autonomous Crop-Row Following with a Mini Rover for School Field Plots. Journal of Young Scientists & Engineers, 14(6), 36-44. https://doi.org/10.35940/jyse.ROB.2026.140604',
		figure: {
			title: 'Row-Tracking Error by Lighting Condition',
			caption: 'Figure 9 shows lateral tracking error measured in morning, noon, and evening runs.'
		}
	},
	{
		slug: 'low-power-campus-water-leak-detector',
		title: 'Low-Power Campus Water Leak Detection with Edge Acoustic Sensing',
		authors: [
			{
				name: 'Maya Venkataraman',
				affiliation: 'Montgomery Blair High School',
				role: 'Author'
			},
			{
				name: 'Nadia Torres',
				affiliation: 'University of California, Davis',
				role: 'Co-author'
			}
		],
		abstract:
			'The authors present an edge-acoustic pipeline for identifying leak-like signatures in campus utility lines using low-power microphone nodes. The approach improved early event detection while keeping battery consumption within practical maintenance windows.',
		tags: ['Embedded Systems', 'Signal Processing', 'Smart Infrastructure'],
		issueId: 'v14i6',
		publishedOn: toIsoDateString(latestIssueDate),
		doi: '10.35940/jyse.IOT.2026.140605',
		citation:
			'Venkataraman, M., & Torres, N. (2026). Low-Power Campus Water Leak Detection with Edge Acoustic Sensing. Journal of Young Scientists & Engineers, 14(6), 45-54. https://doi.org/10.35940/jyse.IOT.2026.140605',
		figure: {
			title: 'Detection Precision Across Pipe Sections',
			caption:
				'Figure 10 compares leak detection precision and recall across indoor and outdoor utility segments.'
		}
	},
	{
		slug: 'gantry-3d-printer-vibration-compensation',
		title: 'Vibration Compensation Profiles for Student-Built Gantry 3D Printers',
		authors: [
			{
				name: 'Ethan Clarke',
				affiliation: 'Georgia Institute of Technology, First-Year Engineering',
				role: 'Author'
			}
		],
		abstract:
			'This paper tests motion-profile tuning and software compensation methods for reducing ringing artifacts in open-frame gantry printers. A simple calibration routine lowered edge ghosting and improved dimensional consistency in repeated benchmark prints.',
		tags: ['Manufacturing', 'Control Systems', 'Mechanical Engineering'],
		issueId: 'v14i6',
		publishedOn: toIsoDateString(latestIssueDate),
		doi: '10.35940/jyse.MFG.2026.140606',
		citation:
			'Clarke, E. (2026). Vibration Compensation Profiles for Student-Built Gantry 3D Printers. Journal of Young Scientists & Engineers, 14(6), 55-63. https://doi.org/10.35940/jyse.MFG.2026.140606',
		figure: {
			title: 'Surface Ringing Before and After Tuning',
			caption: 'Figure 11 reports ringing amplitude across three compensation profiles.'
		}
	},
	{
		slug: 'student-built-microgrid-load-forecasting',
		title: 'Short-Horizon Load Forecasting for a Student-Built Campus Microgrid',
		authors: [
			{
				name: 'Eliana Duarte',
				affiliation: 'Stanford University, School of Engineering',
				role: 'Author'
			},
			{
				name: 'Jordan Patel',
				affiliation: 'Thomas Jefferson High School for Science and Technology',
				role: 'Co-author'
			}
		],
		abstract:
			'The study compares linear and tree-based forecasting models for 15-minute campus microgrid demand prediction. The selected model reduced forecast error during peak transitions and supported safer battery dispatch planning.',
		tags: ['Energy', 'Machine Learning', 'Electrical Engineering'],
		issueId: 'v14i6',
		publishedOn: toIsoDateString(latestIssueDate),
		doi: '10.35940/jyse.EEE.2026.140607',
		citation:
			'Duarte, E., & Patel, J. (2026). Short-Horizon Load Forecasting for a Student-Built Campus Microgrid. Journal of Young Scientists & Engineers, 14(6), 64-73. https://doi.org/10.35940/jyse.EEE.2026.140607',
		figure: {
			title: 'Forecast Error Distribution by Model',
			caption: 'Figure 12 compares MAPE and peak-event errors across baseline and tuned models.'
		}
	},
	{
		slug: 'wearable-emg-gesture-classifier',
		title: 'Wearable EMG Gesture Classification for Introductory Assistive Interfaces',
		authors: [
			{
				name: 'Priya Nair',
				affiliation: 'Carnegie Mellon University, Biomedical Engineering',
				role: 'Author'
			}
		],
		abstract:
			'This work evaluates a low-cost wearable EMG band for classifying hand gestures in student assistive-interface projects. A compact classifier achieved robust performance on five gestures with minimal calibration time.',
		tags: ['Biomedical Engineering', 'Machine Learning', 'Signal Processing'],
		issueId: 'v14i6',
		publishedOn: toIsoDateString(latestIssueDate),
		doi: '10.35940/jyse.BME.2026.140608',
		citation:
			'Nair, P. (2026). Wearable EMG Gesture Classification for Introductory Assistive Interfaces. Journal of Young Scientists & Engineers, 14(6), 74-82. https://doi.org/10.35940/jyse.BME.2026.140608',
		figure: {
			title: 'Confusion Matrix for Five Gesture Classes',
			caption:
				'Figure 13 summarizes gesture-level precision and recall after feature normalization.'
		}
	},
	{
		slug: 'low-cost-river-ph-mapper',
		title: 'Low-Cost River pH Mapping with Student-Deployed Drifting Sensor Pods',
		authors: [
			{
				name: 'Leila Ahmed',
				affiliation: 'Raleigh Charter High School',
				role: 'Author'
			}
		],
		abstract:
			'The author developed floating sensor pods to map pH variation along short river sections used in school field studies. Repeated deployments showed stable calibration and revealed consistent local gradients near drainage inlets.',
		tags: ['Environmental Monitoring', 'Sensors', 'Water Systems'],
		issueId: 'v14i6',
		publishedOn: toIsoDateString(latestIssueDate),
		doi: '10.35940/jyse.ENV.2026.140609',
		citation:
			'Ahmed, L. (2026). Low-Cost River pH Mapping with Student-Deployed Drifting Sensor Pods. Journal of Young Scientists & Engineers, 14(6), 83-91. https://doi.org/10.35940/jyse.ENV.2026.140609',
		figure: {
			title: 'pH Heatmap Along Sample Transects',
			caption: 'Figure 14 presents interpolated pH values across repeated downstream sampling runs.'
		}
	},
	{
		slug: 'classroom-seismic-alert-node-benchmark',
		title: 'Benchmarking Classroom Seismic Alert Nodes for Rapid Event Notification',
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
			}
		],
		abstract:
			'This study benchmarks low-cost accelerometer nodes configured for classroom seismic alert prototypes. The best setup balanced sensitivity and false-alert control while preserving low-latency messaging performance.',
		tags: ['Sensors', 'Embedded Systems', 'Safety Engineering'],
		issueId: 'v14i6',
		publishedOn: toIsoDateString(latestIssueDate),
		doi: '10.35940/jyse.SEN.2026.140610',
		citation:
			'Marin, S., & Bedi, R. (2026). Benchmarking Classroom Seismic Alert Nodes for Rapid Event Notification. Journal of Young Scientists & Engineers, 14(6), 92-101. https://doi.org/10.35940/jyse.SEN.2026.140610',
		figure: {
			title: 'Alert Latency by Threshold Profile',
			caption:
				'Figure 15 compares event alert latency and false-trigger rates across node profiles.'
		}
	},
	{
		slug: 'compact-hydrogen-electrolyzer-safety-study',
		title: 'Safety Characterization of a Compact Educational Hydrogen Electrolyzer',
		authors: [
			{
				name: 'Peter Halvorsen',
				affiliation: 'Northeastern University, Mechanical and Industrial Engineering',
				role: 'Author'
			}
		],
		abstract:
			'The author reports temperature, pressure, and gas-flow behavior for a compact electrolyzer used in supervised student labs. The resulting safety envelope supports repeatable operation guidance for introductory clean-energy demonstrations.',
		tags: ['Energy', 'Safety Engineering', 'Chemical Engineering'],
		issueId: 'v14i6',
		publishedOn: toIsoDateString(latestIssueDate),
		doi: '10.35940/jyse.CHE.2026.140611',
		citation:
			'Halvorsen, P. (2026). Safety Characterization of a Compact Educational Hydrogen Electrolyzer. Journal of Young Scientists & Engineers, 14(6), 102-111. https://doi.org/10.35940/jyse.CHE.2026.140611',
		figure: {
			title: 'Operational Safety Envelope',
			caption:
				'Figure 16 maps measured pressure-temperature regions observed during controlled electrolyzer runs.'
		}
	},
	{
		slug: 'recycled-asphalt-brick-compression-tests',
		title: 'Compression Testing of Recycled Asphalt-Brick Blends for Walkway Prototypes',
		authors: [
			{
				name: 'Ana Rodríguez',
				affiliation: 'Northeastern University, First-Year Engineering Program',
				role: 'Author'
			}
		],
		abstract:
			'This paper evaluates compressive strength and water absorption of walkway bricks produced with recycled asphalt fractions. A mid-range blend achieved favorable strength-retention trade-offs for low-load pedestrian use.',
		tags: ['Civil Engineering', 'Sustainability', 'Materials Engineering'],
		issueId: 'v14i5',
		publishedOn: toIsoDateString(previousIssueDate),
		doi: '10.35940/jyse.CEE.2026.140506',
		citation:
			'Rodríguez, A. (2026). Compression Testing of Recycled Asphalt-Brick Blends for Walkway Prototypes. Journal of Young Scientists & Engineers, 14(5), 59-67. https://doi.org/10.35940/jyse.CEE.2026.140506',
		figure: {
			title: 'Compressive Strength by Blend Ratio',
			caption:
				'Figure 17 compares mean compressive strength and variance across recycled-content groups.'
		}
	},
	{
		slug: 'image-based-leaf-disease-screening',
		title: 'Image-Based Leaf Disease Screening with Lightweight Classroom Models',
		authors: [
			{
				name: 'Megan Choi',
				affiliation: 'North Carolina State University, Chemical and Biomolecular Engineering',
				role: 'Author'
			},
			{
				name: 'Leila Ahmed',
				affiliation: 'Raleigh Charter High School',
				role: 'Co-author'
			}
		],
		abstract:
			'The authors benchmark compact image-classification models for early leaf-disease screening in school greenhouse setups. The best model improved macro-F1 under class imbalance while remaining deployable on low-cost devices.',
		tags: ['Machine Learning', 'Agricultural Engineering', 'Computer Vision'],
		issueId: 'v14i5',
		publishedOn: toIsoDateString(previousIssueDate),
		doi: '10.35940/jyse.AIML.2026.140507',
		citation:
			'Choi, M., & Ahmed, L. (2026). Image-Based Leaf Disease Screening with Lightweight Classroom Models. Journal of Young Scientists & Engineers, 14(5), 68-77. https://doi.org/10.35940/jyse.AIML.2026.140507',
		figure: {
			title: 'Model Performance by Disease Class',
			caption:
				'Figure 18 summarizes per-class precision and recall for compact convolutional baselines.'
		}
	},
	{
		slug: 'acoustic-panel-reverberation-measurements',
		title: 'Reverberation Measurements for DIY Acoustic Panels in Small Classrooms',
		authors: [
			{
				name: 'Jordan Patel',
				affiliation: 'Thomas Jefferson High School for Science and Technology',
				role: 'Author'
			}
		],
		abstract:
			'This work measures reverberation-time reduction from low-cost acoustic panel designs assembled by students. Results identify panel spacing and placement patterns that deliver the largest speech-intelligibility improvements.',
		tags: ['Acoustics', 'Civil Engineering', 'Education Technology'],
		issueId: 'v14i5',
		publishedOn: toIsoDateString(previousIssueDate),
		doi: '10.35940/jyse.ACO.2026.140508',
		citation:
			'Patel, J. (2026). Reverberation Measurements for DIY Acoustic Panels in Small Classrooms. Journal of Young Scientists & Engineers, 14(5), 78-86. https://doi.org/10.35940/jyse.ACO.2026.140508',
		figure: {
			title: 'RT60 Reduction Across Panel Layouts',
			caption: 'Figure 19 reports RT60 outcomes for four panel density and spacing configurations.'
		}
	},
	{
		slug: 'open-source-spectrometer-calibration',
		title: 'Calibration Workflow for an Open-Source Classroom Spectrometer',
		authors: [
			{
				name: 'Nadia Torres',
				affiliation: 'University of California, Davis',
				role: 'Author'
			}
		],
		abstract:
			'The paper presents a wavelength and intensity calibration workflow for a student-assembled open-source spectrometer. The procedure improved repeatability across sessions and reduced cross-device measurement drift.',
		tags: ['Instrumentation', 'Optics', 'Experimental Methods'],
		issueId: 'v14i5',
		publishedOn: toIsoDateString(previousIssueDate),
		doi: '10.35940/jyse.OPT.2026.140509',
		citation:
			'Torres, N. (2026). Calibration Workflow for an Open-Source Classroom Spectrometer. Journal of Young Scientists & Engineers, 14(5), 87-95. https://doi.org/10.35940/jyse.OPT.2026.140509',
		figure: {
			title: 'Wavelength Error Before/After Calibration',
			caption: 'Figure 20 compares peak-location error across reference emission lines.'
		}
	},
	{
		slug: 'solar-desalination-wick-material-comparison',
		title: 'Comparing Wick Materials for Passive Solar Desalination Prototypes',
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
			}
		],
		abstract:
			'This study compares wick materials for passive solar stills used in educational desalination demonstrations. A cotton-cellulose blend improved distillate output while maintaining stable long-run capillary transport.',
		tags: ['Water Systems', 'Sustainability', 'Thermal Analysis'],
		issueId: 'v14i5',
		publishedOn: toIsoDateString(previousIssueDate),
		doi: '10.35940/jyse.ENV.2026.140510',
		citation:
			'Rodríguez, A., & Halvorsen, P. (2026). Comparing Wick Materials for Passive Solar Desalination Prototypes. Journal of Young Scientists & Engineers, 14(5), 96-105. https://doi.org/10.35940/jyse.ENV.2026.140510',
		figure: {
			title: 'Daily Distillate Yield by Wick Type',
			caption: 'Figure 21 reports desalination output normalized by incident solar energy.'
		}
	},
	{
		slug: 'lidar-hallway-navigation-benchmark',
		title: 'Lidar-Based Hallway Navigation Benchmark for Educational Indoor Robots',
		authors: [
			{
				name: 'Ethan Clarke',
				affiliation: 'Georgia Institute of Technology, First-Year Engineering',
				role: 'Author'
			},
			{
				name: 'Maya Venkataraman',
				affiliation: 'Montgomery Blair High School',
				role: 'Co-author'
			}
		],
		abstract:
			'The authors benchmark reactive and map-based navigation stacks on a standardized hallway course for student robotics teams. The selected configuration reduced collision events while preserving traversal speed under clutter.',
		tags: ['Robotics', 'Sensors', 'Control Systems'],
		issueId: 'v14i5',
		publishedOn: toIsoDateString(previousIssueDate),
		doi: '10.35940/jyse.ROB.2026.140511',
		citation:
			'Clarke, E., & Venkataraman, M. (2026). Lidar-Based Hallway Navigation Benchmark for Educational Indoor Robots. Journal of Young Scientists & Engineers, 14(5), 106-115. https://doi.org/10.35940/jyse.ROB.2026.140511',
		figure: {
			title: 'Completion Time and Collision Rate',
			caption: 'Figure 22 compares navigation performance across three hallway obstacle scenarios.'
		}
	},
	{
		slug: 'biodegradable-foam-density-optimization',
		title: 'Density Optimization of Biodegradable Packing Foam from Starch Blends',
		authors: [
			{
				name: 'Sofia Marin',
				affiliation: 'University of Washington, Engineering Undeclared Program',
				role: 'Author'
			}
		],
		abstract:
			'This work explores starch-additive ratios for producing biodegradable foam inserts with controlled density. A narrow formulation window improved cushioning efficiency without major moisture stability losses.',
		tags: ['Materials Engineering', 'Sustainability', 'Manufacturing'],
		issueId: 'v14i4',
		publishedOn: toIsoDateString(olderIssueDate),
		doi: '10.35940/jyse.MAT.2026.140408',
		citation:
			'Marin, S. (2026). Density Optimization of Biodegradable Packing Foam from Starch Blends. Journal of Young Scientists & Engineers, 14(4), 53-61. https://doi.org/10.35940/jyse.MAT.2026.140408',
		figure: {
			title: 'Foam Density vs. Expansion Ratio',
			caption: 'Figure 23 shows density and compression recovery across tested starch formulations.'
		}
	},
	{
		slug: 'school-lab-co2-capture-column',
		title: 'Bench-Scale CO2 Capture Column for School Laboratory Demonstrations',
		authors: [
			{
				name: 'Megan Choi',
				affiliation: 'North Carolina State University, Chemical and Biomolecular Engineering',
				role: 'Author'
			}
		],
		abstract:
			'The paper presents a compact packed-column setup for demonstrating gas absorption fundamentals with safe instructional materials. Students observed clear concentration changes and pressure-drop trends suitable for course labs.',
		tags: ['Chemical Engineering', 'Environmental Engineering', 'Instrumentation'],
		issueId: 'v14i4',
		publishedOn: toIsoDateString(olderIssueDate),
		doi: '10.35940/jyse.CHE.2026.140409',
		citation:
			'Choi, M. (2026). Bench-Scale CO2 Capture Column for School Laboratory Demonstrations. Journal of Young Scientists & Engineers, 14(4), 62-70. https://doi.org/10.35940/jyse.CHE.2026.140409',
		figure: {
			title: 'Outlet CO2 Concentration by Packing Height',
			caption:
				'Figure 24 reports normalized outlet concentration across flow and packing conditions.'
		}
	},
	{
		slug: 'bluetooth-mesh-evacuation-signage',
		title: 'Bluetooth Mesh Evacuation Signage for Resilient Indoor Wayfinding',
		authors: [
			{
				name: 'Noah Kim',
				affiliation: 'Palo Alto High School',
				role: 'Author'
			},
			{
				name: 'Jordan Patel',
				affiliation: 'Thomas Jefferson High School for Science and Technology',
				role: 'Co-author'
			}
		],
		abstract:
			'This study evaluates a Bluetooth mesh network for synchronizing dynamic evacuation signage in school buildings. The system sustained robust update delivery during node failures and improved route guidance consistency.',
		tags: ['IoT', 'Safety Engineering', 'Smart Infrastructure'],
		issueId: 'v14i4',
		publishedOn: toIsoDateString(olderIssueDate),
		doi: '10.35940/jyse.IOT.2026.140410',
		citation:
			'Kim, N., & Patel, J. (2026). Bluetooth Mesh Evacuation Signage for Resilient Indoor Wayfinding. Journal of Young Scientists & Engineers, 14(4), 71-80. https://doi.org/10.35940/jyse.IOT.2026.140410',
		figure: {
			title: 'Packet Delivery Ratio Under Node Loss',
			caption: 'Figure 25 compares signage update reliability as mesh topology degrades.'
		}
	},
	{
		slug: 'thermal-comfort-predictor-classrooms',
		title: 'Thermal Comfort Prediction in Classrooms Using Low-Cost Multi-Sensor Data',
		authors: [
			{
				name: 'Eliana Duarte',
				affiliation: 'Stanford University, School of Engineering',
				role: 'Author'
			}
		],
		abstract:
			'The author models classroom thermal comfort from temperature, humidity, and airflow measurements captured by student-installed sensors. The resulting predictor aligned well with occupant surveys and supported practical ventilation adjustments.',
		tags: ['Environmental Monitoring', 'Machine Learning', 'Building Systems'],
		issueId: 'v14i4',
		publishedOn: toIsoDateString(olderIssueDate),
		doi: '10.35940/jyse.AIML.2026.140411',
		citation:
			'Duarte, E. (2026). Thermal Comfort Prediction in Classrooms Using Low-Cost Multi-Sensor Data. Journal of Young Scientists & Engineers, 14(4), 81-89. https://doi.org/10.35940/jyse.AIML.2026.140411',
		figure: {
			title: 'Comfort Prediction Error by Time Window',
			caption: 'Figure 26 summarizes prediction error across school-day occupancy periods.'
		}
	},
	{
		slug: 'low-cost-wind-tunnel-airfoil-labs',
		title: 'Low-Cost Wind Tunnel Protocols for Introductory Airfoil Laboratory Labs',
		authors: [
			{
				name: 'Peter Halvorsen',
				affiliation: 'Northeastern University, Mechanical and Industrial Engineering',
				role: 'Author'
			},
			{
				name: 'Nadia Torres',
				affiliation: 'University of California, Davis',
				role: 'Co-author'
			}
		],
		abstract:
			'This paper proposes reproducible wind-tunnel protocols for measuring lift and drag in classroom airfoil activities. The protocol improved run-to-run consistency and reduced setup time for student teams.',
		tags: ['Aerospace Engineering', 'Experimental Methods', 'Education Technology'],
		issueId: 'v14i4',
		publishedOn: toIsoDateString(olderIssueDate),
		doi: '10.35940/jyse.AER.2026.140412',
		citation:
			'Halvorsen, P., & Torres, N. (2026). Low-Cost Wind Tunnel Protocols for Introductory Airfoil Laboratory Labs. Journal of Young Scientists & Engineers, 14(4), 90-99. https://doi.org/10.35940/jyse.AER.2026.140412',
		figure: {
			title: 'Lift and Drag Repeatability',
			caption: 'Figure 27 compares coefficient variance before and after protocol standardization.'
		}
	},
	{
		slug: 'peroxide-fuel-cell-catalyst-screen',
		title: 'Rapid Catalyst Screening for Educational Hydrogen Peroxide Fuel Cells',
		authors: [
			{
				name: 'Rohan Bedi',
				affiliation: 'University of Washington, Materials Science and Engineering',
				role: 'Author'
			}
		],
		abstract:
			'The author evaluates low-cost catalyst candidates in a small hydrogen peroxide fuel-cell teaching platform. The screening approach identified stable high-activity options suitable for repeatable classroom experiments.',
		tags: ['Materials Engineering', 'Electrochemistry', 'Energy'],
		issueId: 'v14i4',
		publishedOn: toIsoDateString(olderIssueDate),
		doi: '10.35940/jyse.ENE.2026.140413',
		citation:
			'Bedi, R. (2026). Rapid Catalyst Screening for Educational Hydrogen Peroxide Fuel Cells. Journal of Young Scientists & Engineers, 14(4), 100-109. https://doi.org/10.35940/jyse.ENE.2026.140413',
		figure: {
			title: 'Power Density Across Catalyst Candidates',
			caption:
				'Figure 28 shows normalized cell output and degradation trends across tested catalysts.'
		}
	},
	{
		slug: 'cursive-archive-line-segmentation',
		title: 'Line Segmentation Strategies for Noisy Cursive Archive Pages',
		authors: [
			{
				name: 'Alexandra Ballbach',
				affiliation: 'Minnetonka Research, 18301 MN-7, Minnetonka, MN 55345',
				role: 'Author'
			}
		],
		abstract:
			'This paper benchmarks projection-based and contour-based line segmentation methods on degraded cursive pages. A hybrid approach reduced merge and split errors for downstream handwriting recognition workflows.',
		tags: ['Handwritten Text Recognition', 'Document Analysis', 'Machine Learning'],
		issueId: 'v13i11',
		publishedOn: '2025-12-09',
		doi: '',
		citation:
			'Weimer, A. (2025). Line Segmentation Strategies for Noisy Cursive Archive Pages. Journal of Young Scientists & Engineers, 13(11). DOI pending assignment.',
		figure: {
			title: 'Segmentation Error by Method',
			caption:
				'Figure 29 compares over-segmentation and under-segmentation counts on validation pages.'
		}
	},
	{
		slug: 'ink-bleed-removal-classical-filters',
		title: 'Classical Filtering for Ink-Bleed Removal in Historical Notes',
		authors: [
			{
				name: 'Jonas Kahnwald',
				affiliation: 'Minnetonka Research, 18301 MN-7, Minnetonka, MN 55345',
				role: 'Author'
			}
		],
		abstract:
			'The study evaluates non-neural denoising filters for suppressing bleed-through in scanned shorthand notes. Combined frequency and morphology filtering improved text legibility while preserving stroke continuity.',
		tags: ['Document Analysis', 'Image Processing', 'Shorthand'],
		issueId: 'v13i11',
		publishedOn: '2025-12-09',
		doi: '',
		citation:
			'Weimer, A. (2025). Classical Filtering for Ink-Bleed Removal in Historical Notes. Journal of Young Scientists & Engineers, 13(11). DOI pending assignment.',
		figure: {
			title: 'Legibility Scores by Filter Pipeline',
			caption: 'Figure 30 reports reviewer legibility scores across denoising configurations.'
		}
	},
	{
		slug: 'shorthand-symbol-language-model-baseline',
		title: 'Token-Level Language Model Baseline for Gregg Shorthand Symbols',
		authors: [
			{
				name: 'Thomas Jackson',
				affiliation: 'Minnetonka Research, 18301 MN-7, Minnetonka, MN 55345',
				role: 'Author'
			}
		],
		abstract:
			'This work presents a symbol-sequence language model baseline to support shorthand transcription correction. The model reduced character-sequence perplexity and improved post-recognition consistency on held-out notes.',
		tags: ['Machine Learning', 'Language Modeling', 'Shorthand'],
		issueId: 'v13i11',
		publishedOn: '2025-12-09',
		doi: '',
		citation:
			'Weimer, A. (2025). Token-Level Language Model Baseline for Gregg Shorthand Symbols. Journal of Young Scientists & Engineers, 13(11). DOI pending assignment.',
		figure: {
			title: 'Perplexity by Context Window',
			caption: 'Figure 31 compares shorthand token perplexity across model context lengths.'
		}
	},
	{
		slug: 'archival-page-dewarping-mobile-photography',
		title: 'Archival Page Dewarping from Mobile Phone Photography',
		authors: [
			{
				name: 'Li Fu',
				affiliation: 'Minnetonka Research, 18301 MN-7, Minnetonka, MN 55345',
				role: 'Author'
			}
		],
		abstract:
			'The author studies geometric dewarping of photographed shorthand pages captured with handheld devices. The proposed correction pipeline improved line alignment and boosted downstream OCR stability.',
		tags: ['Computer Vision', 'Document Analysis', 'Shorthand'],
		issueId: 'v13i11',
		publishedOn: '2025-12-09',
		doi: '',
		citation:
			'Weimer, A. (2025). Archival Page Dewarping from Mobile Phone Photography. Journal of Young Scientists & Engineers, 13(11). DOI pending assignment.',
		figure: {
			title: 'Geometric Distortion Before/After Correction',
			caption:
				'Figure 32 shows representative page dewarping outcomes under perspective distortion.'
		}
	},
	{
		slug: 'few-shot-writer-adaptation-gru',
		title: 'Few-Shot Writer Adaptation for GRU-Based Shorthand Recognition',
		authors: [
			{
				name: 'Missy Muller',
				affiliation: 'Minnetonka Research, 18301 MN-7, Minnetonka, MN 55345',
				role: 'Author'
			}
		],
		abstract:
			'This paper evaluates few-shot adaptation for handling writer-specific variation in Gregg shorthand recognition. Lightweight fine-tuning steps improved word accuracy for unseen writers with limited labeled samples.',
		tags: ['Handwritten Text Recognition', 'Machine Learning', 'Shorthand'],
		issueId: 'v13i11',
		publishedOn: '2025-12-09',
		doi: '',
		citation:
			'Weimer, A. (2025). Few-Shot Writer Adaptation for GRU-Based Shorthand Recognition. Journal of Young Scientists & Engineers, 13(11). DOI pending assignment.',
		figure: {
			title: 'Accuracy Gain vs. Adaptation Sample Count',
			caption: 'Figure 33 plots writer-specific accuracy improvement by number of adaptation lines.'
		}
	},
	{
		slug: 'script-annotation-tool-interrater-study',
		title: 'Inter-Rater Reliability Study for a Shorthand Annotation Tool',
		authors: [
			{
				name: 'Aleana Johnson',
				affiliation: 'Minnetonka Research, 18301 MN-7, Minnetonka, MN 55345',
				role: 'Author'
			}
		],
		abstract:
			'The study reports inter-rater agreement metrics for a custom shorthand transcription annotation interface. Results identify annotation rules that improve consistency and reduce ambiguous symbol labeling.',
		tags: ['Annotation', 'Document Analysis', 'Research Methods'],
		issueId: 'v13i11',
		publishedOn: '2025-12-09',
		doi: '',
		citation:
			'Weimer, A. (2025). Inter-Rater Reliability Study for a Shorthand Annotation Tool. Journal of Young Scientists & Engineers, 13(11). DOI pending assignment.',
		figure: {
			title: 'Agreement Metrics Across Annotation Rules',
			caption: 'Figure 34 summarizes Cohen kappa scores by labeling guideline revision.'
		}
	},
	{
		slug: 'document-binarization-low-light-notes',
		title: 'Robust Document Binarization for Low-Light Shorthand Notes',
		authors: [
			{
				name: 'Jaden Smith',
				affiliation: 'Minnetonka Research, 18301 MN-7, Minnetonka, MN 55345',
				role: 'Author'
			}
		],
		abstract:
			'This paper compares adaptive thresholding strategies for low-light shorthand note images captured in archival conditions. A contrast-aware pipeline improved stroke retention while reducing background artifacts.',
		tags: ['Image Processing', 'Document Analysis', 'Handwritten Text Recognition'],
		issueId: 'v13i11',
		publishedOn: '2025-12-09',
		doi: '',
		citation:
			'Weimer, A. (2025). Robust Document Binarization for Low-Light Shorthand Notes. Journal of Young Scientists & Engineers, 13(11). DOI pending assignment.',
		figure: {
			title: 'Stroke Retention vs. Background Suppression',
			caption:
				'Figure 35 compares binarization quality metrics under uneven illumination conditions.'
		}
	},
	{
		slug: 'historical-ledger-table-structure-recovery',
		title: 'Table Structure Recovery in Historical Ledger-Style Shorthand Pages',
		authors: [
			{
				name: 'Zack Smith',
				affiliation: 'Minnetonka Research, 18301 MN-7, Minnetonka, MN 55345',
				role: 'Author'
			}
		],
		abstract:
			'The author evaluates rule-based and learned approaches for recovering table structure from ledger-like shorthand documents. The combined method improved row-column reconstruction and downstream field extraction reliability.',
		tags: ['Document Analysis', 'Machine Learning', 'Historical Records'],
		issueId: 'v13i11',
		publishedOn: '2025-12-09',
		doi: '',
		citation:
			'Weimer, A. (2025). Table Structure Recovery in Historical Ledger-Style Shorthand Pages. Journal of Young Scientists & Engineers, 13(11). DOI pending assignment.',
		figure: {
			title: 'Cell Reconstruction Accuracy by Method',
			caption: 'Figure 36 reports table cell reconstruction quality on annotated ledger samples.'
		}
	}
];

export const articles: Article[] = articleSeedData.sort((a, b) => {
	const dateDiff = new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime();
	if (dateDiff !== 0) return dateDiff;
	return a.title.localeCompare(b.title);
});

export const editorialBoard: BoardMember[] = [
	{
		name: 'Matthew Lease',
		role: 'Editor-in-Chief',
		affiliation: 'The University of Texas at Austin',
		interests: ['Applied Physics', 'Instrumentation', 'Research Methods'],
		bio: 'Oversees editorial quality and review consistency, with a focus on practical experimental design and responsible AI methods. He holds a PhD in information studies.'
	},
	{
		name: 'Elena Petrova',
		role: 'Managing Editor',
		affiliation: 'University of Glasgow',
		interests: ['Scientific Writing', 'Publication Ethics', 'Peer Review Workflows'],
		bio: 'Coordinates editorial operations and supports clear, fair peer-review communication across subject sections.'
	},
	{
		name: 'Omar Al-Hassan',
		role: 'Associate Editor (Materials & Devices)',
		affiliation: 'University of Portsmouth',
		interests: ['Materials Science', 'Device Prototyping', 'Testing Standards'],
		bio: 'Handles materials and device submissions, emphasizing reproducible prototyping and transparent evaluation criteria.'
	},
	{
		name: 'James R. Walker',
		role: 'Associate Editor (Robotics & Learning Systems)',
		affiliation: 'University of Leeds',
		interests: ['Robotics', 'Embedded Systems', 'Engineering Education'],
		bio: 'Leads review handling for robotics and learning systems, with emphasis on classroom-ready engineering applications.'
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
