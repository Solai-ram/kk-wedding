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
    print("Testing live deployment on Mobile (375x812)...")
    driver.set_window_size(375, 812)
    driver.get('https://kk-wedding-kavya-krishna.web.app')
    time.sleep(2)

    # Click door button
    driver.execute_script("const b = document.querySelector('button'); if(b) b.click();")
    time.sleep(1.8)

    # Check mobile navbar button
    hamburger = driver.find_element(By.CSS_SELECTOR, "header button")
    assert hamburger.is_displayed(), "Hamburger must be displayed on mobile"
    print("Hamburger displayed on live mobile: YES")

    # Click hamburger
    hamburger.click()
    time.sleep(0.5)

    drawer = driver.find_element(By.CSS_SELECTOR, 'div[aria-hidden="false"]')
    assert drawer.is_displayed(), "Drawer must open on live mobile"
    print("Drawer opened on live mobile: YES")

    # Click a link
    links = driver.find_elements(By.CSS_SELECTOR, 'div[aria-hidden="false"] nav a')
    print(f"Total links found in live mobile drawer: {len(links)}")
    assert len(links) == 7, "Must have 7 links"

    # Click 'Our Journey'
    journey_link = [l for l in links if 'Our Journey' in l.text][0]
    journey_link.click()
    time.sleep(1.5)

    scroll_y = driver.execute_script("return window.scrollY;")
    print(f"Scrolled to section on live site: scrollY = {scroll_y}")
    assert scroll_y > 1000, "Should have scrolled down to Our Journey"

    print("\nTesting live deployment on Desktop (1280x800)...")
    driver.set_window_size(1280, 800)
    driver.get('https://kk-wedding-kavya-krishna.web.app')
    time.sleep(2)
    driver.execute_script("const b = document.querySelector('button'); if(b) b.click();")
    time.sleep(1.8)

    desktop_nav = driver.find_element(By.CSS_SELECTOR, "header nav")
    assert desktop_nav.is_displayed(), "Desktop nav must be visible on desktop"
    print("Desktop nav visible on live desktop: YES")

    print("\n>>> LIVE DEPLOYMENT FULLY VERIFIED SUCCESSFUL! <<<")
finally:
    driver.quit()

