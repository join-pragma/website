import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Mail,
  Users,
  Globe,
  Shield,
  Lightbulb,
  Heart,
  Leaf,
} from 'lucide-react';

export default function App() {
  const measures = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Digital Democracy',
      description:
        'Implement transparent digital voting systems and citizen participation platforms to strengthen democratic engagement across Europe.',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'European Unity',
      description:
        'Foster deeper integration while respecting national sovereignty, creating a more cohesive and collaborative European Union.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Economic Security',
      description:
        'Establish robust social safety nets and promote sustainable economic growth that benefits all European citizens.',
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation Hub',
      description:
        'Transform Europe into a global leader in technology, research, and sustainable innovation through strategic investments.',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Healthcare Access',
      description:
        'Ensure universal healthcare access and mental health support systems across all European member states.',
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Climate Action',
      description:
        'Lead the global fight against climate change with ambitious green policies and sustainable development initiatives.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🇪🇺</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">PRAGMA</h1>
                <p className="text-sm text-gray-600">
                  European Political Party
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Pragmatic Solutions for a Better Europe
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Building bridges, not walls. Creating policies based on evidence,
            not ideology. Join us in shaping a more practical, united, and
            prosperous European future.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              onClick={() =>
                (window.location.href = 'mailto:tech@joinpragma.eu')
              }
            >
              <Mail className="mr-2 h-5 w-5" />
              Get Involved
            </Button>
          </div>
        </div>
      </section>

      {/* Measures Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Key Measures
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Six fundamental pillars that will guide our approach to building a
              stronger, more pragmatic Europe for all citizens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {measures.map((measure, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-4">
                      {measure.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {measure.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {measure.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Make a Difference?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of Europeans who believe in pragmatic, evidence-based
            politics. Together, we can build a better future for our continent.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            onClick={() =>
              (window.location.href =
                'mailto:tech@joinpragma.eu?subject=I want to get involved with Pragma')
            }
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl">🇪🇺</span>
            <span className="text-xl font-bold">PRAGMA</span>
          </div>
          <p className="text-gray-400">
            © 2025 Pragma European Political Party. Building a pragmatic future
            for Europe.
          </p>
        </div>
      </footer>
    </div>
  );
}
