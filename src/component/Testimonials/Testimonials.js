export default function Testimonials() {
  const testimonials = [
    { name: 'Amit Kumar', rating: 5, text: 'Excellent service! The driver was professional and the ride was comfortable.' },
    { name: 'Priya Singh', rating: 5, text: 'Always on time. Great app interface. Highly recommended!' },
    { name: 'Rajesh Patel', rating: 5, text: 'Best cab service in the city. Fair prices and courteous drivers.' }
  ];

  return (
    <section className="v0-desktop-testimonials">
      <h2 className="v0-desktop-section-title">What Our Customers Say</h2>
      <div className="v0-desktop-testimonials-grid">
        {testimonials.map((test, i) => (
          <div key={i} className="v0-desktop-testimonial-card">
            <div className="v0-desktop-testimonial-stars">{'⭐'.repeat(test.rating)}</div>
            <p className="v0-desktop-testimonial-text">"{test.text}"</p>
            <p className="v0-desktop-testimonial-author">- {test.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
