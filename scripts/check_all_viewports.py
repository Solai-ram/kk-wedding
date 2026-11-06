import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')

driver = webdriver.Chrome(options=chrome_options)

viewports = [320, 360, 375, 390, 412, 768, 820, 1024, 1280, 1440]
all_passed = True

print("=== CHECKING HORIZONTAL OVERFLOW ACROSS ALL VIEWPORTS ===")

for vp in viewports:
    driver.set_window_size(vp, 900)
    driver.get('http://localhost:5173')
    time.sleep(1.5)

    # Click enter button
    driver.execute_script("""
        const btn = document.querySelector('button');
        if (btn) btn.click();
    """)
    time.sleep(1.5)

    results = driver.execute_script("""
        const docW = document.documentElement.clientWidth;
        const scrollW = document.documentElement.scrollWidth;
        const bodyScrollW = document.body.scrollWidth;
        return { docW, scrollW, bodyScrollW, hasOverflow: scrollW > docW || bodyScrollW > docW };
    """)

    status = "PASS" if not results['hasOverflow'] else "FAIL"
    print(f"Viewport {vp}px: DocW={results['docW']}, ScrollW={results['scrollW']}, BodyScrollW={results['bodyScrollW']} -> [{status}]")
    if results['hasOverflow']:
        all_passed = False

if all_passed:
    print("\n>>> ALL 10 VIEWPORTS PASSED WITH ZERO HORIZONTAL SCROLL! <<<")
else:
    print("\n>>> DETECTED OVERFLOW! <<<")

driver.quit()

