import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-dark pointer-events-none">

      {/* 3D Moving Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 cyber-grid [transform:rotateX(60deg)_translateZ(-200px)] origin-center"></div>
      </div>

      {/* Data Streaks */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-[scanline_10s_linear_infinite_reverse]"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent animate-[scanline_15s_linear_infinite]"></div>
      </div>

      {/* Floating Particles/Light Points */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] animate-pulse-slow delay-1000"></div>

      {/* Radial Gradient overlay to focus center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]"></div>
    </div>
  );
};

export default Background;