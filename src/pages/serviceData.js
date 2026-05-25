export const serviceList = [
  {
    id: 'wtp',
    icon: 'fas fa-droplet',
    title: 'Water Treatment Plant (WTP)',
    shortDesc: 'Complete raw water treatment systems — coagulation, filtration, softening and disinfection for drinking & industrial use.',
    cardImage: '/images/2.png',
    tags: ['Drinking Water', 'Softening', 'Filtration', 'Disinfection'],
  },
  {
    id: 'stp',
    icon: 'fas fa-industry',
    title: 'Sewage Treatment Plant (STP)',
    shortDesc: 'MBR, MBBR & SBR technologies for residential, commercial & industrial clients with zero-discharge options.',
    cardImage: '/images/8.jpg',
    tags: ['MBR', 'MBBR', 'SBR', 'Zero Discharge'],
  },
  {
    id: 'ro',
    icon: 'fas fa-fill-drip',
    title: 'Reverse Osmosis (RO) Plants',
    shortDesc: 'High-recovery RO systems with energy-efficient pre-treatment, CIP skids and remote monitoring.',
    cardImage: '/images/6.jpg',
    tags: ['Industrial RO', 'Commercial RO', 'CIP', 'Membrane'],
  },
  {
    id: 'pumps',
    icon: 'fas fa-faucet-drip',
    title: 'Pump Systems & Automation',
    shortDesc: 'Multistage, submersible & centrifugal pumps with VFD panels, hydro-pneumatic systems and SCADA.',
    cardImage: '/images/5.jpg',
    tags: ['VFD', 'Submersible', 'Centrifugal', 'Automation'],
  },
  {
    id: 'etp',
    icon: 'fas fa-flask',
    title: 'Effluent Treatment Plant (ETP)',
    shortDesc: 'Chemical & biological ETP for industrial wastewater, heavy metal removal and process water recycling.',
    cardImage: '/images/4.jpg',
    tags: ['Chemical Treatment', 'Biological', 'ZLD', 'Recycling'],
  },
  {
    id: 'installation',
    icon: 'fas fa-hard-hat',
    title: 'Installation & Commissioning',
    shortDesc: 'End-to-end project execution — civil, mechanical, electrical, PLC/SCADA integration and validation.',
    cardImage: '/images/Operations.png',
    tags: ['Turnkey', 'PLC/SCADA', 'Civil', 'Electrical'],
  },
  {
    id: 'amc',
    icon: 'fas fa-handshake',
    title: 'AMC & O&M Contracts',
    shortDesc: 'Comprehensive annual maintenance contracts with 4-hr emergency SLA, spare parts cover and compliance reporting.',
    cardImage: '/images/Maintainance.png',
    tags: ['AMC', 'O&M', 'Breakdown Support', 'Compliance'],
    externalRoute: '/amc',
  },
  {
    id: 'lab',
    icon: 'fas fa-microscope',
    title: 'Lab Testing & Analysis',
    shortDesc: 'In-house water quality testing, treatability studies, compliance reporting and performance audits.',
    cardImage: '/images/9.jpg',
    tags: ['Water Testing', 'Treatability', 'Compliance', 'Audit'],
  },
]

export const serviceDetails = {
  wtp: {
    title: 'Water Treatment Plant (WTP)',
    tagline: 'Safe Water. Engineered from Source to Supply.',
    heroImage: '/images/3.jpg',
    overview: `A Water Treatment Plant (WTP) converts raw water from rivers, lakes, borewells or municipal
    supply into water that meets drinking, process or industrial quality standards. SVJ Eco Flow Systems
    designs and builds complete WTPs — from small packaged units for apartments and offices to large-capacity
    plants for industries, townships and municipal bodies. Every system is engineered around your feed-water
    chemistry and end-use requirements, ensuring consistent output quality and low operating costs.`,
    highlights: [
      { icon: 'fas fa-check-circle', text: 'Capacity: 1,000 LPH to 500 m³/hr and above' },
      { icon: 'fas fa-check-circle', text: 'Suitable for borewell, river, lake & municipal feed water' },
      { icon: 'fas fa-check-circle', text: 'Drinking water, process water & boiler feed applications' },
      { icon: 'fas fa-check-circle', text: 'Modular & packaged units for quick deployment' },
      { icon: 'fas fa-check-circle', text: 'IS 10500 / WHO drinking water standards compliant' },
      { icon: 'fas fa-check-circle', text: 'PLC-controlled with online turbidity, pH & chlorine monitoring' },
    ],
    process: [
      { step: '01', title: 'Raw Water Intake & Screening', desc: 'Raw water is drawn from the source through screens that remove large debris, leaves and coarse solids.' },
      { step: '02', title: 'Coagulation & Flocculation', desc: 'Coagulants (alum, PAC) are dosed and mixed to destabilise fine suspended particles, forming larger settleable flocs.' },
      { step: '03', title: 'Sedimentation / Clarification', desc: 'Flocs settle by gravity in a clarifier or lamella plate settler, producing a clear supernatant.' },
      { step: '04', title: 'Rapid Sand Filtration', desc: 'Water passes through dual-media (sand & anthracite) or multi-grade sand filters to remove residual turbidity.' },
      { step: '05', title: 'Activated Carbon & Softening', desc: 'Activated carbon removes odour, chlorine and organics. Ion-exchange softeners reduce hardness as required.' },
      { step: '06', title: 'Disinfection & Storage', desc: 'Chlorination, UV or ozone ensures pathogen-free water. Treated water is stored in food-grade overhead / underground tanks.' },
    ],
    midImage: '/images/10.jpg',
    midCaption: 'Aerial view of a multi-stage water treatment and clarification plant.',
    applications: [
      'Drinking water for apartments & townships',
      'Industrial process water supply',
      'Boiler & cooling tower feed water',
      'Hotels, resorts & hospitals',
      'Municipal & government water supply',
      'Food & beverage manufacturing',
    ],
    ctaText: 'Get a free WTP design consultation',
  },

  stp: {
    title: 'Sewage Treatment Plant (STP)',
    tagline: 'Clean Effluent. Zero Compromise.',
    heroImage: '/images/8.jpg',
    overview: `SVJ Eco Flow Systems designs and builds sewage treatment plants tailored to the exact
    volumetric and quality requirements of each client. Whether you need a compact STP for a gated
    community or a large-scale installation for an industrial township, we deliver systems that meet
    CPCB/SPCB discharge norms and enable treated water reuse for gardening, flushing and cooling towers.`,
    highlights: [
      { icon: 'fas fa-check-circle', text: 'Capacity range: 10 KLD to 5 MLD and above' },
      { icon: 'fas fa-check-circle', text: 'Technologies: MBR, MBBR, SBR, Activated Sludge' },
      { icon: 'fas fa-check-circle', text: 'Zero liquid discharge (ZLD) configurations available' },
      { icon: 'fas fa-check-circle', text: 'Treated water reuse for gardening, flushing & cooling' },
      { icon: 'fas fa-check-circle', text: 'CPCB / SPCB discharge norm compliant' },
      { icon: 'fas fa-check-circle', text: 'Online SCADA monitoring with remote alerts' },
    ],
    process: [
      { step: '01', title: 'Screening & Grit Removal', desc: 'Removal of coarse solids and grit to protect downstream equipment from damage and clogging.' },
      { step: '02', title: 'Primary Clarification', desc: 'Gravitational settling of suspended solids and floatable materials before biological treatment.' },
      { step: '03', title: 'Biological Treatment', desc: 'Aerobic/anaerobic microbial action (MBR / MBBR / SBR) degrades BOD, COD and ammonia.' },
      { step: '04', title: 'Secondary Clarification', desc: 'Separation of biological sludge from treated water in clarifier or membrane unit.' },
      { step: '05', title: 'Tertiary Filtration', desc: 'Sand, activated carbon and ultra-filtration for polishing the effluent to reuse quality.' },
      { step: '06', title: 'Disinfection & Reuse', desc: 'UV / chlorination ensures pathogen-free water ready for gardening, flushing or discharge.' },
    ],
    midImage: '/images/10.jpg',
    midCaption: 'Four-tank clarifier array — aerial view of one of our STP installations.',
    applications: ['Residential complexes & gated communities', 'Hotels & resorts', 'Hospitals & institutions', 'Industrial townships', 'Food & beverage plants'],
    ctaText: 'Get a free STP design consultation',
  },

  ro: {
    title: 'Reverse Osmosis (RO) Plants',
    tagline: 'Pure Water. Engineered Precisely.',
    heroImage: '/images/6.jpg',
    overview: `Our reverse osmosis systems are engineered for maximum recovery and minimum energy consumption.
    From drinking-water RO units for offices to high-capacity industrial plants requiring demineralised or
    ultra-pure water, SVJ Eco Flow covers the full spectrum. Every system includes a pre-treatment train
    designed for your specific feed-water chemistry, extending membrane life and reducing operating costs.`,
    highlights: [
      { icon: 'fas fa-check-circle', text: 'Capacity: 500 LPH to 500 m³/hr industrial plants' },
      { icon: 'fas fa-check-circle', text: 'High-rejection membranes: 99.5%+ TDS removal' },
      { icon: 'fas fa-check-circle', text: 'Energy recovery devices for large-scale plants' },
      { icon: 'fas fa-check-circle', text: 'Auto CIP (Clean-In-Place) skids included' },
      { icon: 'fas fa-check-circle', text: 'Pre-treatment: MMF, ACF, softener, antiscalant dosing' },
      { icon: 'fas fa-check-circle', text: 'PLC-controlled with online TDS / flow monitoring' },
    ],
    process: [
      { step: '01', title: 'Pre-Treatment', desc: 'Multi-media filtration, activated carbon and softening remove turbidity, chlorine and hardness.' },
      { step: '02', title: 'Antiscalant Dosing', desc: 'Chemical dosing prevents scaling on membranes, extending their service life significantly.' },
      { step: '03', title: 'High-Pressure Pumping', desc: 'Feed water is pressurised to 10–80 bar depending on feed TDS and membrane configuration.' },
      { step: '04', title: 'Membrane Separation', desc: 'Semi-permeable membranes reject dissolved salts, bacteria and micro-contaminants.' },
      { step: '05', title: 'Permeate Post-Treatment', desc: 'Remineralisation, pH correction and UV disinfection bring product water to spec.' },
      { step: '06', title: 'CIP & Monitoring', desc: 'Automated clean-in-place cycles and real-time performance logging protect the system.' },
    ],
    midImage: '/images/7.jpg',
    midCaption: 'Close-up of high-pressure pump manifold in an industrial RO installation.',
    applications: ['Drinking water for offices & institutions', 'Boiler feed water (demineralised)', 'Pharmaceutical & food-grade water', 'Textile & chemical process water', 'Car wash & laundry recycling'],
    ctaText: 'Request an RO plant proposal',
  },

  pumps: {
    title: 'Pump Systems & Automation',
    tagline: 'Reliable Flow. Intelligent Control.',
    heroImage: '/images/5.jpg',
    overview: `Water doesn't move itself — and neither should your team. SVJ Eco Flow designs, supplies and
    commissions pumping solutions that deliver the right flow at the right pressure, every time. From simple
    booster sets to multi-pump hydro-pneumatic stations with VFD control, we integrate mechanical and
    electrical engineering into a single automated package that minimises energy use and downtime.`,
    highlights: [
      { icon: 'fas fa-check-circle', text: 'Pump types: multistage, submersible, centrifugal, dosing' },
      { icon: 'fas fa-check-circle', text: 'VFD panels for variable speed and energy saving' },
      { icon: 'fas fa-check-circle', text: 'Hydro-pneumatic systems for constant pressure' },
      { icon: 'fas fa-check-circle', text: 'Pump protection: dry-run, overload, phase-loss relays' },
      { icon: 'fas fa-check-circle', text: 'SCADA / PLC integration with remote start/stop' },
      { icon: 'fas fa-check-circle', text: 'AMF panels for auto-changeover between duty & standby pumps' },
    ],
    process: [
      { step: '01', title: 'Site & Hydraulic Survey', desc: 'Flow demand analysis, static head measurement and pipe sizing to select the optimum pump.' },
      { step: '02', title: 'Pump & Motor Selection', desc: 'Energy-efficient motor and impeller selection matched to duty point on the system curve.' },
      { step: '03', title: 'Panel & Automation Design', desc: 'MCC / VFD panel designed with protection relays, PLC and HMI for intuitive operation.' },
      { step: '04', title: 'Mechanical Installation', desc: 'Pump base-frame, suction/delivery piping, valves, strainers and pressure gauges installed.' },
      { step: '05', title: 'Electrical & Control Wiring', desc: 'Panel earthing, cable laying and control wiring done to IS / IEC standards.' },
      { step: '06', title: 'Commissioning & Handover', desc: 'Performance testing at rated flow and head, operator training and O&M manual handover.' },
    ],
    midImage: '/images/5.jpg',
    midCaption: 'High-pressure pump arrays installed at a water treatment facility.',
    applications: ['Water supply booster stations', 'Fire-fighting pump sets', 'STP / ETP transfer pumps', 'Irrigation pumping stations', 'Industrial process pumps'],
    ctaText: 'Get a pump system quote',
  },

  etp: {
    title: 'Effluent Treatment Plant (ETP)',
    tagline: 'Treat. Recover. Comply.',
    heroImage: '/images/4.jpg',
    overview: `Industrial effluents contain a complex mix of suspended solids, heavy metals, organic load and
    toxic chemicals that cannot be discharged without treatment. SVJ Eco Flow designs ETPs that combine
    physical, chemical and biological treatment stages to bring effluent quality within CPCB / SPCB
    prescribed limits — and often to a quality suitable for in-plant recycling, reducing freshwater
    consumption and disposal costs.`,
    highlights: [
      { icon: 'fas fa-check-circle', text: 'Physical, chemical & biological treatment stages' },
      { icon: 'fas fa-check-circle', text: 'Heavy metal removal via coagulation–flocculation' },
      { icon: 'fas fa-check-circle', text: 'COD/BOD reduction through aerobic & anaerobic processes' },
      { icon: 'fas fa-check-circle', text: 'Zero Liquid Discharge (ZLD) option with MEE / ATFD' },
      { icon: 'fas fa-check-circle', text: 'Online effluent quality monitoring (pH, COD, TSS)' },
      { icon: 'fas fa-check-circle', text: 'Sludge dewatering with filter press or centrifuge' },
    ],
    process: [
      { step: '01', title: 'Equalisation', desc: 'Equalization tank buffers flow and concentration fluctuations for uniform downstream treatment.' },
      { step: '02', title: 'Chemical Treatment', desc: 'pH correction, coagulation with alum/FeSO₄ and flocculation remove heavy metals and SS.' },
      { step: '03', title: 'Primary Clarifier', desc: 'Chemical sludge is separated by gravity settling before biological treatment.' },
      { step: '04', title: 'Biological Treatment', desc: 'Aerobic activated sludge or MBBR process degrades organic load (BOD/COD).' },
      { step: '05', title: 'Tertiary Polishing', desc: 'Sand filtration, activated carbon adsorption and membrane polishing for reuse quality.' },
      { step: '06', title: 'ZLD / Sludge Handling', desc: 'Filter press dewaters sludge to cake. MEE evaporates reject for zero liquid discharge.' },
    ],
    midImage: '/images/2.png',
    midCaption: 'Aerial view of a multi-stage effluent treatment and clarification facility.',
    applications: ['Textile & dyeing industries', 'Pharmaceutical & chemical plants', 'Tanneries & leather processing', 'Food processing & dairy', 'Metal plating & electroplating'],
    ctaText: 'Request an ETP design study',
  },

  installation: {
    title: 'Installation & Commissioning',
    tagline: 'From Blueprint to Running Plant.',
    heroImage: '/images/3.jpg',
    overview: `A treatment plant is only as good as its installation. SVJ Eco Flow provides complete turnkey
    project execution — from civil construction and equipment erection to electrical cabling, PLC programming
    and final performance validation. Our site engineers oversee every stage, ensuring systems are built to
    spec, safely, and handed over with full documentation, operator training and a robust warranty.`,
    highlights: [
      { icon: 'fas fa-check-circle', text: 'Turnkey execution: civil, mechanical & electrical' },
      { icon: 'fas fa-check-circle', text: 'PLC / SCADA programming and HMI configuration' },
      { icon: 'fas fa-check-circle', text: 'Pipeline fabrication: MS, SS, HDPE, UPVC' },
      { icon: 'fas fa-check-circle', text: 'Performance guarantee testing at rated capacity' },
      { icon: 'fas fa-check-circle', text: 'Operator training with O&M manual handover' },
      { icon: 'fas fa-check-circle', text: '12-month defect liability period on all works' },
    ],
    process: [
      { step: '01', title: 'Design & Engineering', desc: 'P&IDs, GA drawings, electrical single-line diagrams and BOQ finalised before mobilisation.' },
      { step: '02', title: 'Civil & Structural Works', desc: 'RCC tanks, equipment plinths, pipe trenches and access platforms constructed to design.' },
      { step: '03', title: 'Equipment Erection', desc: 'Pumps, blowers, membranes, filters and dosing systems installed and aligned precisely.' },
      { step: '04', title: 'Piping & Valving', desc: 'Process and utility piping fabricated, installed, pressure-tested and painted / insulated.' },
      { step: '05', title: 'Electrical & Automation', desc: 'MCC panels wired, PLC/SCADA programmed, instruments calibrated and loop-tested.' },
      { step: '06', title: 'Commissioning & Handover', desc: 'Sequential start-up, performance testing, punch-list closure and official handover with training.' },
    ],
    midImage: '/images/11.jpg',
    midCaption: 'SVJ engineers conducting final inspection and performance checks before handover.',
    applications: ['New STP / ETP / RO plant builds', 'Plant retrofitting & capacity upgrades', 'Pump station construction', 'SCADA retrofit on existing plants', 'Relocation & reinstallation'],
    ctaText: 'Discuss your project with us',
  },

  lab: {
    title: 'Lab Testing & Water Analysis',
    tagline: 'Know Your Water. Trust the Data.',
    heroImage: '/images/9.jpg',
    overview: `Effective water and wastewater treatment begins with accurate analysis. SVJ Eco Flow's in-house
    laboratory team conducts comprehensive feed-water and effluent characterisation to design the right
    treatment train, optimise chemical dosing and verify regulatory compliance. We also offer third-party
    treatability studies and performance audits for existing plants that are underperforming.`,
    highlights: [
      { icon: 'fas fa-check-circle', text: 'Physical parameters: pH, turbidity, TDS, TSS, colour' },
      { icon: 'fas fa-check-circle', text: 'Chemical parameters: BOD, COD, hardness, heavy metals' },
      { icon: 'fas fa-check-circle', text: 'Microbiological: E.coli, coliform, total plate count' },
      { icon: 'fas fa-check-circle', text: 'Treatability studies for new plant design' },
      { icon: 'fas fa-check-circle', text: 'Compliance sampling & reporting as per CPCB norms' },
      { icon: 'fas fa-check-circle', text: 'Performance audits with corrective action reports' },
    ],
    process: [
      { step: '01', title: 'Sample Collection', desc: 'Trained field staff collect composite and grab samples following standard protocols.' },
      { step: '02', title: 'Physical Analysis', desc: 'On-site and in-lab measurement of pH, turbidity, TDS, temperature and colour.' },
      { step: '03', title: 'Chemical Analysis', desc: 'BOD, COD, hardness, alkalinity, chlorides, heavy metals and nutrient profiling.' },
      { step: '04', title: 'Microbiological Testing', desc: 'MPN coliform counts and heterotrophic plate counts in certified conditions.' },
      { step: '05', title: 'Treatability Study', desc: 'Jar tests, pilot trials and dose-response curves to select optimal treatment chemistry.' },
      { step: '06', title: 'Report & Recommendations', desc: 'Comprehensive report with data, compliance status and actionable treatment recommendations.' },
    ],
    midImage: '/images/12.jpg',
    midCaption: 'Water samples from clarifier outflow being tested for compliance parameters.',
    applications: ['Feed-water characterisation for new plants', 'Monthly compliance monitoring', 'Troubleshooting underperforming plants', 'ETP inlet & outlet monitoring', 'Drinking water quality certification'],
    ctaText: 'Book a water quality assessment',
  },
}
