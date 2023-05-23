import logo from './logo.svg';
import './App.css';


import Advisor from './Advisor.js';  

const data = [

  {
  name: "Michael Dixon", 
  title: "Head of the UK Royal Medical Household",
  bio: `Michael has held numerous national leadership roles including: - The first Chair of NHS Alliance (1998-2016), President of NHS Clinical Commissioners and as a leader within the GP/clinical commissioning movement.  He is currently Chair of the College of Medicine, Chair of The Institute for Social Prescription and Medical Advisor to HRH The Prince of Wales.  He is Visiting Professor at University College London and at the University of Westminster, a Senior Fellow in Public Policy (University of Birmingham) and an Honorary Senior Lecturer (Peninsula Medical School Exeter).  He is author of "Time to Heal" Unicorn Press Nov. 2020. He is also Head of the Royal Medical Household.`,
  image: 'dr-michael-dixon.jpg'
  },
  {
  name: "Sahil Sandhu", 
  title: "Medical Student, Harvard Medical School",
  bio: `Sahil Sandhu is pursuing an MD at Harvard Medical School. Sahil graduated from Duke University in 2020 with a self-designed bachelor's degree in health innovation. He studied the use of evidence-based practice to design, implement, and evaluate new health innovations. He first became interested in healthcare after traveling to Western Kenya to help deliver an HIV prevention intervention. Since then, he has worked on various local and global health innovation research projects, ranging from artificial intelligence tools to new healthcare payment models. His research with the Duke-Margolis Center for Health Policy and the Duke Institute for Health Innovation has resulted in eight peer-reviewed publications.
      
      Sahil's particular passion has been on the social determinants of health. While at Duke, he founded a student volunteer program to help patients connect to community resources for their unmet social needs such food insecurity and housing instability. Prior to HMS, Sahil completed his Master's in Health Services Research at Newcastle University as a US-UK Fulbright Scholar, where he explored the UK's innovative models to integrate health and social services. Sahil aspires to become a physician committed to building a stronger and more equitable healthcare system.`,
  image: "Sahil.png",
   },
  {
  name: "Dr Kate Mulligan", 
  title: "Faculty, University of Toronto Dalla Lana School of Public Health",
  bio: `Dr. Kate Mulligan is the founding director of the Canadian Institute for Social Prescribing and a senior advisor to
          the Canadian Red Cross on knowledge mobilization and determinants of health.
          A 2021 "pillar of the pandemic," Kate is an Assistant Professor in Social and Behavioural Health Sciences at the University of Toronto's Dalla Lana School of Public Health and School of Cities, where her research and teaching focus on scaling and spreading promising approaches
          to health equity, healthy public policy, and community leadership in health.
          Kate is a public member of the Toronto Board of Health and co-chairs the Global Social Prescribing Alliance. Find Kate on Twitter @KateMMulligan.`,
  image: "bw-profile-pic.png",
  },
  {
    name: "Marie Polley", 
    title: "Cofounder, the Social Prescribing Network",
    bio: `Marie is a freelance research consultant, past Chair of the British Society for Integrative Oncology, trained as a biomedical scientist and has a PhD in molecular carcinogenesis.  Marie led the team to write the first national guidance for social prescribing, the first economic overview of social prescribing on health service usage and recently mapped all outcomes associated with social prescribing to support discussion on inclusive ways of researching and evaluating this growing field. Marie provides advice to senior leaders, Members of Parliament and the House of Lords, key stakeholders, researchers and organisations in this field.

    For the past 14 years, Marie has researched and taught about approaches to integrating different paradigms of health and wellbeing, in her role as Senior Lecturer in Health Sciences and Research at the University of Westminster. 
    
    Marie is also Co-Director of Meaningful Measures which licences the person-centred outcome measures MYMOP® and MYCaW® and supports many organisations to capture the full impact of their social prescribing and personalised care schemes.
    
    Marie is also a Usui Reiki Master, a voluntary youth worker for her local church, loves getting out in nature and when near the sea will willingly jump on a surfboard and (attempt to) catch some waves.`,
    image: "marie-polley.jpg",
    },
    {
      name: "Bogdan Chivas", 
      title: "Dr Bogdan Chiva Giurca, Clinical Champion Lead and Development Lead, Global Social Prescribing Alliance",
      bio: `DR BOGDAN CHIVA GIURCA is the Founder and Chair of the NHS Social
      Prescribing Champion Scheme (2016-2021) consisting of thousands of UK
      junior doctors and medical students. Over a four-year period, the scheme has
      delivered over 700 teaching sessions in all UK medical schools, as well as
      developing a National Consensus for Teaching Social Prescribing. As the
      founder of the world's first International Social Prescribing Day, Bogdan has
      acted as an international champion, raising awareness of the subject globally.
      His work has influenced national healthcare policy and has driven key changes
      within the medical school curriculum, contributing to several peer-reviewed
      publications and policy documents, including the Global Social Prescribing
      Playbook (2021), NHS Long Term Plan (2019), Universal Personalised Care:
      Implementing the Comprehensive Model (2019), GP Partnership Review
      (2019), as well as authoring three books on medical education. Bogdan is
      currently working as a medical doctor within the London, South Thames
      Foundation School, Development Lead for the Global Social Prescribing
      Alliance and Clinical Champion Lead at the National Academy for Social
      Prescribing, as well as a Collaborator for the Harvard Global Health Institute."`,
      image: "1668790911523.jpg",
      },
      {
        name: "Reena Shukla", 
        title: "Health Team Lead, USAID",
        bio: `Reena Shukla is a Builder Fellow at the Harvard D-Lab. She is a Foreign Service Officer and serves as a public health specialist with the United States Agency for Development (USAID). Reena has over 15 years of experience working
        to advance complex global health issues with long-term assignments in Brazil, Mozambique, Zimbabwe, Washington, D.C., and Pakistan. She is passionate about harnessing multidisciplinary approaches to catalyze inclusive solutions to advance health and well-being across communities, organizations, and systems.
        Reena's experiences working in global public health across 5 continents inspired her to explore how can design knowledge help organizations gain deeper insights across diverse contexts and develop integrative approaches that advance health and well-being. Given the rise of urban populations across the globe and its implications on people’s daily life, she became interested in exploring the intersection of design and public health in order to promote broader urban well-being.
        Reena graduated from the University of Michigan with a Bachelor of Arts and Master’s in Public Health focused
        on Health Policy and Management/Global Health. She is fluent in Spanish, Portuguese, Nepali, and Urdu. She is
        also actively engaged in arts and culture and serves on several national committees on building evidence on the intersection of arts and culture for public health and broader well-being.`,
        image: "1675522866927.jpg",
        },
        {
          name: "Ardeshir Hashmi", 
          title: "Endowed Chair of Geriatric Innovation, Cleveland Clinic",
          bio: `Dr. Ardeshir Z. Hashmi MD, FACP is the Endowed Chair of Geriatric Innovation and Section Chief of the Center for Geriatric Medicine at Cleveland Clinic. He is Assistant Professor of Medicine at the Case Western Reserve University and the Cleveland Clinic Lerner College of Medicine.

          Dr. Hashmi completed a two year postdoctoral research fellowship at Yale University. He completed his Internal Medicine residency at the Yale-Saint Mary’s Hospital in Connecticut, where he served as Chief Medical resident. He then trained at Massachusetts General Hospital, as a Clinical and Research Fellow in Geriatrics before becoming Faculty and then Medical Director of MGH Senior Health-Harvard Medicine. Dr. Hashmi subsequently transitioned to the Cleveland Clinic in 2017.
         
         He is a Fellow of the American College of Physicians, a graduate of the Clinical Process Improvement Leadership Program and the Value Based Healthcare Delivery via the Harvard Business School Institute of Strategy& Competitiveness. Dr. Hashmi is also certified as an Advanced Peer Coach through the Cleveland Clinic Center for Excellence in Coaching and Mentoring. He is Co-Chair of the national American Geriatrics Society (AGS) Patient Priorities Care American Geriatrics Society Special Interest Group  (SIG) and member of the AGS  Health Systems Leadership SIG. Dr. Hashmi is also member of the Association of Chiefs and Leaders in General Internal Medicine and serves on the Cleveland Clinic National Consultation Service. He has also been selected for the prestigious Tideswell Emerging Leaders in Aging (ELIA) program in conjunction with the American Geriatric Society and the University of California San Francisco.
         
         Under Dr. Hashmi’s leadership Cleveland Clinic Geriatrics has garnered the following milestones: Age Friendly Health Systems Committed to Care Excellence designation via the Institute for Healthcare Improvement; highest Geriatrics US News and World report national rankings in Cleveland Clinic history; national accreditation as a top tier Level 1 Geriatrics Emergency Department by the American College of Emergency Physicians.
         
         Dr. Hashmi’s niche area of interest is the intersection of affordable technology solutions and geriatric population health in the service our most vulnerable populations.
         
         `,
          image: "ardeshir-hashmi.jpg",
          },
  
]

function App() {
  
  return (
    <>
    <header>
      <h1>Advisors</h1>
    </header>
    {data.map((advisor) => 
    <Advisor 
        name={advisor.name}
        title={advisor.title}
        img={`/images/${advisor.image}`}
        key={advisor.name}
    >
    {advisor.bio}
    </Advisor>)}
  </>
  );
}

export default App;
