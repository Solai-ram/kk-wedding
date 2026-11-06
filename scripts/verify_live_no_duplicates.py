import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')

driver = webdriver.Chrome(options=chrome_options)

try:
    print("Testing LIVE production deployment for zero duplicate images...")
    driver.set_window_size(1280, 900)
    driver.get('https://kk-wedding-kavya-krishna.web.app')
    time.sleep(2.5)

    enter_btn = driver.find_element(By.CSS_SELECTOR, 'button[aria-label="Open Temple Gates to Enter Wedding Celebration"]')
    print("Found enter button on live site, clicking...")
    enter_btn.click()
    time.sleep(2.5)

    scroll_height = driver.execute_script("return document.body.scrollHeight;")
    print(f"Live page scroll height: {scroll_height}px")
    for step in range(0, scroll_height, 600):
        driver.execute_script(f"window.scrollTo(0, {step});")
        time.sleep(0.08)

    time.sleep(1.5)

    images = driver.execute_script("""
        const imgs = Array.from(document.querySelectorAll('img'));
        return imgs.map(img => ({
            src: img.getAttribute('src') || img.src,
            alt: img.alt || '',
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight
        }));
    """)

    print(f"\nTotal <img> tags rendered on live site: {len(images)}")
    
    src_counts = {}
    for item in images:
        src = item['src']
        if '/images/' in src:
            clean_src = '/images/' + src.split('/images/')[1]
        else:
            clean_src = src
        src_counts[clean_src] = src_counts.get(clean_src, 0) + 1

    duplicates = []
    print("\nLive Image Frequency Audit:")
    for src, count in sorted(src_counts.items()):
        status = "FAIL" if count > 1 else "PASS"
        print(f"  [{status}] {src:55} count: {count}")
        if count > 1:
            duplicates.append(src)

    assert len(duplicates) == 0, f"Found {len(duplicates)} duplicates on live site: {duplicates}"
    print(f"\n>>> LIVE PRODUCTION VERIFIED: ALL {len(src_counts)} IMAGES ARE 100% UNIQUE WITH ZERO DUPLICATES! <<<")

finally:
    driver.quit()

