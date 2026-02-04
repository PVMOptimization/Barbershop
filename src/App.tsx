import { Scissors, Phone, MapPin, Clock, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Scissors className="text-amber-500" size={28} />
              <span className="text-xl font-bold">Elite Cuts</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#services" className="hover:text-amber-500 transition">Services</a>
              <a href="#gallery" className="hover:text-amber-500 transition">Gallery</a>
              <a href="#about" className="hover:text-amber-500 transition">About</a>
              <a href="#contact" className="hover:text-amber-500 transition">Contact</a>
            </div>
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-600 text-zinc-900 px-6 py-2 rounded-lg font-semibold transition"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-900 z-10"></div>
        <img
          src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Barber shop interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Where Style Meets
            <span className="text-amber-500"> Precision</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8">
            Experience the art of grooming with our master barbers
          </p>
          <a
            href="#contact"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-zinc-900 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105"
          >
            Book Your Appointment
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-700 hover:border-amber-500 transition">
              <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mb-6">
                <Scissors className="text-amber-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Haircuts</h3>
              <p className="text-zinc-400 mb-6">
                Precision cuts tailored to your style and personality. From classic to contemporary.
              </p>
              <div className="text-3xl font-bold text-amber-500">$35</div>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-700 hover:border-amber-500 transition">
              <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mb-6">
                <Scissors className="text-amber-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Beard Trims</h3>
              <p className="text-zinc-400 mb-6">
                Expert beard shaping and grooming to complement your look perfectly.
              </p>
              <div className="text-3xl font-bold text-amber-500">$25</div>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-700 hover:border-amber-500 transition">
              <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mb-6">
                <Scissors className="text-amber-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Hot Shaves</h3>
              <p className="text-zinc-400 mb-6">
                Traditional straight razor shave with hot towel treatment for the ultimate experience.
              </p>
              <div className="text-3xl font-bold text-amber-500">$40</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Haircut work"
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition transform cursor-pointer"
            />
            <img
              src="https://images.pexels.com/photos/3998434/pexels-photo-3998434.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Beard trim work"
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition transform cursor-pointer"
            />
            <img
              src="https://images.pexels.com/photos/1617160/pexels-photo-1617160.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Styling work"
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition transform cursor-pointer"
            />
            <img
              src="https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Grooming work"
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition transform cursor-pointer"
            />
            <img
              src="https://images.pexels.com/photos/2834009/pexels-photo-2834009.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Classic cut"
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition transform cursor-pointer"
            />
            <img
              src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Fade work"
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition transform cursor-pointer"
            />
            <img
              src="https://images.pexels.com/photos/1721083/pexels-photo-1721083.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Shave service"
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition transform cursor-pointer"
            />
            <img
              src="https://images.pexels.com/photos/3998406/pexels-photo-3998406.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Final styling"
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition transform cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Barber shop"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <div className="w-24 h-1 bg-amber-500 mb-6"></div>
              <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
                Elite Cuts has been serving the community since 2010, bringing traditional barbering excellence
                into the modern age. Our master barbers combine decades of experience with the latest techniques
                to deliver exceptional grooming services.
              </p>
              <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
                We believe that a great haircut is more than just a service—it's an experience. From the moment
                you walk through our doors, you'll feel the difference that passion and expertise make.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed">
                Our commitment to quality, attention to detail, and personalized service has made us the premier
                destination for men's grooming in the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Visit Us</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-amber-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Hours</h3>
                    <div className="space-y-2 text-zinc-400">
                      <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-amber-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Phone</h3>
                    <a href="tel:+15551234567" className="text-zinc-400 hover:text-amber-500 transition">
                      (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-amber-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Address</h3>
                    <p className="text-zinc-400">
                      123 Main Street<br />
                      Downtown District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-amber-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Email</h3>
                    <a href="mailto:info@elitecuts.com" className="text-zinc-400 hover:text-amber-500 transition">
                      info@elitecuts.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[500px] rounded-xl overflow-hidden border border-zinc-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598784!2d-73.99185368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Scissors className="text-amber-500" size={24} />
            <span className="text-xl font-bold">Elite Cuts</span>
          </div>
          <p className="text-zinc-500">
            © 2024 Elite Cuts Barber Shop. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
