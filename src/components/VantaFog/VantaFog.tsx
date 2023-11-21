'use client'
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';

const VantaFog: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof FOG> | null>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
        setVantaEffect(
          FOG({
          el: vantaRef.current,
          THREE: THREE, 
          highlightColor: 0xe1e1dd,
          midtoneColor: 0x8569b9,
          lowlightColor: 0xb1b1dc,
          baseColor: 0xe1e1e1,
          speed: 0.5,
          zoom: 1.8,
          blurFactor: 0.57
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} style={{ width: '100%', height: '100%' }} />;
};

export default VantaFog;