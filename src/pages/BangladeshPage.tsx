import CountryPageLayout from "@/components/CountryPageLayout";
import SectionHeader from "@/components/SectionHeader";
import KpiCard from "@/components/KpiCard";
import PriorityBadge from "@/components/PriorityBadge";
import ImpactDots from "@/components/ImpactDots";
import TimelineBadge from "@/components/TimelineBadge";
import AlertBox from "@/components/AlertBox";
import TrendHorizonMap from "@/components/TrendHorizonMap";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const sections = [
  { id: "header", label: "Overview & KPIs" },
  { id: "executive-summary", label: "Executive Summary" },
  { id: "macro-trends", label: "Macro Trends" },
  { id: "micro-trends", label: "Micro Trends" },
  { id: "tech-disruptions", label: "Technology Disruptions" },
  { id: "regulatory", label: "Regulatory Shifts" },
  { id: "consumer", label: "Consumer Behaviour" },
  { id: "investment", label: "Investment Signals" },
  { id: "horizon-map", label: "Trend Horizon Map" },
  { id: "strategic", label: "Strategic Imperatives" },
  { id: "risk-register", label: "Risk Register" },
];

export default function BangladeshPage() {
  return (
    <CountryPageLayout sections={sections}>
      {/* HEADER */}
      <div id="header" className="scroll-mt-20">
        <div className="flex items-center gap-4">
          <span className="text-5xl">🇧🇩</span>
          <div>
            <h1 className="font-heading text-3xl font-extrabold text-foreground">Bangladesh Higher Skilling Sector</h1>
            <p className="text-sm text-muted-foreground">Trend Intelligence Brief · March 2026 · Confidential</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <KpiCard label="Market Size (2025E)" value="~USD 1.2B" />
          <KpiCard label="Projected (2031F)" value="~USD 3.8B" subtitle="~21% CAGR" />
          <KpiCard label="Labour Force" value="67M+" />
          <KpiCard label="Skill Gap (% Workforce)" value="~58%" />
          <KpiCard label="Internet Penetration" value="~44%" />
          <KpiCard label="Population" value="170M+" />
        </div>
      </div>

      {/* EXECUTIVE SUMMARY */}
      <div>
        <SectionHeader id="executive-summary" number="ES" title="Executive Summary" />
        <div className="mt-4 text-sm leading-relaxed text-foreground">
          <p>Bangladesh's higher skilling sector is at a structural inflection point. With a 170M+ population, 67M-strong labour force, and a national digitisation mandate under Smart Bangladesh Vision 2041, the sector is projected to expand from ~USD 1.2B (2025E) to ~USD 3.8B by 2031 — a 21% CAGR. Six sub-sectors spanning Technology/AI, Healthcare, B2B Services, Soft Skills, Manufacturing, and Professional Services are converging under unified digital infrastructure, unlocking institutional-grade investment opportunities. This brief maps 5 macro forces, 7 micro trends, key technology disruptions, regulatory shifts, consumer behaviour evolution, and investment signals — each rated for impact and mapped to a 0–5 year horizon.</p>
        </div>
      </div>

      {/* MACRO TRENDS */}
      <div>
        <SectionHeader id="macro-trends" number="1" title="Macro Trends — 5 Global Forces" subtitle="Five macro-level forces reshaping higher skilling in Bangladesh." />
        <Accordion type="multiple" className="mt-4">
          {[
            { id: "mt1", title: "AI-Powered Adaptive Learning as Global Infrastructure", impact: 9, timeline: "Short-Term (0–1 yr)", detail: "Generative AI and large language models are transitioning from novelty to institutional infrastructure in global skilling. Global EdTech AI investment reached USD 4.1B in 2025. Platforms integrating adaptive learning pathways are capturing institutional budgets at the expense of legacy classroom models. In Bangladesh, this manifests as pressure to 'AI-nativise' product stacks urgently.", soWhat: "Your LMS and corporate training sub-sector faces the most acute displacement risk within 12 months. Immediate investment in AI-driven personalisation engine, adaptive assessment, and NLP-based content generation is non-negotiable to protect B2B enterprise contracts.", sectors: "All 6 sub-sectors — most critical for Tech Skilling, Soft Skills, and B2B LMS" },
            { id: "mt2", title: "Global Skills Mis-Match Crisis Reaches Structural Severity", impact: 9, timeline: "Short-Term (0–1 yr)", detail: "The World Economic Forum's 2025 Future of Jobs Report identifies a 44% skills disruption rate by 2027. Employers globally cannot source talent at the pace of technological change. Bangladesh is acutely exposed — its export-oriented RMG sector is automating, the IT/ITES sector requires 500K+ new digital workers.", soWhat: "Position your company not just as a training provider but as a structural solution to Bangladesh's skills mismatch crisis.", sectors: "Tech & AI Skilling, Healthcare AHPs, Advanced Manufacturing, Professional Services" },
            { id: "mt3", title: "ESG-Linked Green Skills & Sustainability Upskilling", impact: 7, timeline: "Mid-Term (1–3 yr)", detail: "International buyers (EU, UK, USA) are demanding ESG compliance from Bangladesh supply chains — particularly in RMG, leather, and manufacturing. IFC and ADB have earmarked USD 340M in green skills and just transition programmes across South Asia (2025-2028), of which Bangladesh receives a significant allocation.", soWhat: "A first-mover ESG/Green Skills curriculum — co-branded with an IFC or ADB programme — positions you to capture institutional government and development finance contracts before market saturation. Target RMG factories and export-oriented manufacturers as anchor B2B clients.", sectors: "Advanced Manufacturing, Professional Services, B2B Corporate Training" },
            { id: "mt4", title: "Demographic Dividend Under Pressure: Bangladesh's Youth Bulge", impact: 9, timeline: "Short-Term (0–1 yr)", detail: "Bangladesh's median age is 28.4 years. Approximately 2M young people enter the labour market annually. Without higher-order skilling, this demographic dividend risks becoming a liability — driving urban unemployment, social instability, and emigration. The government's Eighth Five Year Plan explicitly targets 100% skills coverage for new labour market entrants by 2031.", soWhat: "Position your company not as a training provider but as a national human capital infrastructure partner. Build relationships with a2i, BIDA, and Ministry of Education for public procurement pipeline. This demographic pressure also guarantees a 20-year demand runway.", sectors: "All sub-sectors — anchor macro driver for the entire sector" },
            { id: "mt5", title: "Globalisation of Credentials & Cross-Border Recognition", impact: 8, timeline: "Mid-Term (1–3 yr)", detail: "ASEAN, GCC, UK, and EU are progressively moving toward Mutual Recognition Agreements (MRAs) for professional qualifications. For Bangladesh, this is significant: 10M+ diaspora workers send USD 22B+ in remittances. Skilling institutions that partner with internationally recognised credentialing bodies (City & Guilds, Pearson, Prometric, AWS, Google, Microsoft) can command premium pricing and serve the fast-growing 'emigration-prep' market segment.", soWhat: "Accelerate international credential partnerships — particularly UK/City & Guilds for healthcare, AWS/Google/Microsoft for tech skilling, and ACCA/CIM for professional services. These partnerships raise your average revenue per learner by 40–70% and open cross-border revenue streams.", sectors: "Tech & AI Skilling, Healthcare AHPs, Professional Services, Soft Skills" },
          ].map((m) => (
            <AccordionItem key={m.id} value={m.id}>
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <span className="text-lg">↑</span>
                  <div>
                    <span className="font-semibold">{m.title}</span>
                    <div className="mt-1 flex items-center gap-2"><ImpactDots score={m.impact} /><TimelineBadge timeline={m.timeline} /></div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-xs font-medium text-primary">Affected: {m.sectors}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{m.detail}</p>
                <AlertBox type="signal" title="SO WHAT"><p>{m.soWhat}</p></AlertBox>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* MICRO TRENDS */}
      <div>
        <SectionHeader id="micro-trends" number="2" title="Micro Trends — 7 Emerging Patterns" subtitle="Trends that have emerged or accelerated within Bangladesh's higher skilling market over the preceding 12 months." />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            { id: "1", title: "Micro-Credential & Stackable Certification Explosion", impact: 9, timeline: "Short-Term", desc: "Short-form, verifiable, employer-recognised micro-credentials (20–120 hour programmes) are displacing 2–4 year degree enrollments. BGMEA and BACCO members report 60%+ of corporate L&D spending has shifted to modular/stackable formats since mid-2024. Providers offering NSDA-registered micro-credentials with digital badging (Credly, Accredible) are seeing 3–4x enrollment growth.", soWhat: "Restructure your curriculum architecture around stackable micro-credential 'learning journeys' of 40–120 hours each, with each module independently NSDA-registered. This unlocks both B2C individual billing and B2B cohort contract structures simultaneously." },
            { id: "2", title: "Corporate L&D Budget Surge Post-COVID Normalisation", impact: 8, timeline: "Short-Term", desc: "Bangladesh's top 500 corporates (banking, telecom, pharma, FMCG, IT) have increased L&D budget allocations by an estimated 35–45% YoY since FY2024. BRAC Bank, Grameenphone, Square Pharmaceuticals, ACI Group have expanded structured external training procurement. B2B corporate training market estimated at BDT 800–1,100 Crore annually growing at 18% CAGR.", soWhat: "Establish a dedicated Enterprise Sales function targeting the top 200 corporate accounts. Develop bespoke enterprise L&D solutions with SLA-backed outcomes, dedicated learning consultants, and annual subscription LMS packages. Target minimum 15 anchor enterprise accounts in FY2026." },
            { id: "3", title: "Healthcare Workforce Formalisation Mandate", impact: 8, timeline: "Mid-Term", desc: "BMDC, BNMC, and Ministry of Health are jointly driving formalisation of AHP training with mandatory CME credit requirements for licensure renewal (effective 2026–2027). An estimated 180,000+ AHPs (paramedics, lab technicians, physiotherapists, pharmacists, radiology techs) currently operate without formalised continuing education. Captive recurring market estimated at BDT 300–500 Crore.", soWhat: "File for BMDC/BNMC approved CME provider status immediately — the accreditation pipeline is long and early movers will have 24–36 months of first-mover advantage. Build a blended CME delivery model." },
            { id: "4", title: "Women-in-Tech & STEM Skilling as Institutional Priority", impact: 7, timeline: "Short-Term", desc: "Government of Bangladesh (a2i, Women ICT Frontier Initiative), USAID, UN Women, and IFC have collectively deployed USD 85M+ in gender-focused digital skilling programmes across 2024–2025. Female labor force participation in the formal digital economy remains below 35%. EdTech providers offering gender-responsive design see 40–60% higher completion rates.", soWhat: "Create a dedicated 'Women in Tech' learning vertical with purpose-built curriculum, female-only cohort options, and industry mentorship networks. This vertical qualifies you for gender-lens impact grants (USD 500K–3M range)." },
            { id: "5", title: "Rural & Peri-Urban Digital Skilling Expansion", impact: 8, timeline: "Mid-Term", desc: "Bangladesh's Union Digital Centres (UDCs, 4,550 locations) are being converted into hybrid Learning & Skilling Hubs under Smart Bangladesh Vision 2041. a2i's 2025 budget allocates BDT 450 Crore to digital skilling infrastructure outside Dhaka. The addressable rural market is 3–4x the size of the Dhaka-centric market but requires hub-and-spoke delivery models, offline-first technology, and vernacular (Bangla) content.", soWhat: "Develop a hub-and-spoke franchise or partner model for district-level delivery. Localise core curriculum into verified Bangla. Apply for a2i's Skilling Hub operator grants (applications open Q2 2026)." },
            { id: "6", title: "Outcome-Based & Income-Share Revenue Models", impact: 8, timeline: "Short-Term", desc: "Employer partners (particularly in IT/ITES, BPO, and garments) are pushing skilling providers toward outcome-linked commercial structures: payment contingent on placement, salary-linked revenue shares, or employer co-funding. ShopUp, Augmedix, and several BACCO members have piloted outcome-based hiring pipelines.", soWhat: "Develop a formal Employer Partnership Programme (EPP) with 30–50 anchor employers committing to interview or hire your graduates. This transforms your revenue model into a more defensible, outcomes-linked structure." },
            { id: "7", title: "Soft Skills Premium in the Formal Economy", impact: 7, timeline: "Short-Term", desc: "HR leaders at Bangladesh's top 100 corporates report communication, leadership, critical thinking, and professional effectiveness as the #1 hiring barrier — above technical skills. A 2025 BIDA employer survey found 72% of formal sector employers rejected technically qualified candidates for 'professional readiness' gaps.", soWhat: "Bundle a Professional Effectiveness Certification (PEC) — covering communication, workplace ethics, leadership fundamentals — into all tech and healthcare programmes as a mandatory module." },
          ].map((t) => (
            <div key={t.id} className="rounded-lg border border-border bg-card p-5">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">#{t.id}</span>
                <TimelineBadge timeline={t.timeline} />
                <ImpactDots score={t.impact} />
              </div>
              <h3 className="mb-2 font-heading text-sm font-bold text-foreground">{t.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{t.desc}</p>
              <AlertBox type="signal" title="SO WHAT"><p>{t.soWhat}</p></AlertBox>
            </div>
          ))}
        </div>
      </div>

      {/* TECHNOLOGY DISRUPTIONS */}
      <div>
        <SectionHeader id="tech-disruptions" number="3" title="Technology Disruptions" subtitle="Four technology waves reshaping higher skilling delivery, 2026–2031." />
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="border-b border-border bg-muted/50">
              <th className="px-3 py-2 text-left font-semibold">Technology</th>
              <th className="px-3 py-2 text-left font-semibold">Impact on Higher Skilling</th>
              <th className="px-3 py-2 text-center font-semibold">BD Mainstream</th>
              <th className="px-3 py-2 text-left font-semibold">Strategic Implication</th>
            </tr></thead>
            <tbody>
              {[
                ["Generative AI & LLMs (GPT-5, Gemini 2.x, Claude 4)", "AI tutors, auto-generated personalised content, AI-powered assessment, adaptive learning paths, curriculum gap analysis in real-time", "Now → 18 months", "URGENT: Deploy AI tutor on your LMS within 6 months. License an API-first LLM layer (OpenAI, Anthropic) rather than build. First-mover advantage compresses rapidly."],
                ["VR/AR Immersive Training Environments", "Surgical simulation (healthcare), factory floor safety training (manufacturing), soft skills roleplay scenarios. 40–60% retention improvement over video-based learning.", "18 – 36 months", "Pilot 2–3 VR modules in healthcare AHP and advanced manufacturing verticals by mid-2027. Partner with a VR content studio rather than build in-house."],
                ["Blockchain-Based Credential Verification", "Tamper-proof digital diplomas and certificates issued on-chain (EduCerts, Blockcerts standard). Critical for international credential recognition and diaspora employment market.", "36 – 60 months", "Begin technical scoping in 2026-2027. Collaborate with NSDA for a pilot national digital credential wallet."],
                ["AI Proctoring & Remote Assessment Platforms", "Scalable, fraud-resistant online examination. Reduces physical test centre costs by 60–70%. Already mainstream in India/SEA.", "Now → 12 months", "Deploy AI proctoring (Proctorio, ExamSoft, or local equivalent) for all certification programmes immediately. Prerequisite for international credential partnerships."],
              ].map((row, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="px-3 py-2 font-medium text-foreground">{row[0]}</td>
                  <td className="max-w-xs px-3 py-2 text-muted-foreground">{row[1]}</td>
                  <td className="px-3 py-2 text-center"><TimelineBadge timeline={row[2]} /></td>
                  <td className="max-w-xs px-3 py-2 text-muted-foreground">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* REGULATORY SHIFTS */}
      <div>
        <SectionHeader id="regulatory" number="4" title="Regulatory Shifts — Legislation & Policy to Watch" />
        <div className="mt-4 space-y-4">
          {[
            { name: "NSDA 2.0 Reform", impact: 9, timeline: "Short-Term", detail: "The NSDA is undergoing its most significant structural reform since establishment, with a proposed National Skills Authority Act expected to be tabled in Parliament in H2 2026. Key provisions expected to include mandatory registration for all private skilling providers." },
            { name: "Smart Bangladesh Digital Skills Policy Framework", impact: 8, timeline: "Mid-Term", detail: "Under Smart Bangladesh Vision 2041, the ICT Division is expected to formalise a Digital Skills Policy Framework by Q3 2026, mandating digital literacy standards for public sector employment, establishing a 'Digital Skills Passport' for formal job market access, and creating preferred procurement status for a2i-certified EdTech providers." },
            { name: "Bangladesh Medical & Dental Council — CME Mandatory Credits", impact: 9, timeline: "Short-Term", detail: "BMDC has circulated a draft CME Policy (2025) mandating a minimum 30 CME credits per 3-year licensure cycle for all registered medical and dental practitioners (~120,000 individuals), and 20 credits for AHPs. Applications for BMDC CME provider accreditation open Q2 2026. First-mover incumbency estimated to be worth BDT 60–120 Crore annually." },
            { name: "Foreign Investment Facilitation Act Amendments — EdTech JV Facilitation", impact: 7, timeline: "Mid-Term", detail: "BIDA's proposed amendments (expected FY2026–27) are designed to reduce foreign equity restrictions in EdTech from 49% to 74%, unlocking international strategic investors and MNCs (Pearson, Coursera, ETS) to enter Bangladesh via joint ventures." },
            { name: "BTRC Spectrum & Digital Connectivity Policy", impact: 7, timeline: "Mid-Term", detail: "BTRC's National Broadband Policy 2026–2030 targets 90% population coverage at minimum 10 Mbps by 2028, with 5G rollout in 8 divisional cities by Q4 2027. This directly enables rural skilling expansion, live virtual classroom delivery, and AI-powered adaptive platforms." },
          ].map((r, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-4">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-heading text-sm font-bold text-foreground">{r.name}</h3>
                <ImpactDots score={r.impact} />
                <TimelineBadge timeline={r.timeline} />
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{r.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CONSUMER BEHAVIOUR */}
      <div>
        <SectionHeader id="consumer" number="5" title="Consumer Behaviour Changes" subtitle="Buyer and learner preferences undergoing a generational shift." />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            { icon: "🎯", title: "Learners Demand Verifiable Employment Outcomes", desc: "72% of surveyed learners (BIDA 2025) cite 'job placement' as their #1 decision criterion vs. 23% citing brand reputation. NPS scores for providers with placement cells are 40+ points higher than credential-only operators.", impl: "Build a formal Career Services division with dedicated placement officers. Track and publish placement rates, salary uplift data, and employer satisfaction scores." },
            { icon: "🤝", title: "Employer-Led Curriculum Co-Design as Selection Criterion", desc: "Corporate L&D buyers (BGMEA, BACCO, BASIS members) are shortlisting only providers who demonstrate employer advisory boards and industry-designed curriculum. Procurement RFPs now include curriculum advisory requirements in 60%+ of cases reviewed.", impl: "Establish formal Industry Advisory Councils for each sub-sector vertical with C-suite employer participation." },
            { icon: "🔄", title: "Shift from Annual/Semester Enrolment to Continuous On-Demand Access", desc: "Subscription-based 'learning memberships' (all-access annual pass model) are growing at 90%+ YoY among Dhaka's 25-35 corporate professional segment. Learners cite convenience and breadth as key value drivers.", impl: "Subscription MRR is your highest-quality revenue stream from an investor perspective." },
            { icon: "📱", title: "Mobile-First & Vernacular Content as Baseline Expectation", desc: "Bangladesh smartphone penetration: 65%. Mobile data cost: BDT 10–15/GB (highly affordable). 78% of non-Dhaka learners access digital content exclusively via mobile. Bangla-language content generates 3–4x completion rates vs English-only equivalents (a2i data, 2025).", impl: "Mandate mobile-first UX across all digital products. Invest in professional Bangla content localisation (not Google Translate). This is a foundational product requirement." },
            { icon: "🏛️", title: "Trust in Brand Signals by Institutional Association", desc: "Learners report university affiliations, international accreditation, and government recognition as the top 3 trust signals. Brand-building via co-badging with BUET, BRAC University, or DU increases willingness-to-pay by 25–35% among urban professionals.", impl: "Pursue 2–3 formal university partnership agreements with top BD universities and at least one international awarding body. The co-brand halo effect justifies a premium pricing tier." },
          ].map((b, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center gap-2"><span className="text-2xl">{b.icon}</span><h3 className="font-heading text-sm font-bold text-foreground">{b.title}</h3></div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{b.desc}</p>
              <AlertBox type="info" title="Implication"><p>{b.impl}</p></AlertBox>
            </div>
          ))}
        </div>
      </div>

      {/* INVESTMENT SIGNALS */}
      <div>
        <SectionHeader id="investment" number="6" title="Investment Signals" subtitle="Where smart money is flowing." />
        <h3 className="mt-4 font-heading text-base font-bold text-foreground">Venture Capital & Growth Equity Landscape</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="border-b border-border bg-muted/50">
              <th className="px-3 py-2 text-left font-semibold">Deal / Investor Type</th>
              <th className="px-3 py-2 text-left font-semibold">Geography</th>
              <th className="px-3 py-2 text-left font-semibold">Stage</th>
              <th className="px-3 py-2 text-left font-semibold">Thesis / Signal</th>
              <th className="px-3 py-2 text-left font-semibold">Relevance</th>
            </tr></thead>
            <tbody>
              {[
                ["Surge in South Asia EdTech Series A (USD 2–15M tickets)", "BD, PK, LK", "Series A", "Investors seeking outcomes-first platforms with employer partnerships; avoiding pure-content plays", "DIRECT"],
                ["IFC/ADB Impact Capital (Blended Finance)", "BD priority market", "Growth/Impact", "USD 5–50M tickets for gender-lens, healthcare, and green skills platforms with NSDA accreditation", "DIRECT"],
                ["BGCA & Government Co-Investment in TVET", "National - BD", "Grant + Equity", "BDT 800–1,200 Crore annual govt allocation; procurement-driven; requires NSDA registration", "DIRECT"],
                ["SEA EdTech giants eyeing BD", "Regional", "Strategic M&A", "Ruangguru (Indonesia), Byju's (India), and similar platform players eyeing BD as next frontier market via JV or acquisition", "STRATEGIC"],
                ["Corporate Venture Arms", "BD + GCC", "Series A–B", "Meghna Group CVCs exploring skilling platform investments as talent pipeline strategy", "STRATEGIC"],
                ["GCC Diaspora Remittance-Backed Skill Finance", "UAE/KSA", "Finance", "Fintech-EdTech hybrids enabling income-share agreements backed by GCC employment contracts", "EMERGING"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="px-3 py-2 font-medium text-foreground">{row[0]}</td>
                  <td className="px-3 py-2 text-muted-foreground">{row[1]}</td>
                  <td className="px-3 py-2 text-muted-foreground">{row[2]}</td>
                  <td className="max-w-xs px-3 py-2 text-muted-foreground">{row[3]}</td>
                  <td className="px-3 py-2"><PriorityBadge level={row[4] === "DIRECT" ? "critical" : row[4] === "STRATEGIC" ? "high" : "medium"} label={row[4]} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-6 font-heading text-base font-bold text-foreground">Key Investor Value-Creation Metrics Being Evaluated</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="border-b border-border bg-muted/50">
              <th className="px-3 py-2 text-left font-semibold">Metric</th>
              <th className="px-3 py-2 text-left font-semibold">Benchmark</th>
            </tr></thead>
            <tbody>
              {[
                ["Placement Rate", "Minimum 65% 6-month employment rate post-graduation for tech/professional programmes"],
                ["Revenue Quality", "40%+ recurring revenue (subscription, enterprise contracts) vs. transactional enrolments"],
                ["NSDA/BMDC Accreditation", "Mandatory for any public funding or institutional partnerships"],
                ["ARPU", "Average Revenue Per User >BDT 15,000 for individual; >BDT 500K ACV for enterprise contracts"],
                ["Unit Economics", "Gross margin >55% on digital delivery; >35% on blended/in-person delivery"],
                ["NPS", "Net Promoter Score >45 (learner); >50 (employer partner) as minimum benchmarks"],
              ].map(([metric, benchmark], i) => (
                <tr key={i} className="border-b border-border">
                  <td className="px-3 py-2 font-medium text-foreground">{metric}</td>
                  <td className="px-3 py-2 text-muted-foreground">{benchmark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* TREND HORIZON MAP */}
      <div>
        <SectionHeader id="horizon-map" number="7" title="Strategic Timeline — Trend Horizon Map" />
        <div className="mt-4">
          <TrendHorizonMap data={[
            { trend: "AI Tutor & Adaptive LMS Deploy", category: "Technology", shortTerm: "●●●", midTerm: "●●●", longTerm: "●●●", impact: 10, detail: "Deploy an LLM-powered adaptive tutor, AI assessment engine, and personalised learning path generator across your LMS platform within 6 months." },
            { trend: "Micro-Credential Architecture Build", category: "Product", shortTerm: "●●●", midTerm: "●●●", longTerm: "●●○", impact: 9, detail: "Re-architect all major programmes into 40–120 hour NSDA-registered micro-credentials with digital badge issuance." },
            { trend: "Corporate L&D Enterprise Sales", category: "Revenue", shortTerm: "●●●", midTerm: "●●●", longTerm: "●●●", impact: 9, detail: "Establish a dedicated Enterprise Sales function targeting the top 200 corporate accounts." },
            { trend: "NSDA / BMDC Accreditation Filing", category: "Regulatory", shortTerm: "●●●", midTerm: "●●○", longTerm: "●○○", impact: 9, detail: "File for NSDA accreditation for top 10 programmes and BMDC CME provider status simultaneously." },
            { trend: "Healthcare CME Provider Launch", category: "Healthcare", shortTerm: "●●○", midTerm: "●●●", longTerm: "●●●", impact: 9, detail: "Build blended CME delivery model for 180,000+ AHPs. First-mover incumbency worth BDT 60–120 Crore annually." },
            { trend: "Women-in-Tech Vertical Launch", category: "Social Impact", shortTerm: "●●○", midTerm: "●●●", longTerm: "●●●", impact: 7, detail: "Create dedicated Women in Tech learning vertical qualifying for gender-lens impact grants (USD 500K–3M)." },
            { trend: "International Credential Partnerships", category: "Product", shortTerm: "●○○", midTerm: "●●●", longTerm: "●●●", impact: 8, detail: "Sign at least 2 international credentialing partnerships (AWS/Google/Microsoft for tech; City & Guilds or Pearson for healthcare)." },
            { trend: "ESG/Green Skills Curriculum Build", category: "Product", shortTerm: "●○○", midTerm: "●●○", longTerm: "●●●", impact: 7, detail: "First-mover ESG curriculum co-branded with IFC or ADB programme." },
            { trend: "Rural Hub-and-Spoke Expansion", category: "Distribution", shortTerm: "●○○", midTerm: "●●●", longTerm: "●●●", impact: 8, detail: "Identify 10 district-level delivery partners. Develop offline-first Bangla content bundles." },
            { trend: "Employer Partnership Programme (EPP)", category: "Revenue", shortTerm: "●●●", midTerm: "●●●", longTerm: "●●●", impact: 9, detail: "Formalise relationships with 30–50 employer partners committing to hire graduates." },
            { trend: "VR/AR Training Modules Pilot", category: "Technology", shortTerm: "●○○", midTerm: "●●○", longTerm: "●●●", impact: 7, detail: "Pilot 2–3 VR modules in healthcare and manufacturing by mid-2027." },
            { trend: "Blockchain Credential Infrastructure", category: "Technology", shortTerm: "○○○", midTerm: "●○○", longTerm: "●●●", impact: 6, detail: "Begin technical scoping 2026-2027 for national digital credential wallet." },
            { trend: "Subscription/Membership Revenue Model", category: "Revenue", shortTerm: "●●○", midTerm: "●●●", longTerm: "●●●", impact: 8, detail: "Subscription MRR is highest-quality revenue stream from investor perspective." },
            { trend: "Series A Capital Raise", category: "Finance", shortTerm: "●●●", midTerm: "●○○", longTerm: "○○○", impact: 9, detail: "Target Series A raise of USD 5–15M from IFC, regional VC, or impact investor within 18 months." },
            { trend: "Strategic M&A / JV Evaluation", category: "Strategy", shortTerm: "●○○", midTerm: "●●○", longTerm: "●●●", impact: 7, detail: "Evaluate strategic M&A or JV opportunities as foreign equity restrictions reduce." },
          ]} />
        </div>
      </div>

      {/* STRATEGIC IMPERATIVES */}
      <div>
        <SectionHeader id="strategic" number="8" title="Consolidated Strategic Imperatives" subtitle="The 8 highest-confidence, highest-impact actions derived from this analysis." />
        <div className="mt-4 space-y-4">
          {[
            { num: 1, title: "AI-Native Product Stack", detail: "Deploy an LLM-powered adaptive tutor, AI assessment engine, and personalised learning path generator across your LMS platform within 6 months. License API (do not build). This is table-stakes for enterprise B2B contract retention and learner NPS improvement.", metric: "NPS >50; enterprise renewal rate >80%" },
            { num: 2, title: "NSDA & BMDC Accreditation Sprint", detail: "File for NSDA accreditation for your top 10 micro-credential programmes and BMDC CME provider status simultaneously. Assign a dedicated regulatory compliance manager. The recurring revenue from CME alone justifies the investment.", metric: "NSDA reg for 10 programmes by Q3 2026; BMDC approval by Q1 2027" },
            { num: 3, title: "Employer Partnership Programme", detail: "Formalise relationships with 30–50 employer partners who commit to interview or hire your graduates. Structure as annual partnership agreements with defined intake numbers. Publish placement data quarterly.", metric: "65%+ placement rate; 30 employer partners signed by Dec 2026" },
            { num: 4, title: "Micro-Credential Architecture", detail: "Re-architect all major programmes into 40–120 hour NSDA-registered micro-credentials with digital badge issuance. Enable stackable pathways. Launch subscription/micro-subscription membership model alongside cohort enrolment.", metric: "40% of revenue from micro-credentials by end 2027" },
            { num: 5, title: "Enterprise B2B Sales Function", detail: "Build a dedicated enterprise sales team targeting top 200 corporates. Develop LMS-as-a-Service (LMSaaS), white-label training solutions, and annual L&D partnership contracts. Target BDT 200–400 Crore in B2B ACV within 24 months.", metric: "15 anchor enterprise accounts; BDT 200Cr+ ACV" },
            { num: 6, title: "International Credential Partnerships", detail: "Sign at least 2 international credentialing partnerships (AWS/Google/Microsoft for tech; City & Guilds or Pearson for healthcare/professional) within 12 months. Co-brand all relevant programmes.", metric: "2 international partnerships signed; 20% ARPU premium achieved" },
            { num: 7, title: "Capital Raise Preparation", detail: "Prepare investor-grade data room: placement rates, NPS, unit economics, ARPU, LTV/CAC, NSDA accreditation evidence. Target Series A raise of USD 5–15M from IFC, regional VC, or impact investor within 18 months.", metric: "Series A close at >5x ARR valuation by Q3 2027" },
            { num: 8, title: "Rural Expansion via Hub-and-Spoke", detail: "Identify 10 district-level delivery partners (coaching centres, NGOs, UDCs). Develop offline-first Bangla content bundles. Apply for a2i Skilling Hub grant in Q2 2026. This multiplies addressable market 3–4x.", metric: "10 districts operational by end-2027; 20% of enrolments from non-Dhaka" },
          ].map((imp) => (
            <div key={imp.num} className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{imp.num}</span>
                <div className="min-w-0 flex-1">
                  <h4 className="font-heading text-sm font-bold text-foreground">{imp.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{imp.detail}</p>
                  <p className="mt-2 text-xs font-medium text-primary">Success Metric: {imp.metric}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RISK REGISTER */}
      <div>
        <SectionHeader id="risk-register" number="9" title="Risk Register — Downside Scenarios" />
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="border-b border-border bg-muted/50">
              <th className="px-3 py-2 text-left font-semibold">Risk</th>
              <th className="px-3 py-2 text-center font-semibold">Likelihood</th>
              <th className="px-3 py-2 text-center font-semibold">Impact</th>
              <th className="px-3 py-2 text-left font-semibold">Mitigation</th>
            </tr></thead>
            <tbody>
              {[
                { risk: "SEA EdTech giants (Ruangguru, etc.) enter BD with price-competitive digital products", likelihood: "Medium", impact: "High", mitigation: "Differentiate via localisation depth, employer networks, and NSDA/BMDC accreditation moats that foreign entrants cannot replicate quickly. Incumbent regulatory status is your barrier." },
                { risk: "Macroeconomic instability (BDT depreciation, energy costs) compressing consumer spend", likelihood: "Medium", impact: "Medium", mitigation: "Build B2B enterprise and institutional (government/development finance) revenue to >50% of total — institutional buyers are recession-resilient vs. individual consumers." },
                { risk: "NSDA accreditation delays or regulatory uncertainty", likelihood: "Medium", impact: "High", mitigation: "Maintain parallel international accreditation (City & Guilds, Pearson) as a fallback quality signal. Engage NSDA reform committee proactively to shape, not just react to, policy." },
                { risk: "AI cost disruption compressing willingness-to-pay for content-only products", likelihood: "High", impact: "High", mitigation: "Pivot value proposition from 'content delivery' to 'outcomes delivery' — placement, employment, salary uplift. AI cannot replicate your employer network and job placement infrastructure." },
                { risk: "Talent acquisition bottleneck for qualified instructors and curriculum designers", likelihood: "High", impact: "Medium", mitigation: "Build a 'Master Trainer' certification programme to create an internal talent pipeline. Supplement with AI-generated content tools to reduce per-instructor content production burden by 50%+." },
              ].map((r, i) => {
                const color = (val: string) => val === "High" ? "text-critical font-semibold" : val === "Medium" ? "text-warning font-semibold" : "text-success font-semibold";
                return (
                  <tr key={i} className="border-b border-border">
                    <td className="px-3 py-2 font-medium text-foreground">{r.risk}</td>
                    <td className={`px-3 py-2 text-center ${color(r.likelihood)}`}>{r.likelihood}</td>
                    <td className={`px-3 py-2 text-center ${color(r.impact)}`}>{r.impact}</td>
                    <td className="max-w-sm px-3 py-2 text-muted-foreground">{r.mitigation}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </CountryPageLayout>
  );
}
