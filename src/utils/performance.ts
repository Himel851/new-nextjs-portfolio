// Performance optimization utilities for 2D portfolio
export interface DeviceCapabilities {
  isMobile: boolean;
  isLowEnd: boolean;
  hasHighRefreshRate: boolean;
  memoryGB: number;
  cpuCores: number;
}

export interface PerformanceSettings {
  enableAnimations: boolean;
  enableComplexEffects: boolean;
  animationQuality: 'low' | 'medium' | 'high';
  effectQuality: 'minimal' | 'simple' | 'full';
}

// Device capability detection
export const getDeviceCapabilities = (): DeviceCapabilities => {
  if (typeof window === 'undefined') {
    return {
      isMobile: false,
      isLowEnd: false,
      hasHighRefreshRate: false,
      memoryGB: 0,
      cpuCores: 0
    };
  }

  const userAgent = navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
  // Check device memory and CPU cores
  const memoryGB = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 4;
  const cpuCores = (navigator as Navigator & { hardwareConcurrency?: number }).hardwareConcurrency || 4;
  
  // Check refresh rate
  const hasHighRefreshRate = Boolean(window.screen && (window.screen as Screen & { refreshRate?: number }).refreshRate && (window.screen as Screen & { refreshRate: number }).refreshRate > 60);

  // Determine if device is low-end
  const isLowEnd = isMobile || 
                   memoryGB < 4 || 
                   cpuCores < 4 || 
                   !hasHighRefreshRate;

  return {
    isMobile,
    isLowEnd,
    hasHighRefreshRate,
    memoryGB,
    cpuCores
  };
};

// Get optimized performance settings based on device capabilities
export const getOptimizedPerformanceSettings = (): PerformanceSettings => {
  const capabilities = getDeviceCapabilities();
  
  if (capabilities.isLowEnd) {
    return {
      enableAnimations: false,
      enableComplexEffects: false,
      animationQuality: 'low',
      effectQuality: 'minimal'
    };
  }
  
  if (capabilities.isMobile) {
    return {
      enableAnimations: true,
      enableComplexEffects: false,
      animationQuality: 'medium',
      effectQuality: 'simple'
    };
  }
  
  // High-end device
  return {
    enableAnimations: true,
    enableComplexEffects: true,
    animationQuality: 'high',
    effectQuality: 'full'
  };
};

// Memory usage monitoring
export const getMemoryUsage = () => {
  if (typeof window === 'undefined' || !(performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory) {
    return null;
  }
  
  const memory = (performance as Performance & { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
  return {
    usedJSHeapSize: Math.round(memory.usedJSHeapSize / 1024 / 1024), // MB
    totalJSHeapSize: Math.round(memory.totalJSHeapSize / 1024 / 1024), // MB
    jsHeapSizeLimit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) // MB
  };
};

// FPS monitoring
export const createFPSMonitor = (callback: (fps: number) => void) => {
  let frameCount = 0;
  let lastTime = performance.now();
  let animationId: number;

  const measureFPS = () => {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime - lastTime >= 1000) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
      callback(fps);
      
      frameCount = 0;
      lastTime = currentTime;
    }
    
    animationId = requestAnimationFrame(measureFPS);
  };

  measureFPS();

  return () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  };
};

// CSS Animation optimization helpers
export const optimizeAnimations = (settings: PerformanceSettings) => {
  const optimizations = {
    reduceMotion: settings.animationQuality === 'low',
    simplifiedEffects: settings.effectQuality === 'minimal',
    animationSpeed: settings.animationQuality === 'low' ? 0.5 : 1
  };
  
  return optimizations;
};

// Debounce function for performance
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Check if element is in viewport
export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Intersection Observer wrapper
export const createIntersectionObserver = (
  callback: (isIntersecting: boolean) => void,
  options: IntersectionObserverInit = {}
) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      callback(entry.isIntersecting);
    });
  }, {
    threshold: 0.1,
    rootMargin: '50px',
    ...options
  });
};

// Performance warning system
export const checkPerformanceWarnings = () => {
  const warnings: string[] = [];
  const capabilities = getDeviceCapabilities();
  const memory = getMemoryUsage();
  
  if (capabilities.isLowEnd) {
    warnings.push('Device detected as low-end. Consider enabling performance mode.');
  }
  
  if (memory && memory.usedJSHeapSize > 100) {
    warnings.push('High memory usage detected. Check for memory leaks.');
  }
  
  if (capabilities.isMobile) {
    warnings.push('Mobile device detected. Animations may be reduced.');
  }
  
  return warnings;
};

// CSS Animation performance helpers
export const shouldReduceMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const getOptimalAnimationDuration = (baseDuration: number) => {
  const capabilities = getDeviceCapabilities();
  if (capabilities.isLowEnd) {
    return baseDuration * 0.5; // Faster animations for low-end devices
  }
  return baseDuration;
};
