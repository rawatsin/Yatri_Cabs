import "./Testimonials.css";

const testimonials = [
  {
    text: "I used Yatri Cabs for my one-way trip from Lucknow to Varanasi, and I was genuinely surprised by how much I saved. The 50% off claim is real, and it was significantly cheaper than taking a train. The car was clean, and the driver was professional. Highly recommend!",
    name: "Vikram Kulkarni",
    location: "Kalyan, Maharashtra",
  },
  {
    text: "The GPS-based billing system is a game-changer. I always worried about drivers tampering with meters on long intercity rides, but with Yatri Cabs, everything was transparent and real-time. It gave me complete peace of mind. Excellent service for my trip to Ayodhya!",
    name: "Rajesh Kumawat",
    location: "Kanpur, Uttar Pradesh",
  },
  {
    text: "Traveling with my family from Gorakhpur to Prayagraj was so comfortable with Yatri Car Rental. We chose an SUV, and it was spacious and well-maintained. The driver was courteous and knowledgeable about the route. It made our pilgrimage hassle-free and enjoyable.",
    name: "Anjali Mishra",
    location: "Gorakhpur, Uttar Pradesh",
  },
  {
    text: "As a frequent business traveler, finding a reliable one-way cab service that doesn't charge for a return journey is crucial. Yatri Cabs delivers exactly that. Their 24/7 support and easy booking process through the app make my life so much simpler. They're my go-to for intercity travel now.",
    name: "Siddharth Vaidya",
    location: "Rohini, Delhi",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonialContainer">

        <h2 className="testimonialTitle">Customer Testimonials</h2>

        <div className="testimonialGrid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonialCard">
              <div className="stars">★★★★★</div>

              <p className="testimonialText">{t.text}</p>

              <div className="testimonialName">{t.name}</div>
              <div className="testimonialLocation">{t.location}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;