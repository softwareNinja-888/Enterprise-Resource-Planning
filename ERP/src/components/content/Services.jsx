import React, { useState } from "react";
import {ServiceCard} from '../ui/ServiceCard'


export function Services(){
	return (
		<>
			<div>
				<div className="flex flex-col bg-secondary text-white mt-44 px-4 py-10 gap-5">
					<div className="text-2xl font-poppins">Our Services</div>
					<div className="font-roboto">
						Empowering businesses with cutting-edge IT Solutions. Our expert software help streamline operation, enhance security, and drive innovation.
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<ServiceCard/>
					<ServiceCard/>
					<ServiceCard/>
					<ServiceCard/>
					<ServiceCard/>
				
				</div>
			</div>
		</>
		)
}