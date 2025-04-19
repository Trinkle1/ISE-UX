
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  role text NOT NULL,
  content text NOT NULL,
  avatar_url text,
  rating integer CHECK (rating >= 1 AND rating <= 5)
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to read testimonials"
  ON testimonials
  FOR SELECT
  TO public
  USING (true);

CREATE TABLE IF NOT EXISTS research_papers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  title text NOT NULL,
  authors text NOT NULL,
  publication_date date NOT NULL,
  summary text NOT NULL,
  url text
);

ALTER TABLE research_papers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to read research papers"
  ON research_papers
  FOR SELECT
  TO public
  USING (true);

INSERT INTO testimonials (name, role, content, avatar_url, rating) VALUES
  (
    'Dr. Sarah Thompson',
    'Special Education Director',
    'ISE Learning has transformed how our students engage with educational content. The VR environment provides a safe space for them to practice social skills and learn at their own pace.',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    5
  ),
  (
    'Michael Chen',
    'Parent',
    'My son has made remarkable progress since starting with ISE Learning. The personalized approach and engaging VR activities have helped him develop both academically and socially.',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    5
  ),
  (
    'Emily Rodriguez',
    'Occupational Therapist',
    'The platform''s ability to create customized learning environments has been invaluable in my practice. It''s a powerful tool for developing motor skills and spatial awareness.',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
    5
  );

INSERT INTO research_papers (title, authors, publication_date, summary, url) VALUES
  (
    'Virtual Reality in Special Education: A Systematic Review',
    'Thompson, S., Johnson, M., et al.',
    '2024-01-15',
    'A comprehensive review of 50 studies showing significant positive impacts of VR technology in special education, particularly for students with ASD.',
    'https://example.com/vr-special-education-review'
  ),
  (
    'Improving Social Skills Through Virtual Reality: A Case Study',
    'Rodriguez, E., Smith, K., et al.',
    '2024-02-20',
    'A 12-month study demonstrating improved social interaction and communication skills in children with ASD using VR-based learning tools.',
    'https://example.com/vr-social-skills-study'
  ),
  (
    'Personalized Learning in Virtual Environments',
    'Chen, L., Williams, P., et al.',
    '2024-03-01',
    'Research showing how AI-driven personalization in VR learning environments leads to better engagement and outcomes for special needs students.',
    'https://example.com/personalized-vr-learning'
  );