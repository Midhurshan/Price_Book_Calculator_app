// Service Levels Configuration
export const serviceLevels = [
  {
    id: 'l1',
    name: 'L1 - Basic Support',
    description: 'Basic troubleshooting, password resets, equipment installation',
    experience: 'Minimum 6 months relevant experience'
  },
  {
    id: 'l2',
    name: 'L2 - Advanced Support',
    description: 'Advanced troubleshooting, system configuration, VLAN setup',
    experience: 'Minimum 18 months relevant experience'
  },
  {
    id: 'l3',
    name: 'L3 - Expert Support',
    description: 'Complex issue resolution, network design, optimization',
    experience: 'Minimum 2 years relevant experience'
  },
  {
    id: 'l4',
    name: 'L4 - Infrastructure Management',
    description: 'Network Infrastructure Management, Performance Monitoring',
    experience: '3-5 years overall and relevant experience'
  },
  {
    id: 'l5',
    name: 'L5 - Architecture & Planning',
    description: 'Architecture Design, complex network projects leadership',
    experience: 'Senior level with extensive experience'
  }
];

// Pricing Types Configuration
export const pricingTypes = [
  {
    id: 'yearly',
    name: 'Yearly Contract',
    description: 'Annual pricing with/without backfill options'
  },
  {
    id: 'daily',
    name: 'Daily Rates',
    description: 'Full day (8hrs) or half day (4hrs) visit rates'
  },
  {
    id: 'dispatch',
    name: 'Dispatch Services',
    description: 'Incident response and IMAC services'
  },
  {
    id: 'monthly',
    name: 'Monthly Projects',
    description: 'Short-term and long-term project rates'
  }
];

// Available Regions
export const regions = ['APAC', 'Europe', 'North America'];

// Countries Data with Pricing
export const countriesData = {
  'Australia': {
    country: 'Australia',
    region: 'APAC',
    currency: 'AUD',
    paymentTerms: 'Net 30',
    pricing: {
      yearly: {
        l1: { withBackfill: 45000, withoutBackfill: 40000 },
        l2: { withBackfill: 65000, withoutBackfill: 58000 },
        l3: { withBackfill: 85000, withoutBackfill: 75000 },
        l4: { withBackfill: 110000, withoutBackfill: 95000 },
        l5: { withBackfill: 140000, withoutBackfill: 120000 }
      },
      daily: {
        l1: 350, l1Half: 200,
        l2: 450, l2Half: 250,
        l3: 550, l3Half: 300,
        l4: 650, l4Half: 350,
        l5: 750, l5Half: 400
      },
      dispatch: {
        incident9x5: 150,
        incident24x7: 250,
        sbd: 300,
        nbd: 200,
        twobd: 150,
        threebd: 100
      },
      monthly: {
        shortTerm: { l1: 4200, l2: 5800, l3: 7500, l4: 9200, l5: 11500 },
        longTerm: { l1: 3800, l2: 5200, l3: 6800, l4: 8300, l5: 10300 }
      }
    }
  },

  'Germany': {
    country: 'Germany',
    region: 'Europe',
    currency: 'EUR',
    paymentTerms: 'Net 30',
    pricing: {
      yearly: {
        l1: { withBackfill: 38000, withoutBackfill: 34000 },
        l2: { withBackfill: 52000, withoutBackfill: 46000 },
        l3: { withBackfill: 68000, withoutBackfill: 60000 },
        l4: { withBackfill: 85000, withoutBackfill: 75000 },
        l5: { withBackfill: 105000, withoutBackfill: 92000 }
      },
      daily: {
        l1: 280, l1Half: 150,
        l2: 350, l2Half: 200,
        l3: 420, l3Half: 240,
        l4: 500, l4Half: 280,
        l5: 580, l5Half: 320
      },
      dispatch: {
        incident9x5: 120,
        incident24x7: 200,
        sbd: 250,
        nbd: 180,
        twobd: 130,
        threebd: 90
      },
      monthly: {
        shortTerm: { l1: 3400, l2: 4600, l3: 6000, l4: 7500, l5: 9200 },
        longTerm: { l1: 3100, l2: 4200, l3: 5500, l4: 6800, l5: 8300 }
      }
    }
  },

  'United States': {
    country: 'United States',
    region: 'North America',
    currency: 'USD',
    paymentTerms: 'Net 30',
    pricing: {
      yearly: {
        l1: { withBackfill: 42000, withoutBackfill: 37000 },
        l2: { withBackfill: 58000, withoutBackfill: 52000 },
        l3: { withBackfill: 75000, withoutBackfill: 67000 },
        l4: { withBackfill: 95000, withoutBackfill: 85000 },
        l5: { withBackfill: 120000, withoutBackfill: 105000 }
      },
      daily: {
        l1: 320, l1Half: 180,
        l2: 400, l2Half: 220,
        l3: 480, l3Half: 270,
        l4: 580, l4Half: 320,
        l5: 680, l5Half: 380
      },
      dispatch: {
        incident9x5: 140,
        incident24x7: 230,
        sbd: 280,
        nbd: 190,
        twobd: 140,
        threebd: 95
      },
      monthly: {
        shortTerm: { l1: 3800, l2: 5200, l3: 6700, l4: 8300, l5: 10500 },
        longTerm: { l1: 3400, l2: 4700, l3: 6100, l4: 7500, l5: 9500 }
      }
    }
  },

  'United Kingdom': {
    country: 'United Kingdom',
    region: 'Europe',
    currency: 'GBP',
    paymentTerms: 'Net 30',
    pricing: {
      yearly: {
        l1: { withBackfill: 32000, withoutBackfill: 28000 },
        l2: { withBackfill: 45000, withoutBackfill: 40000 },
        l3: { withBackfill: 58000, withoutBackfill: 52000 },
        l4: { withBackfill: 72000, withoutBackfill: 65000 },
        l5: { withBackfill: 88000, withoutBackfill: 78000 }
      },
      daily: {
        l1: 250, l1Half: 140,
        l2: 320, l2Half: 180,
        l3: 380, l3Half: 220,
        l4: 450, l4Half: 250,
        l5: 520, l5Half: 290
      },
      dispatch: {
        incident9x5: 110,
        incident24x7: 180,
        sbd: 220,
        nbd: 150,
        twobd: 110,
        threebd: 75
      },
      monthly: {
        shortTerm: { l1: 2900, l2: 4000, l3: 5200, l4: 6500, l5: 8000 },
        longTerm: { l1: 2600, l2: 3600, l3: 4700, l4: 5900, l5: 7200 }
      }
    }
  },

  'India': {
    country: 'India',
    region: 'APAC',
    currency: 'USD',
    paymentTerms: 'Net 30',
    pricing: {
      yearly: {
        l1: { withBackfill: 18000, withoutBackfill: 16000 },
        l2: { withBackfill: 25000, withoutBackfill: 22000 },
        l3: { withBackfill: 32000, withoutBackfill: 28000 },
        l4: { withBackfill: 42000, withoutBackfill: 37000 },
        l5: { withBackfill: 55000, withoutBackfill: 48000 }
      },
      daily: {
        l1: 120, l1Half: 70,
        l2: 160, l2Half: 90,
        l3: 200, l3Half: 110,
        l4: 250, l4Half: 140,
        l5: 300, l5Half: 170
      },
      dispatch: {
        incident9x5: 50,
        incident24x7: 85,
        sbd: 100,
        nbd: 70,
        twobd: 50,
        threebd: 35
      },
      monthly: {
        shortTerm: { l1: 1600, l2: 2200, l3: 2800, l4: 3500, l5: 4500 },
        longTerm: { l1: 1400, l2: 2000, l3: 2500, l4: 3200, l5: 4100 }
      }
    }
  },

  'France': {
    country: 'France',
    region: 'Europe',
    currency: 'EUR',
    paymentTerms: 'Net 30',
    pricing: {
      yearly: {
        l1: { withBackfill: 36000, withoutBackfill: 32000 },
        l2: { withBackfill: 50000, withoutBackfill: 44000 },
        l3: { withBackfill: 65000, withoutBackfill: 58000 },
        l4: { withBackfill: 82000, withoutBackfill: 72000 },
        l5: { withBackfill: 100000, withoutBackfill: 88000 }
      },
      daily: {
        l1: 270, l1Half: 150,
        l2: 340, l2Half: 190,
        l3: 410, l3Half: 230,
        l4: 480, l4Half: 270,
        l5: 560, l5Half: 310
      },
      dispatch: {
        incident9x5: 115,
        incident24x7: 195,
        sbd: 240,
        nbd: 170,
        twobd: 125,
        threebd: 85
      },
      monthly: {
        shortTerm: { l1: 3200, l2: 4400, l3: 5800, l4: 7200, l5: 8800 },
        longTerm: { l1: 2900, l2: 4000, l3: 5300, l4: 6500, l5: 8000 }
      }
    }
  },

  'Singapore': {
    country: 'Singapore',
    region: 'APAC',
    currency: 'USD',
    paymentTerms: 'Net 30',
    pricing: {
      yearly: {
        l1: { withBackfill: 35000, withoutBackfill: 31000 },
        l2: { withBackfill: 48000, withoutBackfill: 43000 },
        l3: { withBackfill: 62000, withoutBackfill: 55000 },
        l4: { withBackfill: 78000, withoutBackfill: 70000 },
        l5: { withBackfill: 98000, withoutBackfill: 86000 }
      },
      daily: {
        l1: 260, l1Half: 145,
        l2: 330, l2Half: 185,
        l3: 400, l3Half: 225,
        l4: 480, l4Half: 270,
        l5: 560, l5Half: 315
      },
      dispatch: {
        incident9x5: 110,
        incident24x7: 185,
        sbd: 230,
        nbd: 160,
        twobd: 120,
        threebd: 80
      },
      monthly: {
        shortTerm: { l1: 3100, l2: 4300, l3: 5500, l4: 6900, l5: 8600 },
        longTerm: { l1: 2800, l2: 3900, l3: 5000, l4: 6200, l5: 7800 }
      }
    }
  },

  'Japan': {
    country: 'Japan',
    region: 'APAC',
    currency: 'USD',
    paymentTerms: 'Net 30',
    pricing: {
      yearly: {
        l1: { withBackfill: 40000, withoutBackfill: 35000 },
        l2: { withBackfill: 55000, withoutBackfill: 49000 },
        l3: { withBackfill: 72000, withoutBackfill: 64000 },
        l4: { withBackfill: 90000, withoutBackfill: 80000 },
        l5: { withBackfill: 115000, withoutBackfill: 100000 }
      },
      daily: {
        l1: 300, l1Half: 170,
        l2: 380, l2Half: 210,
        l3: 460, l3Half: 260,
        l4: 550, l4Half: 310,
        l5: 650, l5Half: 360
      },
      dispatch: {
        incident9x5: 130,
        incident24x7: 220,
        sbd: 270,
        nbd: 180,
        twobd: 135,
        threebd: 90
      },
      monthly: {
        shortTerm: { l1: 3600, l2: 4900, l3: 6400, l4: 8000, l5: 10000 },
        longTerm: { l1: 3200, l2: 4400, l3: 5800, l4: 7200, l5: 9000 }
      }
    }
  },

  'Canada': {
    country: 'Canada',
    region: 'North America',
    currency: 'USD',
    paymentTerms: 'Net 30',
    pricing: {
      yearly: {
        l1: { withBackfill: 38000, withoutBackfill: 34000 },
        l2: { withBackfill: 53000, withoutBackfill: 47000 },
        l3: { withBackfill: 68000, withoutBackfill: 61000 },
        l4: { withBackfill: 86000, withoutBackfill: 76000 },
        l5: { withBackfill: 108000, withoutBackfill: 95000 }
      },
      daily: {
        l1: 290, l1Half: 160,
        l2: 360, l2Half: 200,
        l3: 440, l3Half: 245,
        l4: 520, l4Half: 290,
        l5: 610, l5Half: 340
      },
      dispatch: {
        incident9x5: 125,
        incident24x7: 210,
        sbd: 260,
        nbd: 175,
        twobd: 130,
        threebd: 85
      },
      monthly: {
        shortTerm: { l1: 3400, l2: 4700, l3: 6100, l4: 7600, l5: 9500 },
        longTerm: { l1: 3100, l2: 4200, l3: 5500, l4: 6900, l5: 8600 }
      }
    }
  }
};