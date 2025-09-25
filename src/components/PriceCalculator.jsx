import React, { useState } from 'react';
import './PriceCalculator.css';
import { Calculator, MapPin, DollarSign, Clock } from 'lucide-react';
import { countriesData, serviceLevels, pricingTypes, regions } from '../data/pricingData';

export const PriceCalculator = () => {
  const [form, setForm] = useState({
    region: '',
    country: '',
    serviceLevel: '',
    pricingType: '',
    subOption: '',
    quantity: 1,
    duration: 1
  });
  const [result, setResult] = useState(null);

  const getCountries = () => {
    if (!form.region) return [];
    return Object.keys(countriesData).filter(country =>
      countriesData[country].region === form.region
    );
  };

  const getSubOptions = () => {
    const options = {
      yearly: [
        { value: 'withBackfill', label: 'With Backfill' },
        { value: 'withoutBackfill', label: 'Without Backfill' }
      ],
      daily: [
        { value: 'fullDay', label: 'Full Day (8 hours)' },
        { value: 'halfDay', label: 'Half Day (4 hours)' }
      ],
      dispatch: [
        { value: 'incident9x5', label: '9x5 Incident Response' },
        { value: 'incident24x7', label: '24x7 Incident Response' },
        { value: 'sbd', label: 'Same Business Day' },
        { value: 'nbd', label: 'Next Business Day' },
        { value: 'twobd', label: '2 Business Days' },
        { value: 'threebd', label: '3 Business Days' }
      ],
      monthly: [
        { value: 'shortTerm', label: 'Short-term (up to 3 months)' },
        { value: 'longTerm', label: 'Long-term (3+ months)' }
      ]
    };
    return options[form.pricingType] || [];
  };

  const updateForm = (field, value) => {
    const newForm = { ...form, [field]: value };
    if (field === 'region') newForm.country = '';
    if (field === 'pricingType') newForm.subOption = '';
    setForm(newForm);
  };

  const calculatePrice = () => {
    const { country, serviceLevel, pricingType, subOption, quantity, duration } = form;
    if (!country || !serviceLevel || !pricingType || !subOption) return;

    const countryData = countriesData[country];
    const pricing = countryData.pricing;
    let basePrice = 0;

    switch (pricingType) {
      case 'yearly':
        basePrice = pricing.yearly[serviceLevel][subOption];
        break;
      case 'daily':
        basePrice = subOption === 'fullDay'
          ? pricing.daily[serviceLevel]
          : pricing.daily[`${serviceLevel}Half`];
        break;
      case 'dispatch':
        basePrice = pricing.dispatch[subOption];
        break;
      case 'monthly':
        basePrice = pricing.monthly[subOption][serviceLevel];
        break;
    }

    const totalPrice = basePrice * quantity * duration;

    setResult({
      basePrice,
      totalPrice,
      currency: countryData.currency,
      country: countryData.country,
      serviceLevel: serviceLevels.find(s => s.id === serviceLevel),
      pricingType: pricingTypes.find(p => p.id === pricingType),
      subOption: getSubOptions().find(o => o.value === subOption),
      quantity,
      duration
    });
  };

  const isFormValid = form.country && form.serviceLevel && form.pricingType && form.subOption;

  return (
    <div className="price-calculator">
      {/* Header */}
      <div className="price-calculator-header">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calculator className="w-8 h-8 text-blue-600" />
          <h1>Price Calculator</h1>
        </div>
        <p>Calculate IT service costs with detailed pricing</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Configuration Form */}
        <div className="calculator-card">
          <h2>Configuration</h2>

          {/* Region */}
          <div>
            <label>
              <MapPin className="w-4 h-4 inline mr-1" /> Region
            </label>
            <select value={form.region} onChange={(e) => updateForm('region', e.target.value)}>
              <option value="">Select Region</option>
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>

          {/* Country */}
          <div>
            <label>Country</label>
            <select
              value={form.country}
              onChange={(e) => updateForm('country', e.target.value)}
              disabled={!form.region}
            >
              <option value="">Select Country</option>
              {getCountries().map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>

          {/* Service Level */}
          <div>
            <label>Service Level</label>
            <select value={form.serviceLevel} onChange={(e) => updateForm('serviceLevel', e.target.value)}>
              <option value="">Select Service Level</option>
              {serviceLevels.map(level => (
                <option key={level.id} value={level.id}>{level.name}</option>
              ))}
            </select>
          </div>

          {/* Pricing Type */}
          <div>
            <label>
              <DollarSign className="w-4 h-4 inline mr-1" /> Pricing Type
            </label>
            <select value={form.pricingType} onChange={(e) => updateForm('pricingType', e.target.value)}>
              <option value="">Select Pricing Type</option>
              {pricingTypes.map(type => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))}
            </select>
          </div>

          {/* Sub Options */}
          {form.pricingType && (
            <div>
              <label>Options</label>
              <select value={form.subOption} onChange={(e) => updateForm('subOption', e.target.value)}>
                <option value="">Select Option</option>
                {getSubOptions().map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          )}

          {/* Quantity & Duration */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Quantity</label>
              <input type="number" min="1" value={form.quantity} onChange={(e) => updateForm('quantity', Number(e.target.value))} />
            </div>
            <div>
              <label>
                <Clock className="w-4 h-4 inline mr-1" /> Duration
              </label>
              <input type="number" min="1" value={form.duration} onChange={(e) => updateForm('duration', Number(e.target.value))} />
            </div>
          </div>

          <button onClick={calculatePrice} disabled={!isFormValid}>Calculate Price</button>
        </div>

        {/* Results Panel */}
        <div className="results-panel">
          <h2>Results</h2>
          {result ? (
            <div>
              <div className="total-price">
                <div className="amount">{result.totalPrice.toLocaleString()} {result.currency}</div>
                <div>Total Cost</div>
              </div>

              <div className="details">
                <div><span>Country:</span><span>{result.country}</span></div>
                <div><span>Currency:</span><span>{result.currency}</span></div>
                <div><span>Service Level:</span><span>{result.serviceLevel?.name}</span></div>
                <div><span>Pricing:</span><span>{result.pricingType?.name} - {result.subOption?.label}</span></div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p>Configure your requirements and click "Calculate Price"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
