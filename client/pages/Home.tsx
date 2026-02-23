import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Award, Users, BookOpen, Award as AwardIcon } from "lucide-react";

export default function Home() {
  const stats = [
    { label: "Years Experience", value: "14+", icon: Users },
    { label: "Patients Treated", value: "10000+", icon: Users },
    { label: "Research Papers", value: "4+", icon: BookOpen },
    { label: "Awards & Honors", value: "5+", icon: AwardIcon },
  ];

  const expertise = [
    { title: "General Medicine", description: "Comprehensive internal medicine care" },
    { title: "Diabetology", description: "Specialized diabetes management & treatment" },
    { title: "Respiratory Care", description: "Advanced respiratory disease treatment" },
    { title: "Allergy & Asthma", description: "Allergy diagnosis and management" },
    { title: "Endocrinology", description: "Hormonal disorder management" },
    { title: "Pulmonology", description: "Lung disease specialization" },
  ];

  const awards = [
    {
      title: "FICP (Fellow of Indian College of Physicians)",
      description: "India's highest medical honor for excellence in internal medicine",
      year: "2024",
    },
    {
      title: "Best Poster Award",
      description: "PULMOKARN 2016 - Recognition for research excellence",
      year: "2016",
    },
    {
      title: "KRSSDI Quiz Competition",
      description: "Second place at state-level diabetes competition",
      year: "2012",
    },
  ];

  const mediaQuotes = [
    {
      outlet: "Times of India",
      excerpt: "Dr. Darshana Reddy leads the charge in diabetes and endocrine care in North Bangalore",
      date: "February 2024",
    },
    {
      outlet: "Bangalore Mirror",
      excerpt: "Her expertise in respiratory diseases sets her apart in internal medicine",
      date: "January 2024",
    },
    {
      outlet: "Deccan Herald",
      excerpt: "A beacon of medical excellence serving the Bangalore community",
      date: "December 2023",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-bounce-soft" />

        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
                Dr. Darshana Reddy
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-4 font-semibold animate-slide-up" style={{animationDelay: '100ms'}}>
                Senior Consultant - Internal Medicine & Diabetologist
              </p>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed animate-slide-up" style={{animationDelay: '200ms'}}>
                14 years of dedicated excellence in internal medicine, diabetes management, and respiratory care. Recognized for clinical expertise, research contributions, and compassionate patient care.
              </p>
              <div className="flex gap-4 flex-wrap animate-slide-up" style={{animationDelay: '300ms'}}>
                <Link
                  to="/contact"
                  className="btn-accent hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  Book Appointment
                </Link>
                <Link
                  to="/about"
                  className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex justify-center animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/50 rounded-2xl blur-xl opacity-50 animate-pulse-glow" />
                <div className="w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gray-200 relative border-4 border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F25125c27db8e4312bad1ed13783208b5%2F5541045c8f37402690c453b2a605f8a5?format=webp&width=800&height=1200"
                    alt="Dr. Darshana Reddy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg hover:border-accent hover:border-2 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-slide-up cursor-pointer group"
                  style={{animationDelay: `${idx * 100}ms`}}
                >
                  <div className="relative inline-block mb-3">
                    <div className="absolute inset-0 bg-accent/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 group-hover:scale-150" />
                    <Icon className="w-8 h-8 text-accent mx-auto relative" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="container-max relative z-10">
          <h2 className="text-center mb-16 animate-slide-up">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:border-accent border-2 border-transparent transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-slide-up group cursor-pointer"
                style={{animationDelay: `${idx * 100}ms`}}
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-500 rounded-t-xl" />
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 blur-3xl" />
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="mb-6 animate-slide-up">About Dr. Darshana</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed animate-slide-up" style={{animationDelay: '100ms'}}>
                Dr. Darshana Reddy is a highly accomplished Senior Consultant at Altius Hospital with a passion for delivering exceptional patient care. Her clinical journey spans 14 years of dedicated service in internal medicine and diabetes management.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed animate-slide-up" style={{animationDelay: '200ms'}}>
                With multiple advanced certifications including MD, DNB, Fellowship in Diabetes, and specialization in Allergy & Asthma, she brings comprehensive expertise to complex medical conditions.
              </p>
              <Link
                to="/about"
                className="inline-block btn-primary hover:scale-105 hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{animationDelay: '300ms'}}
              >
                View Full Profile
              </Link>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-2xl border border-accent/20 hover:shadow-xl transition-all duration-300 animate-slide-in-right transform hover:scale-105">
              <div className="space-y-4">
                {[
                  {
                    title: "Medical Superintendent",
                    subtitle: "Altius Hospital, Bangalore",
                  },
                  {
                    title: "Fellowship in Diabetes",
                    subtitle: "Medvarsity, affiliated to Liverpool UK",
                  },
                  {
                    title: "DNB & MD",
                    subtitle: "General Medicine, Navodaya Medical College",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 animate-slide-up group"
                    style={{animationDelay: `${400 + idx * 100}ms`}}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                    <div>
                      <h4 className="font-bold text-primary group-hover:text-accent transition-colors duration-300">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="container-max relative z-10">
          <h2 className="text-center mb-16 animate-slide-up">Recognition & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-md border-l-4 border-accent hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-slide-up group"
                style={{animationDelay: `${idx * 100}ms`}}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/30 rounded-lg blur group-hover:blur-lg transition-all duration-300" />
                    <Award className="w-8 h-8 text-accent flex-shrink-0 relative" />
                  </div>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    {award.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                  {award.title}
                </h3>
                <p className="text-muted-foreground">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media & Press Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="container-max relative z-10">
          <h2 className="text-center mb-16 animate-slide-up">Featured in Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaQuotes.map((media, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl border border-primary/10 hover:border-accent hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-slide-up group cursor-pointer"
                style={{animationDelay: `${idx * 100}ms`}}
              >
                <h3 className="text-accent font-bold mb-3 text-lg group-hover:text-primary transition-colors duration-300">
                  {media.outlet}
                </h3>
                <p className="text-muted-foreground mb-4 italic group-hover:text-primary/70 transition-colors duration-300">
                  "{media.excerpt}"
                </p>
                <p className="text-sm text-muted-foreground/70">{media.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full -ml-40 blur-3xl animate-bounce-soft" />
        </div>
        <div className="container-max text-center relative z-10">
          <h2 className="text-white mb-6 animate-slide-up">Ready to Schedule Your Consultation?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '100ms'}}>
            Book your appointment with Dr. Darshana Reddy for personalized, expert medical care.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-accent-foreground hover:opacity-90 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-slide-up animate-pulse-glow"
            style={{animationDelay: '200ms'}}
          >
            Book Your Appointment Now
          </Link>
        </div>
      </section>
    </Layout>
  );
}
