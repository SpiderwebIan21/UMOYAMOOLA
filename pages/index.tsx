import Link from 'next/link';
import styles from '@/pages/home.module.css';
import logo from '@/public/logo3.png';

function Home() {
  return (
    <div>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div>
          <img src="logo3.png" alt="UmoyaMoola Logo" />
        </div>
        <ul>
          <li>
            <Link href="/about">
            About Us
            </Link>
          </li>
          <li>
            <Link href="/contact">
            Contact Us
            </Link>
          </li>
          <li>
            <Link href="/terms">
            Terms & Conditions
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Get Your Tasks Done with UmoyaMoola</h1>
        <p>Find trusted service providers for all your needs, from painting to cooking and everything in between.</p>
        <button>Get Started</button>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div>
          <img src="/painting.png" alt="Painting" />
          <h3>Painting</h3>
        </div>
        <div>
          <img src="/gardening.png" alt="Gardening" />
          <h3>Gardening</h3>
        </div>
        <div>
          <img src="/cleaning.png" alt="Cleaning" />
          <h3>Cleaning</h3>
        </div>
        <div>
          <img src="/cooking.png" alt="Cooking" />
          <h3>Cooking</h3>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2>What Our Customers Say</h2>
        <div>
          <p>"UmoyaMoola made it so easy for me to find a reliable gardener. Highly recommend!"</p>
        </div>
        <div>
          <p>"I was hesitant to use a cleaning service, but UmoyaMoola exceeded my expectations. My house has never been cleaner!"</p>
        </div>
      </section>

      {/* Search Bar */}
      <section className={styles['search-bar']}>
        <h2>Find Your Service Provider</h2>
        <div>
          <input type="text" placeholder="What service do you need?" />
          <button>Search</button>
        </div>
      </section>

      {/* Featured Providers Section */}
      <section className={styles['featured-providers']}>
        <h2>Featured Service Providers</h2>
        <div>
          <img src="/provider-1.jpg" alt="Provider 1" />
          <div>
            <h3>John Doe</h3>
            <p>Painter</p>
            <p>Rating: 4.9 | Day rate: $50 | Availability: M-F, 9am-5pm</p>
            <button>Contact</button>
          </div>
        </div>
          <img src="/provider-2.jpg" alt="Provider 2" />
          <div>
            <h3>Jane Smith</h3>
            <p>Gardener</p>
            <p>Rating: 4.7 | Day rate: $40 | Availability: M-F, 9am-5 </p>
            <button>Contact</button>
        </div>
        <div>
          <img src="/provider-3.jpg" alt="Provider 3" />
          <div>
            <h3>William Johnson</h3>
            <p>Chef</p>
            <p>Rating: 4.8 | Day rate: $100 | Availability: M-S, 10am-8pm</p>
            <button>Contact</button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles['call-to-action']}>
        <h2>Get Started with UmoyaMoola Today</h2>
        <p>Find the right service provider for all your needs.</p>
        <button>Get Started</button>
      </section>

      {/* Footer */}
      <footer>
        <div>
          <img src="/umoyamoola-logo.png" alt="UmoyaMoola Logo" />
          <p>UmoyaMoola &copy; 2023</p>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/about">
              About Us
              </Link>
            </li>
            <li>
              <Link href="/contact">
              Contact Us
              </Link>
            </li>
            <li>
              <Link href="/terms">
              Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;

