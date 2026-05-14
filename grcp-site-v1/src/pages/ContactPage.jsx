import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import college from '../theme';
import Navbar from '../components/Navbar';
import NavStrip from '../components/NavStrip';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

function MapPinIcon({ color }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke={color} strokeWidth="1.5">
      <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon({ color }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke={color} strokeWidth="1.5">
      <path d="M3 5a2 2 0 012-2h2.28l2.72 6.1-1.67 1.67a12 12 0 005.88 5.88l1.67-1.67L22 19.28V22a2 2 0 01-2 2A20 20 0 012 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EmailIcon({ color }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke={color} strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon({ color }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke={color} strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ContactInfoCards() {
  const cards = [
    {
      Icon: MapPinIcon,
      heading: 'Our Address',
      content: (
        <p className="font-dm-sans text-[14px] leading-[24px] text-[#474747]">
          {college.address}
        </p>
      ),
    },
    {
      Icon: PhoneIcon,
      heading: 'Phone',
      content: (
        <div className="space-y-1.5">
          <a
            href={`tel:${college.phone}`}
            className="font-dm-sans text-[14px] block underline"
            style={{ color: college.primaryColor }}
          >
            {college.phone}
          </a>
          <p className="font-dm-sans text-[13px] text-[#6B7280]">Admissions:</p>
          <a
            href={`tel:${college.admissionsPhone}`}
            className="font-dm-sans text-[14px] block underline"
            style={{ color: college.primaryColor }}
          >
            {college.admissionsPhone}
          </a>
          <p className="font-dm-sans text-[12px] text-[#6B7280]">{college.admissionsLabel}</p>
        </div>
      ),
    },
    {
      Icon: EmailIcon,
      heading: 'Email',
      content: (
        <a
          href={`mailto:${college.email}`}
          className="font-dm-sans text-[14px] underline break-all"
          style={{ color: college.primaryColor }}
        >
          {college.email}
        </a>
      ),
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white border rounded-2xl p-7"
          style={{ borderColor: `${college.primaryColor}18` }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            style={{ backgroundColor: `${college.primaryColor}10` }}
          >
            <card.Icon color={college.primaryColor} />
          </div>
          <h3
            className="font-hind font-semibold text-[16px] mb-3"
            style={{ color: college.primaryColor }}
          >
            {card.heading}
          </h3>
          {card.content}
        </div>
      ))}
    </section>
  );
}

function WorkingHoursCard() {
  return (
    <section>
      <div
        className="rounded-2xl p-7 border"
        style={{ borderColor: `${college.primaryColor}18`, backgroundColor: '#FAFAFA' }}
      >
        <div className="flex items-start gap-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${college.primaryColor}10` }}
          >
            <ClockIcon color={college.primaryColor} />
          </div>
          <div className="flex-1">
            <h3
              className="font-hind font-semibold text-[17px] mb-4"
              style={{ color: college.primaryColor }}
            >
              Working Hours
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 mb-4">
              <div className="flex justify-between font-dm-sans text-[14px]">
                <span className="text-[#6B7280]">Monday – Saturday</span>
                <span className="font-semibold text-[#474747]">9:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between font-dm-sans text-[14px]">
                <span className="text-[#6B7280]">2nd Saturday</span>
                <span className="font-semibold text-[#474747]">Holiday</span>
              </div>
              <div className="flex justify-between font-dm-sans text-[14px]">
                <span className="text-[#6B7280]">Sunday</span>
                <span className="font-semibold text-[#474747]">Closed</span>
              </div>
            </div>
            <div
              className="rounded-xl p-4"
              style={{ backgroundColor: `${college.primaryColor}08`, border: `1px solid ${college.primaryColor}18` }}
            >
              <p className="font-dm-sans text-[13px] text-[#474747]">
                <span className="font-semibold">Ragging Helpline (24×7):</span>{' '}
                <a
                  href="tel:18001805522"
                  className="underline font-semibold"
                  style={{ color: college.primaryColor }}
                >
                  1800-180-5522
                </a>
                {' '}— National Anti-Ragging Helpline (Toll Free)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const inputClass =
    'w-full font-dm-sans text-[14px] text-[#474747] border rounded-lg px-4 py-2.5 outline-none bg-white focus:ring-2 transition-shadow';
  const borderStyle = { borderColor: `${college.primaryColor}28` };

  return (
    <section>
      <div
        className="bg-white rounded-2xl border shadow-sm p-8"
        style={{ borderColor: `${college.primaryColor}18` }}
      >
        <h2
          className="font-hind font-bold text-[22px] mb-1"
          style={{ color: college.primaryColor }}
        >
          Get In Touch
        </h2>
        <p className="font-dm-sans text-[14px] text-[#6B7280] mb-7">
          Send us a message and we'll get back to you within 1–2 working days.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label className="font-dm-sans font-semibold text-[13px] text-[#474747] block mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className={inputClass}
              style={borderStyle}
            />
          </div>
          <div>
            <label className="font-dm-sans font-semibold text-[13px] text-[#474747] block mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className={inputClass}
              style={borderStyle}
            />
          </div>
          <div>
            <label className="font-dm-sans font-semibold text-[13px] text-[#474747] block mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              className={inputClass}
              style={borderStyle}
            />
          </div>
          <div>
            <label className="font-dm-sans font-semibold text-[13px] text-[#474747] block mb-1.5">
              Programme Interested In
            </label>
            <select
              className={inputClass}
              style={borderStyle}
              defaultValue=""
            >
              <option value="" disabled>Select a programme</option>
              <option>B.Pharmacy</option>
              <option>M.Pharmacy – Pharmaceutics</option>
              <option>M.Pharmacy – Pharmaceutical Analysis</option>
              <option>M.Pharmacy – Pharmacology</option>
              <option>General Inquiry</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="font-dm-sans font-semibold text-[13px] text-[#474747] block mb-1.5">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Write your message or query here..."
              className={inputClass + ' resize-none'}
              style={borderStyle}
            />
          </div>
        </div>
        <button
          className="font-dm-sans font-semibold text-[14px] text-white px-8 py-3 rounded-lg transition-opacity hover:opacity-85"
          style={{ backgroundColor: college.greenAccent }}
        >
          Send Message
        </button>
      </div>
    </section>
  );
}

function HowToReachSection() {
  const options = [
    {
      mode: 'By Road',
      desc: 'GRCP is accessible via Nizampet Bachupally Road. Well-connected by TSRTC buses, auto-rickshaws, and app-based cabs from all major parts of Hyderabad.',
    },
    {
      mode: 'From JNTU',
      desc: 'Located just 4 km from JNTU Kukatpally — easily reachable by shared autos and buses that ply the Kukatpally–Bachupally route.',
    },
    {
      mode: 'Metro',
      desc: 'Nearest metro station is JNTU College (Hyderabad Metro Blue Line). From there, take a cab or auto to reach GRCP in approximately 10 minutes.',
    },
  ];

  return (
    <section>
      <h2
        className="font-hind font-bold text-[22px] mb-6"
        style={{ color: college.primaryColor }}
      >
        How to Reach Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {options.map((o, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 border"
            style={{ borderColor: `${college.primaryColor}18`, backgroundColor: '#FAFAFA' }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: college.greenAccent }}
            >
              <span className="font-hind font-bold text-[13px] text-white">{i + 1}</span>
            </div>
            <h4
              className="font-hind font-semibold text-[15px] mb-2"
              style={{ color: college.primaryColor }}
            >
              {o.mode}
            </h4>
            <p className="font-dm-sans text-[13px] leading-[22px] text-[#474747]">{o.desc}</p>
          </div>
        ))}
      </div>
      <div
        className="mt-5 rounded-xl p-5 border"
        style={{ borderColor: `${college.greenAccent}30`, backgroundColor: `${college.greenAccent}0D` }}
      >
        <p className="font-dm-sans text-[14px] text-[#474747]">
          <span className="font-semibold">Landmark:</span> GRCP is situated on Nizampet Bachupally Road, Kukatpally. The college is easily identifiable
          from the main road and has adequate parking for visitors.
        </p>
      </div>
    </section>
  );
}

export default function ContactPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar college={college} />
      <NavStrip college={college} />
      <PageHero
        college={college}
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to us for admissions, academic queries, or general information."
        breadcrumb={['Contact Us']}
        bgImage={college.heroBgImage}
      />
      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <ContactInfoCards />
          <WorkingHoursCard />
          <ContactForm />
          <HowToReachSection />
        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
