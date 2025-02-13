import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCode, FaPencilRuler, FaUsers, FaLaptopCode } from 'react-icons/fa';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Professional web design solutions and expert programming tutoring
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/services"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg transition-colors"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-primary border-2 border-primary px-8 py-3 rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive solutions for your digital needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaPencilRuler className="h-8 w-8" />,
                title: "Web Design",
                description: "Custom designs that capture your brand's essence"
              },
              {
                icon: <FaCode className="h-8 w-8" />,
                title: "Web Development",
                description: "Robust and scalable web applications"
              },
              {
                icon: <FaUsers className="h-8 w-8" />,
                title: "Group Tutoring",
                description: "Interactive programming classes for teams"
              },
              {
                icon: <FaLaptopCode className="h-8 w-8" />,
                title: "Private Tutoring",
                description: "Personalized programming education"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...fadeIn}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-8">Let's transform your ideas into reality</p>
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 