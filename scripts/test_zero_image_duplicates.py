import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')

driver = webdriver.Chrome(options=chrome_options)

try:
    print("Testing local dev server for duplicate images...")
    driver.set_window_size(1280, 900)
    driver.get('http://localhost:5173')
    
    # Wait for button
    wait = WebDriverWait(driver, 10)
    enter_btn = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'button[aria-label="Open Temple Gates to Enter Wedding Celebration"]')))
    print("Found enter button, clicking...")
    enter_btn.click()
    time.sleep(2.5)

    scroll_height = driver.execute_script("return document.body.scrollHeight;")
    print(f"Page scroll height: {scroll_height}px")
    for step in range(0, scroll_height, 600):
        driver.execute_script(f"window.scrollTo(0, {step});")
        time.sleep(0.08)

    time.sleep(1)

    images = driver.execute_script("""
        const imgs = Array.from(document.querySelectorAll('img'));
        return imgs.map(img => ({
            src: img.getAttribute('src') || img.src,
            alt: img.alt || '',
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight
        }));
    """)

    print(f"\nTotal <img> tags rendered on page: {len(images)}")
    
    src_counts = {}
    for item in images:
        src = item['src']
        if '/images/' in src:
            clean_src = '/images/' + src.split('/images/')[1]
        else:
            clean_src = src
        src_counts[clean_src] = src_counts.get(clean_src, 0) + 1

    print("\nImage frequency audit:")
    duplicates = []
    for src, count in sorted(src_counts.items()):
        status = "DUPLICATE FAIL!" if count > 1 else "PASS (Unique)"
        print(f"  [{status}] {src:55} (count: {count})")
        if count > 1:
            duplicates.append(src)

    if duplicates:
        print(f"\nERROR: Found {len(duplicates)} duplicate images rendered in DOM: {duplicates}")
        exit(1)
    else:
        print(f"\n>>> SUCCESS: ALL {len(src_counts)} IMAGES ARE 100% UNIQUE WITH ZERO DUPLICATES! <<<")

finally:
    driver.quit()
