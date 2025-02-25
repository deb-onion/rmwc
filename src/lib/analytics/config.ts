export const analyticsConfig = {
  gtm: {
    containerId: 'GTM-MS3PZ23P',
  },
  ga4: {
    measurementId: 'G-XN089MEWPJ',
  },
  features: {
    smoothTransitions: true,
    customCursor: true,
    scrollAnimations: true,
    dynamicLoading: true,
    interactiveGrid: true,
  },
  tracking: {
    enableEnhancedConversion: true,
    enableAbandonmentTracking: true,
    enableMultiTouchAttribution: true,
    enableAdvancedRemarketing: true,
    sessionTimeout: 30, // minutes
    interactionThreshold: 2000, // milliseconds
  },
};

export const dataLayerConfig = {
  pageView: (path: string) => ({
    event: 'page_view',
    page_path: path,
    timestamp: new Date().toISOString(),
  }),
  featureInteraction: (feature: string, action: string, value?: any) => ({
    event: 'feature_interaction',
    feature_name: feature,
    action_type: action,
    value: value,
    timestamp: new Date().toISOString(),
  }),
  conversion: (type: string, value: number) => ({
    event: 'conversion',
    conversion_type: type,
    value: value,
    currency: 'CAD',
    timestamp: new Date().toISOString(),
  }),
}; 