import React from 'react';

const Contact = () => {
	return (
	  <div className="h-full w-full bg-gray-50 overflow-y-auto overflow-x-hidden">
		<div className="flex flex-col items-center p-4 max-w-full">
		  <div className="text-center mb-6 w-full">
			<h2 className="text-2xl font-bold text-gray-800 mb-2">Got a Mystery to Solve?</h2>
			<p className="text-gray-600">Reach out to us! We're always ready for a new adventure!</p>
		  </div>
  
		  <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			  <div className="flex flex-col">
				<h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
				<div className="space-y-4">
				  <div className="flex items-center">
					<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
					  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
					  </svg>
					</div>
					<span className="text-gray-600">(555) 123-4567</span>
				  </div>
				  <div className="flex items-center">
					<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
					  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					  </svg>
					</div>
					<span className="text-gray-600">contact@example.com</span>
				  </div>
				  <div className="flex items-center">
					<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
					  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
					  </svg>
					</div>
					<span className="text-gray-600">123 Business Street, Suite 100, City, State 12345</span>
				  </div>
				</div>
			  </div>
			  <div className="flex flex-col">
				<h3 className="text-lg font-semibold text-gray-800 mb-4">Business Hours</h3>
				<div className="space-y-2">
				  <div className="flex justify-between">
					<span className="text-gray-600">Monday - Friday</span>
					<span className="text-gray-800">9:00 AM - 6:00 PM</span>
				  </div>
				  <div className="flex justify-between">
					<span className="text-gray-600">Saturday</span>
					<span className="text-gray-800">10:00 AM - 4:00 PM</span>
				  </div>
				  <div className="flex justify-between">
					<span className="text-gray-600">Sunday</span>
					<span className="text-gray-800">Closed</span>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	);
  };
  
  export { Contact as component };