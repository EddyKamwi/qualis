import { motion } from 'framer-motion';
import { FaCode, FaPencilRuler, FaMobile, FaSearch, FaPalette, FaRocket } from 'react-icons/fa';

const Services = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <FaPencilRuler />,
      title: "Web Design",
      description: "Custom-crafted websites that perfectly align with your brand identity and business goals. We focus on creating intuitive, user-friendly designs that engage your audience.",
      features: ["Responsive Design", "UI/UX Design", "Brand Integration", "Mobile-First Approach"]
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Professional web development services using cutting-edge technologies. We build scalable, secure, and high-performance websites and web applications.",
      features: ["Custom Development", "E-commerce Solutions", "CMS Integration", "API Development"]
    },
    {
      icon: <FaMobile />,
      title: "Responsive Development",
      description: "Ensure your website looks and functions perfectly across all devices and screen sizes. We implement mobile-first design principles.",
      features: ["Mobile Optimization", "Cross-browser Compatibility", "Performance Optimization", "Progressive Enhancement"]
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      description: "Improve your website's visibility in search engines with our SEO-friendly development practices and optimization techniques.",
      features: ["On-page SEO", "Performance Optimization", "Technical SEO", "Content Strategy"]
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      description: "Create engaging user experiences with our professional UI/UX design services. We focus on user-centered design principles.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      icon: <FaRocket />,
      title: "Website Maintenance",
      description: "Keep your website running smoothly with our comprehensive maintenance services. Regular updates, security patches, and performance optimization.",
      features: ["Regular Updates", "Security Monitoring", "Backup Management", "Performance Optimization"]
    }
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Header */}
      <motion.div 
        {...fadeIn}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We offer comprehensive web design and development solutions to help your business thrive in the digital world.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        {...fadeIn}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center"
      >
        <div className="bg-primary rounded-lg py-12 px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and how we can help bring your vision to life.
          </p>
          <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg transition-colors">
            Get in Touch
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Services; 