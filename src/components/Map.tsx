
import React from 'react';

interface MapProps {
  source?: string;
  destination?: string;
}

const Map: React.FC<MapProps> = ({ source, destination }) => {
  return (
    <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden glass relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-10"></div>
      
      {/* Placeholder map content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        {(!source || !destination) ? (
          <div className="text-center text-white">
            <p className="text-lg font-medium">Enter your pickup and destination</p>
            <p className="text-sm mt-2 text-white/80 font-medium">We'll show you the best ride options</p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-6 w-full">
            <div className="w-3/4 h-1 bg-white/30 relative">
              {/* Start point */}
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 bg-green-400 rounded-full animate-pulse"></div>
              
              {/* Route line */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-white/80 animate-pulse-light" 
                   style={{width: '70%'}}></div>
              
              {/* End point */}
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 bg-red-400 rounded-full animate-pulse"></div>
            </div>
            
            <div className="flex justify-between w-3/4 px-2">
              <div className="text-xs text-white font-medium">{source}</div>
              <div className="text-xs text-white font-medium">{destination}</div>
            </div>
            
            <div className="text-sm font-medium text-white">~8.5 km • ~25 min</div>
          </div>
        )}
      </div>
      
      {/* Enhanced realistic map background */}
      <div className="absolute inset-0 bg-indigo-900/40">
        {/* Map grid */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6">
          {Array.from({ length: 84 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white/10"></div>
          ))}
        </div>
        
        {/* Main roads */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-[3px] bg-white/20"></div>
          <div className="absolute top-3/4 left-0 w-full h-[3px] bg-white/20"></div>
          <div className="absolute left-1/4 top-0 h-full w-[3px] bg-white/20"></div>
          <div className="absolute left-3/4 top-0 h-full w-[3px] bg-white/20"></div>
          
          {/* Diagonal roads */}
          <div className="absolute w-[150%] h-[3px] bg-white/15 origin-bottom-left rotate-45 left-0 top-0"></div>
          <div className="absolute w-[150%] h-[3px] bg-white/15 origin-top-left -rotate-45 left-0 bottom-0"></div>
        </div>
        
        {/* Map locations/points of interest */}
        <div className="absolute inset-0">
          {/* Areas */}
          <div className="absolute top-[20%] left-[30%] w-[15%] h-[15%] rounded-full bg-purple-500/10 blur-sm"></div>
          <div className="absolute bottom-[25%] right-[20%] w-[20%] h-[10%] rounded-full bg-blue-500/10 blur-sm"></div>
          <div className="absolute top-[60%] left-[15%] w-[10%] h-[10%] rounded-full bg-green-500/10 blur-sm"></div>
          
          {/* Location markers */}
          <div className="absolute top-[15%] left-[40%] w-1 h-1 rounded-full bg-white"></div>
          <div className="absolute top-[45%] left-[20%] w-1.5 h-1.5 rounded-full bg-white/80"></div>
          <div className="absolute top-[70%] left-[75%] w-1 h-1 rounded-full bg-white"></div>
          <div className="absolute top-[30%] left-[65%] w-1.5 h-1.5 rounded-full bg-white/80"></div>
          <div className="absolute top-[60%] left-[35%] w-1 h-1 rounded-full bg-white"></div>
          <div className="absolute top-[25%] left-[85%] w-1 h-1 rounded-full bg-white/70"></div>
          <div className="absolute top-[55%] right-[25%] w-1.5 h-1.5 rounded-full bg-white/80"></div>
          
          {/* Buildings */}
          <div className="absolute top-[15%] left-[15%] w-2 h-3 bg-white/10"></div>
          <div className="absolute top-[25%] left-[55%] w-2.5 h-2 bg-white/10"></div>
          <div className="absolute top-[65%] left-[80%] w-2 h-2.5 bg-white/10"></div>
          <div className="absolute top-[75%] left-[25%] w-3 h-2 bg-white/10"></div>
          <div className="absolute top-[45%] right-[15%] w-2 h-2 bg-white/10"></div>
          
          {/* Water body */}
          <div className="absolute top-[50%] left-[55%] w-[15%] h-[15%] rounded-full bg-blue-400/20"></div>
          
          {/* Park/green area */}
          <div className="absolute top-[20%] right-[25%] w-[10%] h-[10%] bg-green-400/20 rounded-sm"></div>
        </div>
        
        {/* Map labels */}
        <div className="absolute inset-0 text-[6px] font-mono text-white/30">
          <div className="absolute top-[22%] left-[32%]">Downtown</div>
          <div className="absolute bottom-[28%] right-[22%]">Marina</div>
          <div className="absolute top-[62%] left-[17%]">Park View</div>
          <div className="absolute top-[53%] left-[56%]">Lake</div>
          <div className="absolute top-[21%] right-[29%]">Green Park</div>
        </div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
               backgroundSize: '80px 80px'
             }}
        ></div>
      </div>
    </div>
  );
};

export default Map;
