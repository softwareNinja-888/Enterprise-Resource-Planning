import { useInView,motion } from 'framer-motion';
import { useRef } from 'react';

import { Line } from '../utility/Line';

export function Banner(){

    const ref = useRef(null)
    const isInView = useInView(ref,{ once : true, margin : '-100px'})

    console.log(isInView)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,   
            staggerChildren: 0.5, 
          },
        },
		
      };
      
    const itemVariants = {
      hidden: { y: "100%", opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: .7, ease: "easeIn" } },
    };

    return (
        <>
           <motion.div  ref={ref} className="div" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : "hidden"}  >
            <motion.div variants={itemVariants}className="flex flex-col bg-gray-200 px-8 py-12 gap-10 text-black">
                <motion.div variants={itemVariants} className='font-nunito text-3xl flex flex-col gap-5'>
                    IT Consulting <br/> & Services 
                    <Line width='w-32'/>
                </motion.div>  
                <motion.div variants={itemVariants} className='font-roboto'>
                        Empowering businesses with cutting-edge IT Solutions. Our expert software help streamline operation, enhance security, and drive innovation.    
                </motion.div> 
            </motion.div>
            <motion.div  variants={itemVariants} className="flex justify-end gap-0">
                <div className="bg-secondary px-2 text-white text-xl">+</div>
                <div className="bg-main text-lg px-2 py-1 text-white ">Find Out More</div>
            </motion.div>
           </motion.div>
        </>
    )
}