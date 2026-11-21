import { useState } from 'react';
const number = '919118474846';
export default function ModelBookingForm() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [shoot, setShoot] = useState('');
  const [city, setCity] = useState('Lucknow');
  const [date, setDate] = useState('');
  const [count, setCount] = useState('1');
  const [details, setDetails] = useState('');
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const msg =
      'Hello Quest Growth Empire — Model / Talent Enquiry\nName: ' +
      name +
      '\nModel requirement: ' +
      gender +
      '\nShoot type: ' +
      shoot +
      '\nCity / location: ' +
      city +
      '\nShoot date: ' +
      (date || 'Flexible') +
      '\nNumber of models: ' +
      count +
      '\nBrief: ' +
      details +
      '\nPlease share availability, portfolio and quotation.';
    window.open(
      'https://wa.me/' + number + '?text=' + encodeURIComponent(msg),
      '_blank',
      'noopener,noreferrer'
    );
  }
  return (
    <form className="leadForm" onSubmit={submit}>
      <div className="formGrid">
        <label>
          Your name / company
          <input
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name"
          />
        </label>
        <label>
          Model requirement
          <select
            required
            value={gender}
            onChange={e => setGender(e.target.value)}
          >
            <option value="">Select</option>
            <option>Male model</option>
            <option>Female model</option>
            <option>Male and female models</option>
            <option>Child artist (guardian enquiry)</option>
            <option>Open to recommendation</option>
          </select>
        </label>
        <label>
          What kind of shoot?
          <select
            required
            value={shoot}
            onChange={e => setShoot(e.target.value)}
          >
            <option value="">Choose shoot type</option>
            <option>Fashion / apparel</option>
            <option>Product / e-commerce</option>
            <option>Jewellery / accessories</option>
            <option>Beauty / cosmetics</option>
            <option>Commercial advertisement</option>
            <option>Brand campaign</option>
            <option>Wedding / pre-wedding</option>
            <option>Music video / film</option>
            <option>Event / promotional</option>
            <option>Portfolio / test shoot</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          City / shoot location
          <select value={city} onChange={e => setCity(e.target.value)}>
            {[
              'Lucknow',
              'Raebareli',
              'Kanpur',
              'Prayagraj',
              'Noida',
              'Varanasi',
              'Agra',
              'Other Uttar Pradesh city',
            ].map(c => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label>
          Preferred shoot date
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </label>
        <label>
          Number of models
          <select value={count} onChange={e => setCount(e.target.value)}>
            {['1', '2', '3', '4', '5', '6–10', '10+'].map(c => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className="wide">
          Additional requirements
          <textarea
            rows={4}
            value={details}
            onChange={e => setDetails(e.target.value)}
            placeholder="Age range, look, experience, wardrobe, duration, usage, budget, references..."
          />
        </label>
      </div>
      <button className="button gold" type="submit">
        Submit model enquiry on WhatsApp ↗
      </button>
      <small>
        We will coordinate availability and share suitable portfolios. Model
        bookings are subject to confirmation and consent.
      </small>
    </form>
  );
}
