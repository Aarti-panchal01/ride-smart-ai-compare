
import React from 'react';

interface MapProps {
  source?: string;
  destination?: string;
}

const Map: React.FC<MapProps> = ({ source, destination }) => {
  // In a production app, we would integrate with Google Maps or a similar service
  // For now, we'll use a placeholder design
  
  return (
    <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden glass relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-10"></div>
      
      {/* Placeholder map content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {(!source || !destination) ? (
          <div className="text-center text-white/80">
            <p className="text-lg font-medium">Enter your pickup and destination</p>
            <p className="text-sm mt-2 text-white/60">We'll show you the best ride options</p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-6 w-full">
            <div className="w-3/4 h-1 bg-white/20 relative">
              {/* Start point */}
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 bg-green-500 rounded-full animate-pulse"></div>
              
              {/* Route line */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-white/60 animate-pulse-light" 
                   style={{width: '70%'}}></div>
              
              {/* End point */}
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            
            <div className="flex justify-between w-3/4 px-2">
              <div className="text-xs text-white/80">{source}</div>
              <div className="text-xs text-white/80">{destination}</div>
            </div>
            
            <div className="text-sm font-medium text-white">~8.5 km • ~25 min</div>
          </div>
        )}
      </div>
      
      {/* Mock map image background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-90 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%3Cpattern%20id%3D%22pattern%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%20patternTransform%3D%22rotate(45)%22%3E%3Crect%20x%3D%229.5%22%20y%3D%229.5%22%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23ffffff10%22%2F%3E%3C%2Fpattern%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url(%23pattern)%22%2F%3E%3C%2Fsvg%3E')]"></div>
    </div>
  );
};

export default Map;
