'use client'

import Spline from '@splinetool/react-spline';

export default function SplineScene({ style }: { style?: React.CSSProperties }) {
  return (
    <Spline
      scene="https://prod.spline.design/TcXEYzBOoUxUaSKQ/scene.splinecode"
      style={{ width: '100%', height: '100%', ...style }}
    />
  );
}