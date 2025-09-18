'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, AlertTriangle, CheckCircle, X } from 'lucide-react';

const PerformanceMonitor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [performanceData, setPerformanceData] = useState({
    fps: 0,
    memory: 0,
    loadTime: 0,
    isLowPerformance: false,
    suggestions: [] as string[]
  });
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;

    const measurePerformance = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory ? 
          Math.round((performance as Performance & { memory: { usedJSHeapSize: number } }).memory.usedJSHeapSize / 1024 / 1024) : 0;
        
        const isLowPerformance = fps < 30 || memory > 100;
        const suggestions: string[] = [];
        
        if (fps < 30) {
          suggestions.push('Reduce animation complexity');
          suggestions.push('Optimize CSS animations');
        }
        if (memory > 100) {
          suggestions.push('Check for memory leaks');
          suggestions.push('Optimize image loading');
        }
        if (fps < 20) {
          suggestions.push('Consider reducing motion');
        }

        setPerformanceData({
          fps,
          memory,
          loadTime: performance.now() - performance.timing.navigationStart,
          isLowPerformance,
          suggestions
        });
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      animationId = requestAnimationFrame(measurePerformance);
    };

    measurePerformance();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  useEffect(() => {
    // Show performance monitor after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || process.env.NODE_ENV !== 'development') return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="bg-black/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-4 shadow-2xl max-w-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Zap className="text-cyan-400" size={20} />
            <span className="text-white font-bold text-sm">Performance Monitor</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-300">FPS:</span>
            <span className={`font-bold ${
              performanceData.fps >= 50 ? 'text-green-400' : 
              performanceData.fps >= 30 ? 'text-yellow-400' : 'text-red-400'
            }`}>
              {performanceData.fps}
            </span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-300">Memory:</span>
            <span className={`font-bold ${
              performanceData.memory < 50 ? 'text-green-400' : 
              performanceData.memory < 100 ? 'text-yellow-400' : 'text-red-400'
            }`}>
              {performanceData.memory}MB
            </span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-300">Load Time:</span>
            <span className="text-white font-bold">
              {Math.round(performanceData.loadTime)}ms
            </span>
          </div>
        </div>

        {performanceData.isLowPerformance && (
          <div className="border-t border-cyan-500/30 pt-3">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="text-yellow-400" size={16} />
              <span className="text-yellow-400 text-sm font-medium">Performance Issues Detected</span>
            </div>
            
            <div className="space-y-1">
              {performanceData.suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-gray-300">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full" />
                  {suggestion}
                </div>
              ))}
            </div>
          </div>
        )}

        {!performanceData.isLowPerformance && (
          <div className="border-t border-cyan-500/30 pt-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-400" size={16} />
              <span className="text-green-400 text-sm font-medium">Performance is Good</span>
            </div>
          </div>
        )}

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full mt-3 text-center text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>

        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-cyan-500/30 pt-3 mt-3"
          >
            <div className="text-xs text-gray-400 space-y-1">
              <div>• CSS Animations: {performanceData.fps < 30 ? 'Optimizing...' : 'Optimal'}</div>
              <div>• Memory Usage: {performanceData.memory > 100 ? 'High' : 'Normal'}</div>
              <div>• Page Load: {performanceData.loadTime > 3000 ? 'Slow' : 'Fast'}</div>
              <div>• Overall: {performanceData.isLowPerformance ? 'Needs Attention' : 'Excellent'}</div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;
