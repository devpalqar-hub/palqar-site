"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ArrowRight, MapPin, Phone, Mail, Paperclip, ChevronDown } from "lucide-react";
import styles from "./Contact.module.css";

/* ─────────────────────────────────────────────────────
   COUNTRIES
───────────────────────────────────────────────────── */
const COUNTRIES = [
  { code: "IN", dial: "+91", flag: "🇮🇳" },
  { code: "US", dial: "+1",  flag: "🇺🇸" },
  { code: "GB", dial: "+44", flag: "🇬🇧" },
  { code: "AE", dial: "+971",flag: "🇦🇪" },
  { code: "SG", dial: "+65", flag: "🇸🇬" },
  { code: "AU", dial: "+61", flag: "🇦🇺" },
  { code: "CA", dial: "+1",  flag: "🇨🇦" },
  { code: "DE", dial: "+49", flag: "🇩🇪" },
];

/* ─────────────────────────────────────────────────────
   PHONE FIELD
───────────────────────────────────────────────────── */
function PhoneField() {
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={styles.fieldGroup}>
      <label className={styles.label}>
        Phone Number <span className={styles.req}>*</span>
      </label>
      <div className={styles.phoneRow}>
        <div ref={ref} className={styles.flagWrap}>
          <button
            type="button"
            className={`${styles.flagBtn} ${open ? styles.flagBtnOpen : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span className={styles.flagEmoji}>{country.flag}</span>
            <span className={styles.dialCode}>{country.dial}</span>
            <ChevronDown size={13} className={styles.chevron} />
          </button>

          {open && (
            <div className={styles.dropdown}>
              {COUNTRIES.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  className={`${styles.dropdownItem} ${country.code === c.code ? styles.dropdownItemActive : ""}`}
                  onClick={() => { setCountry(c); setOpen(false); }}
                >
                  <span className={styles.cFlag}>{c.flag}</span>
                  <span className={styles.cDial}>{c.dial}</span>
                  <span className={styles.cCode}>{c.code}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <input
          type="tel"
          placeholder="Phone number"
          className={`${styles.input} ${styles.phoneInput}`}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   FIELD
───────────────────────────────────────────────────── */
function Field({ label, required, placeholder, type = "text", full = false }) {
  return (
    <div className={`${styles.fieldGroup} ${full ? styles.fieldFull : styles.fieldHalf}`}>
      <label className={styles.label}>
        {label} {required && <span className={styles.req}>*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   TEXTAREA
───────────────────────────────────────────────────── */
function TextArea({ label, required, placeholder }) {
  return (
    <div className={`${styles.fieldGroup} ${styles.fieldFull}`}>
      <label className={styles.label}>
        {label} {required && <span className={styles.req}>*</span>}
      </label>
      <textarea
        placeholder={placeholder}
        className={styles.textarea}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   FILE UPLOAD
───────────────────────────────────────────────────── */
function FileUpload({ label, id }) {
  const [fileName, setFileName] = useState(null);
  return (
    <div className={styles.fieldFull}>
      <label className={styles.fileUpload}>
        <Paperclip size={20} className={styles.fileIcon} />
        <div>
          <p className={styles.fileUploadTitle}>{fileName || label}</p>
          <p className={styles.fileUploadMeta}>Max 10 MB · pdf, doc, png, jpeg, docx</p>
        </div>
        <input
          type="file"
          hidden
          onChange={(e) => e.target.files[0] && setFileName(e.target.files[0].name)}
        />
      </label>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   PHONE FIELD HALF WRAPPER
───────────────────────────────────────────────────── */
function PhoneFieldHalf() {
  return (
    <div className={styles.fieldHalf}>
      <PhoneField />
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   SUBMIT BUTTON
───────────────────────────────────────────────────── */
function SubmitBtn({ label = "Submit Inquiry" }) {
  return (
    <div className={`${styles.fieldFull} ${styles.submitWrap}`}>
      <button type="button" className={styles.submitBtn}>
        {label}
        <span className={styles.submitArrow}>
          <ArrowUpRight size={16} />
        </span>
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   FORM PANELS
───────────────────────────────────────────────────── */
function WorkEnquiryForm() {
  return (
    <div className={styles.formGrid}>
      <Field label="Full Name"             required placeholder="Enter your full name"          />
      <Field label="Company / Brand Name"  required placeholder="Enter your company name"       />
      <Field label="Designation / Role"    required placeholder="Enter your designation"        />
      <Field label="Email Address"         required placeholder="Enter your email address" type="email" />
      <PhoneFieldHalf />
      <Field label="Service Interested In" required placeholder="e.g., Web Development, Branding" />
      <Field label="Project Budget Range"  required placeholder="e.g., $5,000 – $10,000"       />
      <Field label="Project Timeline / Expected Start Date" required placeholder="e.g., Next Month, Q3 2025" full />
      <TextArea label="Message / Brief about your project" required placeholder="Tell us more about your vision, goals, and any specific requirements…" />
      <FileUpload label="Add an attachment (Optional)" />
      <SubmitBtn />
    </div>
  );
}

// function PeopleTalentForm() {
//   return (
//     <div className={styles.formGrid}>
//       <Field label="Full Name"                  required placeholder="Enter your full name"                    />
//       <Field label="Email Address"              required placeholder="Enter your email address" type="email"   />
//       <Field label="Current Role / Title"       required placeholder="e.g., Senior Designer, Full-Stack Dev"  />
//       <Field label="LinkedIn Profile"                    placeholder="https://linkedin.com/in/yourprofile" type="url" />
//       <Field label="Skills / Area of Expertise" required placeholder="e.g., Branding, Motion, React, Strategy" />
//       <Field label="Portfolio / Website URL"             placeholder="https://yourportfolio.com" type="url"   />
//       <Field label="Availability"               required placeholder="e.g., Immediate, 2 weeks notice"        />
//       <Field label="Preferred Engagement Type"  required placeholder="e.g., Full-time, Freelance, Internship" />
//       <TextArea label="Brief Introduction / Cover Note" required placeholder="Tell us a little about yourself, what drives you, and why Palqar…" />
//       <FileUpload label="Attach Resume / CV (Optional)" />
//       <SubmitBtn label="Submit Application" />
//     </div>
//   );
// }

function CustomerSupportForm() {
  return (
    <div className={styles.formGrid}>
      <Field label="Full Name"                   required placeholder="Enter your full name"             full />
      <Field label="Registered Email / Client ID" required placeholder="Enter your email or Client ID"  />
      <Field label="Project / Service Name"       required placeholder="Enter the project or service name" />
      <Field label="Email Address"                required placeholder="Enter your email address" type="email" />
      <PhoneFieldHalf />
      <Field label="Type of Issue"                required placeholder="e.g., Technical, Billing, General Inquiry" full />
      <TextArea label="Description of Issue"      required placeholder="Describe your issue in as much detail as possible…" />
      <FileUpload label="Upload Screenshots / Files (Optional)" />
      <SubmitBtn label="Submit Support Request" />
    </div>
  );
}

function PartnershipForm() {
  return (
    <div className={styles.formGrid}>
      <Field label="Full Name"                        required placeholder="Enter your full name"                  />
      <Field label="Company / Organization Name"      required placeholder="Enter your company name"               />
      <Field label="Designation / Role"               required placeholder="Enter your designation"                />
      <Field label="Email Address"                    required placeholder="Enter your email address" type="email" />
      <PhoneFieldHalf />
      <Field label="Partnership Type"                 required placeholder="e.g., Agency, Tech Partner, Reseller"  />
      <Field label="Existing Clients or Key Markets"  required placeholder="Enter your key clients or target markets" />
      <Field label="Website / Portfolio"                       placeholder="https://yourcompany.com" type="url"    />
      <TextArea label="Objective of Partnership" required placeholder="Describe what you're hoping to achieve through this collaboration…" />
      <FileUpload label="Add Supporting Documents (Optional)" />
      <SubmitBtn label="Submit Partnership Request" />
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   TABS CONFIG
───────────────────────────────────────────────────── */
const TABS = [
  {
    id: "work",
    label: "Work Enquiry",
    desc: "For businesses or brands wanting to collaborate or request a proposal",
    Form: WorkEnquiryForm,
  },
  // {
  //   id: "talent",
  //   label: "People & Talent",
  //   desc: "For individuals looking to join our team or collaborate as freelancers",
  //   Form: PeopleTalentForm,
  // },
  {
    id: "support",
    label: "Customer Support",
    desc: "For existing clients seeking assistance with ongoing projects",
    Form: CustomerSupportForm,
  },
  {
    id: "partner",
    label: "Partnership",
    desc: "For agencies, studios, tech partners, and innovators who want to collaborate with us",
    Form: PartnershipForm,
  },
];

/* ─────────────────────────────────────────────────────
   CONTACT DETAIL
───────────────────────────────────────────────────── */
function ContactDetail({ icon, label, value }) {
  return (
    <div className={styles.contactDetail}>
      <div className={styles.contactDetailLabel}>
        {icon}
        <span className={styles.contactDetailText}>{label}</span>
      </div>

      <p className={styles.contactDetailValue}>{value}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   LOCATION SECTION
───────────────────────────────────────────────────── */
function LocationSection() {
  return (
    <section className={styles.locationSection}>
      <div className={styles.sectionLabel}>
        <div className={styles.labelLine} />
        <span className={styles.labelText}>Where To Find Us</span>
      </div>

      <div className={styles.locationCard}>
        {/* Info */}
        <div className={styles.locationInfo}>
          <div className={styles.locationNameRow}>
            <div className={styles.locationIcon}>
              <MapPin size={20} color="#dc3545" />
            </div>
            <h3 className={styles.locationName}>STS Arcade Calicut</h3>
          </div>

          <p className={styles.locationAddress}>
            Palqar<br />
            2nd floor, STS Arcade, PO, Balan K Nair Rd, near Bramakumari,<br />
            Kozhikode, Kerala 673001
          </p>

          <div className={styles.locationDivider} />

          <div className={styles.contactGrid}>
            <ContactDetail icon={<Phone size={16} />} label="Contact HR"    value="+91 09995498218" />
            <ContactDetail icon={<Phone size={16} />} label="Contact Sales" value="+91 09995498218" />
            <ContactDetail icon={<Mail  size={16} />} label="Email HR"      value="hr@palqar.com"   />
            <ContactDetail icon={<Mail  size={16} />} label="Email Sales"   value="hello@palqar.com" />
          </div>
        </div>

        {/* Map */}
        <div className={styles.mapWrapper}>
          <iframe
            title="Palqar Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.9470331806524!2d75.7807444744938!3d11.265303949987159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65988f5fc9d1d%3A0x87bffcb144827fcf!2sParasya%20Technologies!5e0!3m2!1sen!2sin!4v1772437971239!5m2!1sen!2sin"
            className={styles.mapIframe}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────── */
export default function Contact() {
  const [activeTab, setActiveTab] = useState("work");
  const current = TABS.find((t) => t.id === activeTab);

  return (
    <main className={styles.contactPage}>

      {/* ── HEADER ── */}
      <header className={styles.header}>
        <div className={styles.headerInner}>

          <div className={styles.titleBlock}>
            <div className={styles.sectionLabel}>
              <div className={styles.labelLine} />
              <span className={styles.labelText}>Contact</span>
            </div>
            <h1 className={styles.title}>
              No Frills,<br />
              <span className={styles.titleAccent}>No Fluff.</span>
            </h1>
          </div>

          <div className={styles.headerMeta}>
            <p className={styles.headerDesc}>
              Real conversations,<br />
              honest timelines,<br />
              and work that ships.
            </p>
            <div className={styles.responseTime}>
              <span className={styles.responseNumber}>24h</span>
              <span className={styles.responseLabel}>Response Time</span>
            </div>
          </div>

        </div>
        <div className={styles.headerDivider} />
      </header>

      {/* ── FORM SECTION ── */}
      <section className={styles.formSection}>

        {/* Tabs */}
        <div className={styles.tabs}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <p className={styles.panelTag}>{current.label}</p>
            <p className={styles.panelDesc}>{current.desc}</p>
          </div>
          <div key={activeTab} className={styles.panelBody}>
            <current.Form />
          </div>
        </div>

      </section>

      {/* ── LOCATION ── */}
      <div className={styles.sectionDivider} />
      <LocationSection />

      {/* ── CTA ── */}
      <section
        className={styles.initiateProject}
        aria-label="Start a project"
      >
        <div className={styles.column}>
          <p className={styles.lets}>
            LET&apos;S <span className={styles.talk}>TALK</span>
          </p>
          <div className={styles.buttonWrapper}>
            <button aria-label="Start a project with Palqar">START A PROJECT</button>
            <div className={styles.arrowRight} aria-hidden="true">
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}