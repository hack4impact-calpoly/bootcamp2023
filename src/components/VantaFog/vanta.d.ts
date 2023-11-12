declare module 'vanta/dist/vanta.fog.min' {
    import { VantaEffect } from 'vanta';
  
    interface VantaFogOptions {
      el: HTMLElement;
      THREE: any;
      highlightColor?: number;
      midtoneColor?: number;
      lowlightColor?: number;
      baseColor?: number;
      speed?: number;
      zoom?: number;
      blurFactor?: number;
    }
  
    export default function FOG(options: VantaFogOptions): VantaEffect;
  }