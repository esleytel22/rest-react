import React from 'react';

import { SubHeading } from '../../components';
import { supabase } from '../../supabaseClient';
import './BookEvent.css';

const EVENT_TYPES = [
  { value: 'dinner',    label: 'Private Dinner' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'wedding',   label: 'Wedding / Rehearsal' },
  { value: 'buyout',    label: 'Full Buyout' },
  { value: 'catering',  label: 'Off-Site Catering' },
  { value: 'tasting',   label: 'Wine Tasting Dinner' },
  { value: 'other',     label: 'Other' },
];
const PARTY_SIZES = ['< 10', '10–25', '25–60', '60+ (buyout)'];
const DAYS = ['Weeknight (Mon–Thu)', 'Friday', 'Saturday', 'Sunday', 'Flexible'];
const ADDONS = ['Wine Pairings', 'Custom Printed Menus', 'Floral Arrangements', 'AV / Presentation Setup', 'Celebration Cake', 'Valet Parking'];

const EMPTY = {
  orgName: '', contactName: '', email: '', phone: '',
  eventType: '', eventTitle: '', description: '',
  audienceSize: '', day: '', duration: '',
  equipmentNeeds: [], website: '', prevExperience: '',
};

const BookEvent = () => {
  const [form, setForm] = React.useState(EMPTY);
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(null);

  const set = (key, val) => {
    setForm((f) => ({ ...f, [key]: val }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: null }));
  };

  const toggleAddon = (item) => {
    setForm((f) => ({
      ...f,
      equipmentNeeds: f.equipmentNeeds.includes(item)
        ? f.equipmentNeeds.filter((e) => e !== item)
        : [...f.equipmentNeeds, item],
    }));
  };

  const validate = () => {
    const e = {};
    if (!form.contactName.trim())  e.contactName  = 'Required';
    if (!form.email.includes('@')) e.email        = 'Valid email required';
    if (!form.eventType)           e.eventType    = 'Select a type';
    if (!form.eventTitle.trim())   e.eventTitle   = 'Required';
    if (!form.audienceSize)        e.audienceSize = 'Required';
    if (!form.day)                 e.day          = 'Required';
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setIsSubmitting(true); setSubmitError(null);

    const { error } = await supabase
      .from('event_requests')
      .insert([{
        org_name:        form.orgName,
        contact_name:    form.contactName,
        email:           form.email,
        phone:           form.phone,
        website:         form.website,
        event_type:      form.eventType,
        event_title:     form.eventTitle,
        description:     form.description,
        preferred_day:   form.day,
        duration:        form.duration,
        audience_size:   form.audienceSize,
        equipment_needs: form.equipmentNeeds,
        prev_experience: form.prevExperience,
      }])
      .select();

    setIsSubmitting(false);
    if (error) { setSubmitError(error.message); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="app__bg app__bookevent flex__center section__padding" id="book">
        <div className="app__bookevent-success flex__center">
          <SubHeading title="Request Received" />
          <h1 className="headtext__cormorant">Your Table Awaits</h1>
          <p className="p__opensans app__bookevent-success_text">
            Thank you, {form.contactName}. Our events team will reach out at {form.email} within
            1–2 business days to start planning &quot;{form.eventTitle}&quot;.
          </p>
          <button
            type="button"
            className="custom__button"
            onClick={() => { setForm(EMPTY); setSubmitted(false); setErrors({}); setSubmitError(null); }}
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app__bg app__bookevent flex__center section__padding" id="book">
      <div className="app__bookevent-title">
        <SubHeading title="Private Events & Catering" />
        <h1 className="headtext__cormorant">Host Your Event</h1>
        <p className="p__opensans app__bookevent-sub">
          Rehearsal dinners, corporate gatherings, full buyouts — tell us what you&apos;re
          celebrating and our events team will build the evening around it.
        </p>
      </div>

      <div className="app__bookevent-form">
        <div className="app__bookevent-grid">
          <div className="app__bookevent-field">
            <label className="p__opensans">Contact Name *</label>
            <input
              className={errors.contactName ? 'app__bookevent-input--err' : ''}
              value={form.contactName}
              onChange={(e) => set('contactName', e.target.value)}
              placeholder="Full name"
            />
            {errors.contactName && <span className="app__bookevent-error">{errors.contactName}</span>}
          </div>
          <div className="app__bookevent-field">
            <label className="p__opensans">Email *</label>
            <input
              type="email"
              className={errors.email ? 'app__bookevent-input--err' : ''}
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
              placeholder="you@example.com"
            />
            {errors.email && <span className="app__bookevent-error">{errors.email}</span>}
          </div>
          <div className="app__bookevent-field">
            <label className="p__opensans">Phone</label>
            <input value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="+1 (555) 000-0000" />
          </div>
          <div className="app__bookevent-field">
            <label className="p__opensans">Company / Party Name</label>
            <input value={form.orgName} onChange={(e) => set('orgName', e.target.value)} placeholder="Optional" />
          </div>
        </div>

        <div className="app__bookevent-field">
          <label className="p__opensans">Event Type *</label>
          <div className="app__bookevent-chips">
            {EVENT_TYPES.map((t) => (
              <button
                key={t.value}
                type="button"
                className={`app__bookevent-chip p__opensans ${form.eventType === t.value ? 'app__bookevent-chip--active' : ''}`}
                onClick={() => set('eventType', t.value)}
              >
                {t.label}
              </button>
            ))}
          </div>
          {errors.eventType && <span className="app__bookevent-error">{errors.eventType}</span>}
        </div>

        <div className="app__bookevent-field">
          <label className="p__opensans">Occasion *</label>
          <input
            className={errors.eventTitle ? 'app__bookevent-input--err' : ''}
            value={form.eventTitle}
            onChange={(e) => set('eventTitle', e.target.value)}
            placeholder="e.g. Rehearsal dinner for the Riveras"
          />
          {errors.eventTitle && <span className="app__bookevent-error">{errors.eventTitle}</span>}
        </div>

        <div className="app__bookevent-grid app__bookevent-grid--three">
          <div className="app__bookevent-field">
            <label className="p__opensans">Preferred Day *</label>
            <select
              className={errors.day ? 'app__bookevent-input--err' : ''}
              value={form.day}
              onChange={(e) => set('day', e.target.value)}
            >
              <option value="" disabled>Select…</option>
              {DAYS.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
            {errors.day && <span className="app__bookevent-error">{errors.day}</span>}
          </div>
          <div className="app__bookevent-field">
            <label className="p__opensans">Preferred Time</label>
            <input value={form.duration} onChange={(e) => set('duration', e.target.value)} placeholder="e.g. 7:00 PM" />
          </div>
          <div className="app__bookevent-field">
            <label className="p__opensans">Party Size *</label>
            <select
              className={errors.audienceSize ? 'app__bookevent-input--err' : ''}
              value={form.audienceSize}
              onChange={(e) => set('audienceSize', e.target.value)}
            >
              <option value="" disabled>Select…</option>
              {PARTY_SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            {errors.audienceSize && <span className="app__bookevent-error">{errors.audienceSize}</span>}
          </div>
        </div>

        <div className="app__bookevent-field">
          <label className="p__opensans">Add-Ons & Extras</label>
          <div className="app__bookevent-chips">
            {ADDONS.map((item) => {
              const checked = form.equipmentNeeds.includes(item);
              return (
                <button
                  key={item}
                  type="button"
                  className={`app__bookevent-chip p__opensans ${checked ? 'app__bookevent-chip--active' : ''}`}
                  onClick={() => toggleAddon(item)}
                >
                  {checked ? '✓ ' : ''}{item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="app__bookevent-field">
          <label className="p__opensans">Tell Us About Your Event</label>
          <textarea
            value={form.description}
            onChange={(e) => set('description', e.target.value)}
            placeholder="The occasion, dietary needs, and the vibe you're after..."
          />
        </div>

        {submitError && <p className="app__bookevent-error">Something went wrong: {submitError}</p>}

        <div className="app__bookevent-submit flex__center">
          <button
            type="button"
            className="custom__button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            style={{ opacity: isSubmitting ? 0.6 : 1 }}
          >
            {isSubmitting ? 'Sending…' : 'Request Your Date'}
          </button>
          <span className="p__opensans app__bookevent-required">* Required fields</span>
        </div>
      </div>
    </div>
  );
};

export default BookEvent;
