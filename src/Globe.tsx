import React, { useRef, useEffect, FunctionComponent } from 'react';
import { DAT } from './globe';
import { Detector } from './detector';
import TWEEN from '@tweenjs/tween.js';

interface GlobeProps {
  format?: string;
  title?: string;

  width?: number;

  height?: number;

  data?: number[] | null;
}

export const Globe: FunctionComponent<GlobeProps> = ({
  data = [],
  title = 'population',
  format = 'magnitude',
  width = 800,
  height = 480,
}) => {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (appRef.current && data && data.length > 0) {
      if (!Detector.webgl) {
        Detector.addGetWebGLMessage({});
      } else {
        const w = width || appRef.current.offsetWidth || window.innerWidth;
        const h = height || appRef.current.offsetHeight || window.innerHeight;
        const globe = new DAT.Globe(appRef.current, { w, h });

        // Add JSON data to the globe
        globe.addData(data, {
          format,
          name: title,
          animated: true,
        });

        // Create the geometry
        globe.createPoints();

        const teween = new TWEEN.Tween(globe).to({ time: 0 }, 500);

        teween.easing(TWEEN.Easing.Cubic.Out).start();

        globe.animate();

        // Setup the animation loop.
        const animate = time => {
          requestAnimationFrame(animate);
          TWEEN.update(time);
        };

        animate(null);
      }
    }
  }, [data, title, format]);

  return <div ref={appRef}></div>;
};
