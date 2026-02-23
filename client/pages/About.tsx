import { Layout } from "@/components/Layout";
import { GraduationCap, Award, Users, BookOpen } from "lucide-react";

export default function About() {
  const education = [
    {
      degree: "M.B.B.S",
      institution: "Navodaya Medical College",
      year: "2010",
    },
    {
      degree: "M.D (General Medicine)",
      institution: "Navodaya Medical College",
      year: "2013",
    },
    {
      degree: "D.N.B (General Medicine)",
      institution: "National Board of Examinations",
      year: "2013",
    },
    {
      degree: "Fellowship in Diabetes",
      institution: "Medvarsity, affiliated to Liverpool UK",
      year: "2015",
    },
    {
      degree: "Diploma in Allergy & Asthma (DAA)",
      institution: "C.M.C, Vellore",
      year: "2016",
    },
  ];

  const affiliations = [
    "Executive Committee Member - API (2023-2026)",
    "Current Executive Committee Member - API (2025-26)",
    "Internal Audit Committee Member - API (2025-26)",
    "Life Member - Respiratory Society of South India (RSSDI)",
    "Life Member - Indian Medical Association (IMA)",
    "Life Member - European Respiratory Society (ERS)",
    "Life Member - Indian Association of Endocrinologists (IAE)",
  ];

  const research = [
    { label: "Paper Presentations", value: "4", icon: BookOpen },
    { label: "Publications", value: "1", icon: Users },
    { label: "Poster Presentations", value: "2", icon: Award },
    { label: "Research Articles", value: "1", icon: BookOpen },
  ];

  const community = [
    "Conducts free diabetes camps twice a month for the past 5+ years",
    "Regular columnist in Times of India, Bangalore Mirror, and Deccan Herald",
    "Active participant in national scientific forums and seminars",
    "Mentors young medical professionals in internal medicine",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-12 md:py-16">
        <div className="container-max">
          <h1 className="text-white mb-4">About Dr. Darshana Reddy</h1>
          <p className="text-lg text-primary-foreground/90">
            Senior Consultant, Internal Medicine & Diabetologist at Altius Hospital
          </p>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-xl border border-accent/20">
              <Users className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">14+</h3>
              <p className="text-muted-foreground">Years of Clinical Experience</p>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-xl border border-accent/20">
              <Award className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Multiple</h3>
              <p className="text-muted-foreground">Prestigious Certifications & Awards</p>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-xl border border-accent/20">
              <BookOpen className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Active</h3>
              <p className="text-muted-foreground">Research & Academic Contributions</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Dr. Darshana Reddy is a distinguished Senior Consultant and Medical Superintendent at Altius Hospital in Bangalore, commanding a reputation for clinical excellence, innovative research, and patient-centric care. With 14 years of progressive experience in internal medicine, she has become a trusted healthcare provider in North Bangalore, particularly renowned for her expertise in diabetes management and respiratory diseases.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Her journey in medicine reflects a commitment to continuous learning and professional excellence. Dr. Reddy has published research papers, presented at national conferences, and actively contributes to advancing medical knowledge through her work in endocrinology and respiratory medicine. Beyond her clinical practice, she is deeply invested in community health education, conducting regular diabetes awareness camps and serving as a medical columnist in prominent publications.
            </p>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="mb-12">Educational Qualifications</h2>
          <div className="max-w-3xl mx-auto">
            {education.map((edu, idx) => (
              <div key={idx} className="flex gap-6 mb-8 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                    <GraduationCap size={24} />
                  </div>
                  {idx < education.length - 1 && (
                    <div className="w-1 h-24 bg-accent/30 mt-4"></div>
                  )}
                </div>
                <div className="pb-8 flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                    {edu.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-center mb-16">Research & Academic Contributions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {research.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <p className="text-3xl font-bold text-primary mb-2">
                    {item.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-xl border border-primary/10">
            <h3 className="font-bold text-primary mb-4">Recognition</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Best Poster Award</strong> - PULMOKARN 2016
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  <strong>KRSSDI Quiz Competition</strong> - Second place at state level 2012
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Annual Conference Award</strong> - Indian Medical Association for contributions to research and teaching
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Professional Affiliations */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="mb-12">Professional Affiliations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {affiliations.map((affiliation, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:border-accent border-2 border-transparent transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Service */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="mb-12">Community Service & Engagement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {community.map((activity, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-start p-6 bg-gradient-to-r from-accent/5 to-transparent rounded-xl border border-accent/20"
              >
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{activity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Position */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5 border-y border-primary/10">
        <div className="container-max max-w-3xl">
          <h2 className="mb-8">Current Position</h2>
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-accent">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Senior Consultant & HOD
            </h3>
            <p className="text-lg font-semibold text-accent mb-4">
              Department of Internal Medicine, Altius Hospitals, Bangalore
            </p>
            <p className="text-lg font-semibold text-accent mb-6">
              Medical Superintendent, Altius Hospitals
            </p>
            <p className="text-muted-foreground mb-4">
              Leading the department of internal medicine with focus on comprehensive patient care, medical education, and research advancement. Actively involved in hospital governance and strategic planning.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Location: HBR Layout, Bangalore | Contact: +91 8882 799 799
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
