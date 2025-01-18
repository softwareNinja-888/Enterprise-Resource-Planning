import { motion } from 'framer-motion';

export function ServiceCard ({ title, description, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-gray-200 w-screen shadow-xlr text-black"
    >
    	<div className="card-body">
    		<h3 className="card-title text-secondary">Hello</h3>
		    <p className="text-black">Empowering businesses with cutting-edge IT Solutions. Our expert software help streamline operation, enhance security, and drive innovation.
		    </p>
		    <div className="flex text-main font-poppins text-xs gap-1">
		    	<div className="self-end">+</div>
		    	<div>Learn More</div>
		    </div>
    	</div>
    </motion.div>
  );
};
