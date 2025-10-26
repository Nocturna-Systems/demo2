import { useState } from 'react';
import { Sparkles, Zap, Network, ArrowRight, X } from 'lucide-react';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll be in touch soon.');
    setShowForm(false);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 bg-grid opacity-20" />
      <div className="fixed inset-0 bg-gradient-radial" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/5">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded glow-cyan" />
          <span className="text-2xl font-serif italic tracking-tight">Nocturna<span className="font-medium">Systems</span></span>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="text-sm tracking-widest hover:text-cyan-400 transition-colors duration-300 font-light"
        >
          CONTACT
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-20">
        <div className="mb-6">
          <span className="text-cyan-400 text-xs tracking-[0.4em] font-light uppercase">Artificial Intelligence Automation</span>
        </div>

        <h1 className="text-7xl md:text-9xl font-serif tracking-tight leading-[0.9] mb-10">
          Build on
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 glow-text italic">
            any axis
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mb-14 leading-relaxed">
          Deploy intelligent AI agents that transform your business.
          <br />
          Automate conversations. Generate leads. Integrate seamlessly.
        </p>

        <button
          onClick={() => setShowForm(true)}
          className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-full hover:border-cyan-400 transition-all duration-500 glow-border"
        >
          <span className="text-base tracking-[0.2em] flex items-center space-x-3 uppercase">
            <span>Book a Call</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>

        {/* Floating binary text animation */}
        <div className="absolute right-0 top-20 text-xs font-mono text-cyan-400/20 space-y-1 hidden md:block animate-pulse-slow">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="tracking-widest">
              {Array.from({ length: 40 }).map(() => Math.random() > 0.5 ? '1' : '0').join(' ')}
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-32">
        <div className="grid md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<Sparkles className="w-7 h-7" />}
            title="AI Chat Agents"
            description="Deploy conversational AI that understands context, learns from interactions, and delivers human-like experiences 24/7."
          />
          <FeatureCard
            icon={<Zap className="w-7 h-7" />}
            title="Lead Generation"
            description="Automate your pipeline with intelligent lead qualification, scoring, and nurturing powered by advanced AI algorithms."
          />
          <FeatureCard
            icon={<Network className="w-7 h-7" />}
            title="CRM Integrations"
            description="Seamlessly connect with your existing systems. One-click integrations with all major CRM platforms."
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-20 border-t border-white/5">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <StatCard number="10x" label="RESPONSE SPEED" />
          <StatCard number="95%" label="ACCURACY RATE" />
          <StatCard number="24/7" label="AVAILABILITY" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-32 text-center">
        <h2 className="text-5xl md:text-7xl font-serif tracking-tight mb-6 leading-tight">
          Ready to <span className="text-cyan-400 italic">evolve</span>?
        </h2>
        <p className="text-xl text-gray-300 mb-14 font-light">
          Join forward-thinking companies already leveraging AI automation.
        </p>
        <button
          onClick={() => setShowForm(true)}
          className="group relative px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 text-base tracking-[0.2em] uppercase"
        >
          <span className="flex items-center space-x-3">
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 px-8 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p className="font-light tracking-wide">© 2025 Nocturna Systems AI. All rights reserved.</p>
          <p className="font-mono text-xs tracking-wider">POWERED BY ADVANCED AI</p>
        </div>
      </footer>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-gray-900 border border-cyan-400/30 rounded-2xl p-8 max-w-md w-full glow-border">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-4xl font-serif mb-2">Let's Talk</h3>
            <p className="text-gray-300 mb-8 font-light">Schedule a consultation to discuss your AI automation needs.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-400 focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-400 focus:outline-none transition-colors"
              />
              <input
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-400 focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-500 tracking-[0.2em] uppercase text-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group relative p-10 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl hover:border-cyan-400/50 transition-all duration-500 hover:translate-y-[-4px]">
      <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-serif mb-4 tracking-tight">{title}</h3>
      <p className="text-gray-300 leading-relaxed font-light">{description}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-3">
        {number}
      </div>
      <div className="text-xs tracking-[0.4em] text-gray-500 uppercase font-light">{label}</div>
    </div>
  );
}

export default App;
