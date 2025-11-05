import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 0C7.163 0 0 7.163 0 16c0 2.824.734 5.478 2.02 7.78L.197 30.803a1 1 0 001.213 1.213l7.023-1.823A15.936 15.936 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0z" fill="#25D366"/>
              <path d="M23.5 19.8c-.3-.15-1.8-.9-2.1-1-.3-.1-.5-.15-.7.15-.2.3-.8 1-.95 1.2-.15.2-.3.25-.6.1-.3-.15-1.3-.5-2.5-1.5-.9-.8-1.5-1.9-1.7-2.2-.2-.3 0-.45.15-.6.15-.15.3-.4.45-.6.15-.2.2-.3.3-.5.1-.2.05-.4-.025-.55-.075-.15-.7-1.65-.95-2.25-.25-.6-.5-.5-.7-.5h-.6c-.2 0-.5.075-.8.375-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.25 3.2.15.2 2.15 3.3 5.2 4.6 3.05 1.3 3.05.85 3.6.8.55-.05 1.8-.75 2.05-1.45.25-.7.25-1.3.175-1.45-.075-.15-.275-.225-.575-.375z" fill="#fff"/>
            </svg>
            <span className={styles.logoText}>SalesBot AI</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#demo">Demo</a>
            <button className={styles.btnSecondary}>Sign In</button>
            <button className={styles.btnPrimary}>Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span>🚀 Now Supporting WhatsApp Business API</span>
          </div>
          <h1 className={styles.heroTitle}>
            Turn WhatsApp Into Your
            <span className={styles.gradient}> #1 Sales Channel</span>
          </h1>
          <p className={styles.heroDescription}>
            AI-powered sales agent that handles customer conversations, qualifies leads,
            and closes deals on WhatsApp - 24/7, in any language, at scale.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.btnLarge}>
              Start Free Trial
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.btnOutline}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm-1.5 14.5v-7l5.5 3.5-5.5 3.5z"/>
              </svg>
              Watch Demo
            </button>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>10M+</div>
              <div className={styles.statLabel}>Messages Processed</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>89%</div>
              <div className={styles.statLabel}>Lead Qualification Rate</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>3.5x</div>
              <div className={styles.statLabel}>Average ROI</div>
            </div>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.phoneFrame}>
            <div className={styles.phoneScreen}>
              <div className={styles.chatHeader}>
                <div className={styles.chatAvatar}>AI</div>
                <div>
                  <div className={styles.chatName}>Sales Assistant</div>
                  <div className={styles.chatStatus}>Online</div>
                </div>
              </div>
              <div className={styles.chatMessages}>
                <div className={styles.messageReceived}>
                  Hi! I'm interested in your product
                </div>
                <div className={styles.messageSent}>
                  Great! I'd love to help. What type of business are you running?
                </div>
                <div className={styles.messageReceived}>
                  E-commerce, about 5000 customers
                </div>
                <div className={styles.messageSent}>
                  Perfect! Based on your size, I recommend our Pro plan. It includes automated responses, lead qualification, and CRM integration. Would you like to see a demo?
                </div>
                <div className={styles.typing}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Everything You Need to Close Deals on WhatsApp</h2>
          <p className={styles.sectionDescription}>
            Powerful AI capabilities that work around the clock to grow your revenue
          </p>
        </div>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🤖</div>
            <h3>Intelligent Conversations</h3>
            <p>Natural AI-powered chats that understand context, handle objections, and guide customers to purchase</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎯</div>
            <h3>Lead Qualification</h3>
            <p>Automatically qualify and score leads based on your criteria, routing hot leads to your team instantly</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌍</div>
            <h3>Multi-Language Support</h3>
            <p>Communicate with customers in 100+ languages with perfect accuracy and cultural awareness</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📊</div>
            <h3>Analytics & Insights</h3>
            <p>Track performance, conversion rates, and customer sentiment with real-time dashboards</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔗</div>
            <h3>CRM Integration</h3>
            <p>Seamlessly sync with Salesforce, HubSpot, Pipedrive and 50+ other tools</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>Instant Responses</h3>
            <p>Reply to customers in under 2 seconds, 24/7, ensuring you never miss an opportunity</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={styles.pricing}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Simple, Transparent Pricing</h2>
          <p className={styles.sectionDescription}>
            Choose the perfect plan for your business. No hidden fees.
          </p>
        </div>
        <div className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <div className={styles.pricingHeader}>
              <h3>Starter</h3>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>99</span>
                <span className={styles.period}>/mo</span>
              </div>
            </div>
            <ul className={styles.pricingFeatures}>
              <li>✓ 1,000 conversations/month</li>
              <li>✓ 1 WhatsApp number</li>
              <li>✓ Basic AI responses</li>
              <li>✓ Email support</li>
              <li>✓ Analytics dashboard</li>
            </ul>
            <button className={styles.btnPricing}>Start Free Trial</button>
          </div>
          <div className={`${styles.pricingCard} ${styles.featured}`}>
            <div className={styles.popularBadge}>Most Popular</div>
            <div className={styles.pricingHeader}>
              <h3>Professional</h3>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>299</span>
                <span className={styles.period}>/mo</span>
              </div>
            </div>
            <ul className={styles.pricingFeatures}>
              <li>✓ 5,000 conversations/month</li>
              <li>✓ 5 WhatsApp numbers</li>
              <li>✓ Advanced AI + customization</li>
              <li>✓ Priority support</li>
              <li>✓ CRM integrations</li>
              <li>✓ Lead qualification</li>
              <li>✓ Multi-language support</li>
            </ul>
            <button className={styles.btnPricing}>Start Free Trial</button>
          </div>
          <div className={styles.pricingCard}>
            <div className={styles.pricingHeader}>
              <h3>Enterprise</h3>
              <div className={styles.price}>
                <span className={styles.amount}>Custom</span>
              </div>
            </div>
            <ul className={styles.pricingFeatures}>
              <li>✓ Unlimited conversations</li>
              <li>✓ Unlimited numbers</li>
              <li>✓ Custom AI training</li>
              <li>✓ Dedicated support</li>
              <li>✓ Custom integrations</li>
              <li>✓ SLA guarantee</li>
              <li>✓ White-label option</li>
            </ul>
            <button className={styles.btnPricing}>Contact Sales</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to 10x Your WhatsApp Sales?</h2>
          <p className={styles.ctaDescription}>
            Join 2,500+ businesses already using AI to automate their sales on WhatsApp
          </p>
          <button className={styles.btnCta}>
            Start Your Free 14-Day Trial
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <p className={styles.ctaNote}>No credit card required • Setup in 5 minutes</p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.logo}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.824.734 5.478 2.02 7.78L.197 30.803a1 1 0 001.213 1.213l7.023-1.823A15.936 15.936 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0z" fill="#25D366"/>
                <path d="M23.5 19.8c-.3-.15-1.8-.9-2.1-1-.3-.1-.5-.15-.7.15-.2.3-.8 1-.95 1.2-.15.2-.3.25-.6.1-.3-.15-1.3-.5-2.5-1.5-.9-.8-1.5-1.9-1.7-2.2-.2-.3 0-.45.15-.6.15-.15.3-.4.45-.6.15-.2.2-.3.3-.5.1-.2.05-.4-.025-.55-.075-.15-.7-1.65-.95-2.25-.25-.6-.5-.5-.7-.5h-.6c-.2 0-.5.075-.8.375-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.25 3.2.15.2 2.15 3.3 5.2 4.6 3.05 1.3 3.05.85 3.6.8.55-.05 1.8-.75 2.05-1.45.25-.7.25-1.3.175-1.45-.075-.15-.275-.225-.575-.375z" fill="#fff"/>
              </svg>
              <span className={styles.logoText}>SalesBot AI</span>
            </div>
            <p className={styles.footerDescription}>
              Automate your WhatsApp sales with AI-powered conversations
            </p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#demo">Demo</a>
              <a href="#integration">Integrations</a>
            </div>
            <div className={styles.footerColumn}>
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#blog">Blog</a>
              <a href="#careers">Careers</a>
              <a href="#contact">Contact</a>
            </div>
            <div className={styles.footerColumn}>
              <h4>Legal</h4>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
              <a href="#security">Security</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2024 SalesBot AI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
