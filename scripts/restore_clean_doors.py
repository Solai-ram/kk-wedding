with open('src/components/sections/OpeningScreen.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Replace the center section
old_center_start = code.find('        {/* ================= CENTER ROYAL SACRED TEMPLE SEAL & PLAQUE ================= */}')
old_center_end = code.find('      </div>\n    </div>\n  );\n};')

new_center = '''        {/* ================= CENTER INTERACTIVE TEMPLE LATCH ================= */}
        <div className="absolute inset-0 z-30 flex items-center justify-center p-4 pointer-events-none">
          <div
            className={`pointer-events-auto flex flex-col items-center transition-all duration-300 ease-out ${
              isOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'
            }`}
          >
            {/* Latch Crest */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gold-antique bg-midnight/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(197,161,90,0.6)] mb-4 sm:mb-5 group cursor-pointer animate-pulse-glow">
              <LotusIcon size={36} className="text-gold-champagne" />
            </div>

            {/* Sacred Invitation Prompt */}
            <div className="text-center mb-4 sm:mb-5 max-w-xs sm:max-w-md">
              <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.35em] text-gold-champagne uppercase font-medium mb-1 drop-shadow-md">
                THE AUSPICIOUS CELEBRATION
              </p>
              <h2 className="font-cormorant text-3xl sm:text-4xl text-soft-ivory tracking-wide font-normal drop-shadow-lg">
                Kavya <span className="text-gold-champagne italic">&</span> Krishna
              </h2>
            </div>

            {/* Enter Button */}
            <button
              onClick={handleOpenDoors}
              className="group pointer-events-auto relative px-7 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-gold-antique/25 via-royal-dark/90 to-gold-antique/25 border-2 border-gold-champagne/90 shadow-[0_0_30px_rgba(197,161,90,0.45)] hover:shadow-[0_0_45px_rgba(230,205,148,0.85)] hover:scale-105 active:scale-95 transition-all duration-500 cursor-pointer overflow-hidden"
              aria-label="Open Temple Gates to Enter Wedding Celebration"
            >
              {/* Shimmer light bar across button */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

              <span className="relative z-10 flex items-center gap-2 sm:gap-3 text-soft-ivory font-cinzel text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-champagne animate-pulse" />
                <span>TAP TO ENTER</span>
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-champagne animate-pulse" />
              </span>
            </button>

            <span className="font-cormorant text-xs sm:text-sm text-soft-ivory/70 italic mt-3 tracking-wider drop-shadow-md">
              Touch to part the sacred temple doors
            </span>
          </div>
        </div>
'''

if old_center_start != -1 and old_center_end != -1:
    updated_code = code[:old_center_start] + new_center + code[old_center_end:]
    with open('src/components/sections/OpeningScreen.tsx', 'w', encoding='utf-8') as f:
        f.write(updated_code)
    print('SUCCESS: Replaced with clean latch design!')
else:
    print('Could not locate markers:', old_center_start, old_center_end)

