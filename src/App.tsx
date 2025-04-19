import { ArrowRight, BookOpen, Brain, Gamepad2, Heart, Mail, MessageSquare, Phone, Shield, Star, Users } from 'lucide-react';
import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import AccessibilityTools from './components/AccessibilityTools';
import TypeformEmbed from './components/TypeformEmbed';
import { supabase } from './lib/supabase';

function App() {
  const [demoForm, setDemoForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [newsletter, setNewsletter] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDemoRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('demo_requests')
        .insert([demoForm]);

      if (error) throw error;

      toast.success('Demo request submitted successfully!');
      setDemoForm({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Failed to submit demo request. Please try again.');
    }
    setIsSubmitting(false);
  };

  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([contactForm]);

      if (error) throw error;

      toast.success('Message sent successfully!');
      setContactForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
    setIsSubmitting(false);
  };

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: newsletter }]);

      if (error) throw error;

      toast.success('Successfully subscribed to newsletter!');
      setNewsletter('');
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Toaster position="top-right" />
      <AccessibilityTools />
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">ISE Learning</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-blue-600">Benefits</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
              <button
                onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-4 py-0 rounded-full hover:bg-blue-700 transition"
              >
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Virtual Reality Learning for Special Education
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Interactive Skills Enhancer (ISE) uses cutting-edge VR technology to create engaging,
                personalized learning experiences for children with ASD and intellectual disabilities.
              </p>
              <button
                onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center space-x-2"
              >
                <span>Start Learning Journey</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800"
                alt="Child using VR headset"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>
        <section id="features" className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Gamepad2 className="w-8 h-8 text-blue-600" />}
                title="Interactive Learning"
                description="Engaging VR environments that make learning fun and effective"
              />
              <FeatureCard
                icon={<Users className="w-8 h-8 text-blue-600" />}
                title="Personalized Approach"
                description="Adaptive learning paths tailored to each child's needs"
              />
              <FeatureCard
                icon={<BookOpen className="w-8 h-8 text-blue-600" />}
                title="Skill Development"
                description="Focus on social, cognitive, and motor skill enhancement"
              />
            </div>
          </div>
        </section>
        <section id="benefits" className="py-16 bg-blue-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Benefits</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <BenefitCard
                icon={<Heart className="w-6 h-6 text-red-500" />}
                title="Improved Social Skills"
                description="Safe environment to practice social interactions and build confidence"
              />
              <BenefitCard
                icon={<Star className="w-6 h-6 text-yellow-500" />}
                title="Enhanced Learning"
                description="Visual and interactive learning that increases engagement and retention"
              />
              <BenefitCard
                icon={<Brain className="w-6 h-6 text-purple-500" />}
                title="Cognitive Development"
                description="Structured activities that promote problem-solving and critical thinking"
              />
              <BenefitCard
                icon={<Shield className="w-6 h-6 text-green-500" />}
                title="Safe Learning Environment"
                description="Controlled virtual spaces where children can learn at their own pace"
              />
            </div>
          </div>
        </section>
        <section id="demo-form" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Request a Demo</h2>
              <form onSubmit={handleDemoRequest} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={demoForm.name}
                    onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={demoForm.email}
                    onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    value={demoForm.phone}
                    onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={demoForm.message}
                    onChange={(e) => setDemoForm({ ...demoForm, message: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Demo'}
                </button>
              </form>
            </div>
          </div>
        </section>
        <section id="contact" className="py-16 bg-blue-50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Contact Us</h2>
              <form onSubmit={handleContact} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="bg-blue-600 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Learning?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join us in revolutionizing special education through virtual reality technology.
              Start your child's journey towards interactive and engaging learning today.
            </p>
            <button
              onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition"
            >
              Schedule a Demo
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold">ISE Learning</span>
              </div>
              <p className="text-gray-400">
                Transforming special education through virtual reality technology.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-blue-400">Features</a></li>
                <li><a href="#benefits" className="hover:text-blue-400">Benefits</a></li>
                <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@iselearning.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 9876543210</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <a href="#contact" className="hover:text-blue-400">Send us a message</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest developments</p>
              <form onSubmit={handleNewsletter} className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={newsletter}
                  onChange={(e) => setNewsletter(e.target.value)}
                  className="px-4 py-2 rounded-l-full w-full text-gray-900"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 px-6 rounded-r-full hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {isSubmitting ? '...' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ISE Learning. All rights reserved.</p>
          </div>
          <div>
            <TypeformEmbed />
          </div>
        </div>
      </footer>
    </div>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
interface BenefitCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const BenefitCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;