import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Mail,
  Shield,
  Leaf,
  Users,
  Wifi,
  Scale,
  Euro,
} from 'lucide-react';

export default function App() {
  const measures = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'European Digital Sovereignty',
      description:
        'Create a European public cloud (enhanced GAIA-X), ban critical dependence on GAFAM in public services, ensure public ownership of key infrastructures, and establish public European research in AI, cybersecurity, and open-source hardware.',
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Green Tech & Digital Sobriety',
      description:
        'Develop low-energy data centers with natural cooling and heat recycling, implement strict ecological rules on digital device lifecycles, prioritize low-carbon digital technologies, and increase funding for green tech startups.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Job Creation and Social Justice',
      description:
        'Provide free, large-scale training in digital professions, support European industrial sectors, ensure mandatory social return on public funding, and create a European digital worker status with social protection and rights portability.',
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: 'Technological and Territorial Spillover',
      description:
        'Implement "Connected Europe" plan for 100% high-speed internet access in rural areas by 2030, create Common Digital Hubs in every region, reinvest profits from public digital services into territories, and develop public software as open source.',
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: 'Ethics, Democracy, and Transparency',
      description:
        'Establish European governance of major platforms with algorithmic transparency, create a European Digital Truth Agency to fight disinformation, use digital tools for participatory democracy, and mandate public audits of algorithms in public services.',
    },
    {
      icon: <Euro className="h-8 w-8" />,
      title: 'Financing and Economic Model',
      description:
        'Tax large foreign platforms to fund European digital infrastructures, create a European public bank for technological innovation, implement cost sharing through inter-state cooperation, and prioritize projects with territorial and ecological impact.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA] font-['Poppins']">
      {/* Header */}
      <header className="bg-[#001F5C] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🇪🇺</span>
              <div>
                <h1 className="text-2xl font-bold text-white italic">PRAGMA</h1>
                <p className="text-sm text-blue-100">
                Progress - Renewal - Autonomy - Governance - Mobility - Alliance
                </p>
              </div>
            </div>
            <div>
              <a 
                href="mailto:tech@joinpragma.eu" 
                className="text-white hover:text-blue-100 transition-colors duration-200 text-sm font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/cover.webp')`, backgroundSize: 'auto', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
          PRAGMA: Common Sense for Europe's Future
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
          A European initiative building ethical, independent technology for all – rejecting foreign dominance, advancing green innovation, and empowering citizens through pragmatic solutions.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-[#003399] hover:bg-[#002A7A] text-white px-8 py-3 text-lg"
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#003399] mb-4">
              Our Key Measures
            </h3>
            <p className="text-lg text-[#333333] max-w-2xl mx-auto">
              Six fundamental pillars that will guide our approach to building a
              stronger, more pragmatic Europe for all citizens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {measures.map((measure, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-shadow duration-300 bg-white border-0 shadow-md"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-[#F8A701] rounded-lg text-white mr-4">
                      {measure.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-[#003399]">
                      {measure.title}
                    </h4>
                  </div>
                  <p className="text-[#333333] leading-relaxed">
                    {measure.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-[#003399] mb-6">
            Ready to Make a Difference?
          </h3>
          <p className="text-lg text-[#333333] mb-8">
            Join thousands of Europeans who believe in pragmatic, evidence-based
            politics. Together, we can build a better future for our continent.
          </p>
          <Button
            size="lg"
            className="bg-[#0066CC] hover:bg-[#0055AA] text-white px-8 py-3 text-lg"
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
      <footer className="bg-[#001F5C] text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl">🇪🇺</span>
            <span className="text-xl font-bold">PRAGMA</span>
          </div>
          <p className="text-blue-100">
            © 2025 Pragma European Political Party. Building a pragmatic future
            for Europe.
          </p>
        </div>
      </footer>
    </div>
  );
}
