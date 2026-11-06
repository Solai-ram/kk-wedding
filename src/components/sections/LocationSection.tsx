import React, { useState } from 'react';
import { weddingConfig } from '../../config/wedding';
import { LotusIcon, PeacockFeatherIcon, OrnateDivider, CornerOrnament } from '../shared/GoldOrnament';
import { MapPin, Navigation, Clock, Copy, Check, ExternalLink, Building2, Compass, Car, Train, Plane } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const { venue, muhurthamTime, reception, displayDatesRange } = weddingConfig.weddingDetails;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(venue.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background Architectural Palace Backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/generated/palace-archway.jpg"
          alt="Palace Architecture"
          className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/85 to-midnight" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2 text-gold-champagne">
            <PeacockFeatherIcon size={24} />
            <span className="font-cinzel text-xs tracking-[0.3em] uppercase font-medium">
              THE VENUE
            </span>
            <PeacockFeatherIcon size={24} className="scale-x-[-1]" />
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-soft-ivory font-light tracking-[0.08em]">
            Where Our <span className="gold-text-gradient font-normal">Forever Begins</span>
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-soft-ivory/70 italic mt-2">
            Under the auspicious mandapam of GMS Mahal, Thirukalukundram.
          </p>
          <OrnateDivider />
        </div>

        {/* Premium Venue Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 md:p-12 purple-gold-border relative shadow-purple-glow overflow-hidden bg-gradient-to-b from-[#1C1132]/95 via-[#160D27]/98 to-[#10081E]/98">
          <CornerOrnament position="top-left" className="absolute top-4 left-4" size={44} />
          <CornerOrnament position="top-right" className="absolute top-4 right-4" size={44} />
          <CornerOrnament position="bottom-left" className="absolute bottom-4 left-4" size={44} />
          <CornerOrnament position="bottom-right" className="absolute bottom-4 right-4" size={44} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Venue Details & Timing */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-gold-champagne mb-3">
                  <Building2 className="w-5 h-5 text-gold-antique" />
                  <span className="font-cinzel text-xs tracking-[0.25em] uppercase font-semibold">
                    {venue.hall}
                  </span>
                </div>

                <h3 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-soft-ivory font-normal leading-snug">
                  {venue.name}
                </h3>
                <p className="font-cinzel text-xs tracking-wider text-gold-champagne/90 mt-1">
                  Thirukalukundram, Tamil Nadu
                </p>

                <div className="space-y-3.5 text-soft-ivory/85 font-sans text-sm sm:text-base leading-relaxed mt-5 pt-5 border-t border-gold-antique/20">
                  <p className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold-antique shrink-0 mt-0.5" />
                    <span>{venue.fullAddress}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold-antique shrink-0" />
                    <span><strong>Muhurtham:</strong> {muhurthamTime}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold-antique shrink-0" />
                    <span><strong>Reception:</strong> {reception.time}</span>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3.5 pt-6 border-t border-gold-antique/20">
                <a
                  href={venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-gold-antique to-gold-champagne text-midnight font-cinzel text-xs tracking-wider font-semibold shadow-gold-subtle hover:scale-105 transition-all"
                >
                  <Navigation className="w-4 h-4 fill-midnight" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-royal-dark/90 border border-gold-antique/40 text-gold-champagne hover:border-gold-champagne text-xs font-cinzel tracking-wider transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-green-400">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Travel & Highway Connections (Replaced Valet Parking) */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-gold-antique/30 bg-royal-dark/85 p-6 shadow-inner">
              <div>
                <div className="flex items-center gap-2 text-gold-champagne mb-2">
                  <Compass className="w-4 h-4 text-gold-antique" />
                  <span className="font-cinzel text-xs tracking-widest uppercase font-semibold">
                    TRAVEL & ROUTE GUIDE
                  </span>
                </div>

                <h4 className="font-cormorant text-2xl text-soft-ivory mb-1">
                  Reaching the Venue
                </h4>
                <p className="font-sans text-xs text-soft-ivory/70 leading-relaxed mb-4">
                  Conveniently situated on the Chengalpattu – Mahabalipuram highway (SH-58) in the sacred temple town of Thirukalukundram.
                </p>

                {/* Highway & Transit Distance List */}
                <div className="space-y-3 pt-3 border-t border-gold-antique/15 text-xs font-sans">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-midnight/70 border border-gold-antique/20">
                    <div className="flex items-center gap-2.5 text-soft-ivory/90">
                      <Car className="w-4 h-4 text-gold-champagne shrink-0" />
                      <span>From Mahabalipuram (ECR)</span>
                    </div>
                    <span className="font-cinzel text-gold-champagne font-bold">~15 Mins</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-midnight/70 border border-gold-antique/20">
                    <div className="flex items-center gap-2.5 text-soft-ivory/90">
                      <Train className="w-4 h-4 text-gold-champagne shrink-0" />
                      <span>From Chengalpattu Junction</span>
                    </div>
                    <span className="font-cinzel text-gold-champagne font-bold">~25 Mins</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-midnight/70 border border-gold-antique/20">
                    <div className="flex items-center gap-2.5 text-soft-ivory/90">
                      <Plane className="w-4 h-4 text-gold-champagne shrink-0" />
                      <span>From Chennai Airport (MAA)</span>
                    </div>
                    <span className="font-cinzel text-gold-champagne font-bold">~65 Mins</span>
                  </div>
                </div>
              </div>

              {/* Auspicious Dates Pill */}
              <div className="mt-5 pt-4 border-t border-gold-antique/20 text-center">
                <span className="font-cinzel text-[11px] tracking-widest text-gold-champagne uppercase font-medium">
                  {displayDatesRange}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
