
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
      <div className="absolute inset-0 flex flex-col items-center justify-center">
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
      
      {/* Enhanced map background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 to-purple-900/80">
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
               backgroundSize: '80px 80px'
             }}
        ></div>
        
        {/* Animated roads/paths */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-px bg-white/50 animate-pulse"></div>
          <div className="h-full w-px bg-white/50 animate-pulse"></div>
          <div className="w-2/3 h-px bg-white/50 rotate-45 animate-pulse"></div>
          <div className="w-2/3 h-px bg-white/50 -rotate-45 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Map;
