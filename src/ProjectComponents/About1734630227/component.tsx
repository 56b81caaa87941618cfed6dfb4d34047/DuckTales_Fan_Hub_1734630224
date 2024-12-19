import React from 'react';

const About = () => {
  const [activeTab, setActiveTab] = React.useState('mission');
  
  const tabContent = {
    mission: {
      title: 'Our Mission',
      content: 'To bring the joy and excitement of DuckTales to fans old and new through immersive digital experiences.'
    },
    vision: {
      title: 'Our Vision',
      content: 'To create a world where everyone can experience the thrill of adventure and the warmth of family like the DuckTales gang.'
    },
    values: {
      title: 'Our Values',
      content: 'Family, Adventure, Curiosity, and a Splash of Mischief!'
    }
  };

  return (
    <div className="h-full w-full bg-white overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col items-center p-4 max-w-full">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">About Us</h2>
        
        <div className="w-full flex flex-col items-center">
          <div className="flex justify-center mb-4 max-w-full overflow-x-auto">
            <div className="inline-flex rounded-lg border border-gray-200 p-1">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-2 m-1 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    activeTab === tab
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full max-w-2xl text-center px-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {tabContent[activeTab].title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {tabContent[activeTab].content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { About as component };