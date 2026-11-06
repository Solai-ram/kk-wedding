with open('src/components/sections/DivineInspiration.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

target = '''          {/* Left Column: Artwork Framed to Viewport Proportion */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden purple-gold-border shadow-[0_15px_40px_rgba(0,0,0,0.85)] bg-royal-dark group w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none aspect-[3/4] max-h-[46vh] sm:max-h-[50vh] lg:max-h-[56vh]">
              <CornerOrnament position="top-left" className="absolute top-2.5 left-2.5 z-20 opacity-80" size={32} />
              <CornerOrnament position="top-right" className="absolute top-2.5 right-2.5 z-20 opacity-80" size={32} />
              <CornerOrnament position="bottom-left" className="absolute bottom-2.5 left-2.5 z-20 opacity-80" size={32} />
              <CornerOrnament position="bottom-right" className="absolute bottom-2.5 right-2.5 z-20 opacity-80" size={32} />

              <img
                src="/images/couple/couple-divine-inspiration.jpg"
                alt="Kavya and Krishna — Two Souls, One Sacred Melody"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Bottom Subtle Plaque */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-midnight/95 via-midnight/70 to-transparent p-3 sm:p-4 text-center z-10">
                <p className="font-cormorant text-lg sm:text-xl text-gold-champagne italic font-normal">
                  "Kavya & Krishna — Bound by Eternal Love"
                </p>
                <p className="font-cinzel text-[9px] tracking-[0.25em] text-soft-ivory/70 uppercase">
                  Two Souls • One Sacred Melody
                </p>
              </div>
            </div>
          </div>'''

replacement = '''          {/* Left Column: Artwork Framed to Viewport Proportion */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden purple-gold-border shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-gradient-to-b from-royal-dark via-midnight to-royal-dark group w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[370px] aspect-[3/4] max-h-[54vh] p-2 sm:p-2.5 flex flex-col items-center justify-center">
              <CornerOrnament position="top-left" className="absolute top-2 left-2 z-20 opacity-80" size={28} />
              <CornerOrnament position="top-right" className="absolute top-2 right-2 z-20 opacity-80" size={28} />
              <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 z-20 opacity-80" size={28} />
              <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 z-20 opacity-80" size={28} />

              {/* Image Frame */}
              <div className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-royal-dark/90 shadow-inner">
                <img
                  src="/images/couple/couple-divine-inspiration.jpg"
                  alt="Kavya and Krishna — Two Souls, One Sacred Melody"
                  className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Floating Top Aura Badge */}
              <div className="absolute top-3.5 right-3.5 z-20 px-2.5 py-0.5 rounded-full bg-midnight/90 border border-gold-antique/40 backdrop-blur-md flex items-center gap-1.5 shadow-lg pointer-events-none">
                <Sparkles className="w-2.5 h-2.5 text-gold-champagne" />
                <span className="font-cinzel text-[9px] tracking-wider text-gold-champagne uppercase font-medium">
                  Two Souls • One Melody
                </span>
              </div>
            </div>
          </div>'''

target_norm = target.replace('\r\n', '\n')
content_norm = content.replace('\r\n', '\n')
if target_norm in content_norm:
    new_content = content_norm.replace(target_norm, replacement.replace('\r\n', '\n'))
    with open('src/components/sections/DivineInspiration.tsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('SUCCESS: Replaced cleanly!')
else:
    print('Target not found in content!')

