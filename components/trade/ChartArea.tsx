'use client';

import { useEffect, useRef } from 'react';

export default function ChartArea() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    el.innerHTML = ''; 
    
    const canvas = document.createElement('canvas');
    canvas.width = el.clientWidth;
    canvas.height = el.clientHeight;
    const ctx = canvas.getContext('2d');
    
    if(ctx) {
        ctx.fillStyle = '#0f0f1a';
        ctx.fillRect(0,0, canvas.width, canvas.height);
        
        ctx.strokeStyle = '#1f1f33';
        ctx.lineWidth = 1;
        
        for(let i=0; i<canvas.width; i+=50) {
            ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i, canvas.height); ctx.stroke();
        }
        for(let i=0; i<canvas.height; i+=50) {
            ctx.beginPath(); ctx.moveTo(0,i); ctx.lineTo(canvas.width, i); ctx.stroke();
        }

        ctx.strokeStyle = '#A855F7';
        ctx.lineWidth = 2;
        ctx.beginPath();
        let y = canvas.height / 2;
        for(let x=0; x<canvas.width; x+=5) {
            y += (Math.random() - 0.5) * 10;
            if(x===0) ctx.moveTo(x,y);
            else ctx.lineTo(x,y);
        }
        ctx.stroke();
        
        ctx.fillStyle = '#2d2d44';
        ctx.font = 'bold 40px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('JDex Chart View', canvas.width/2, canvas.height/2);
    }
    
    el.appendChild(canvas);

  }, []);

  return (
    <div className="flex flex-col h-full bg-[#0f0f1a] border-r border-[#2d2d44]">
      <div className="h-10 border-b border-[#2d2d44] flex items-center px-4 gap-4 text-xs text-gray-400">
        <span className="text-white font-bold cursor-pointer">15m</span>
        <span className="hover:text-white cursor-pointer">1H</span>
        <span className="hover:text-white cursor-pointer">4H</span>
        <span className="hover:text-white cursor-pointer">1D</span>
        <div className="h-4 w-px bg-[#2d2d44] mx-2"></div>
        <span className="hover:text-white cursor-pointer">Indicators</span>
      </div>
      
      <div ref={containerRef} className="flex-1 w-full relative overflow-hidden" />
    </div>
  );
}