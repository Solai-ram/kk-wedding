import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')

driver = webdriver.Chrome(options=chrome_options)

viewports = [320, 360, 375, 390, 412]

all_passed = True

for vp in viewports:
    driver.set_window_size(vp, 800)
    driver.get('http://localhost:5173')
    time.sleep(2)

    # Click door or enter
    driver.execute_script("""
        const enterBtn = document.querySelector('button');
        if (enterBtn) enterBtn.click();
    """)
    time.sleep(2)

    results = driver.execute_script("""
        const docW = document.documentElement.clientWidth;
        const scrollW = document.documentElement.scrollWidth;
        const bodyScrollW = document.body.scrollWidth;
        
        const all = Array.from(document.querySelectorAll('*'));
        const offenders = [];
        all.forEach(el => {
            const r = el.getBoundingClientRect();
            if (r.right > docW + 2 || el.scrollWidth > docW + 2) {
                offenders.push({
                    tag: el.tagName,
                    id: el.id,
                    className: el.className ? el.className.toString().substring(0, 60) : '',
                    rectRight: Math.round(r.right),
                    scrollWidth: el.scrollWidth,
                    clientWidth: el.clientWidth,
                    docW: docW
                });
            }
        });

        return { docW, scrollW, bodyScrollW, count: offenders.length, offenders: offenders.slice(0, 10) };
    """)

    has_h_scroll = results['scrollW'] > results['docW'] or results['bodyScrollW'] > results['docW']
    print(f"\n--- Viewport {vp}px ---")
    print(f"DocW: {results['docW']}, ScrollW: {results['scrollW']}, BodyScrollW: {results['bodyScrollW']}")
    print(f"Horizontal scroll detected: {has_h_scroll}")
    if has_h_scroll or results['count'] > 0:
        print(f"Offenders count: {results['count']}")
        for off in results['offenders']:
            print("  Offender:", off)
        if has_h_scroll:
            all_passed = False

if all_passed:
    print("\n>>> ALL VIEWPORTS PASSED WITH ZERO HORIZONTAL SCROLL! <<<")
else:
    print("\n>>> HORIZONTAL SCROLL DETECTED ON SOME VIEWPORTS! <<<")

driver.quit()
