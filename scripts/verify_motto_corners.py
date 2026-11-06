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
    driver.set_window_size(390, 844)
    driver.get('http://localhost:5173')
    time.sleep(1.5)
    
    # Click to enter through doors
    btn = driver.find_element(By.XPATH, "//button[contains(., 'TAP TO ENTER')]")
    btn.click()
    time.sleep(2)
    
    # Scroll to Couple section
    couple = driver.find_element(By.ID, 'couple')
    driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant'});", couple)
    time.sleep(1)
    
    # Find the motto card
    motto_card = driver.find_element(By.XPATH, "//*[contains(text(), 'OUR PROMISE IN THREE LINES')]/..")
    driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant', block: 'center'});", motto_card)
    time.sleep(0.5)
    
    driver.save_screenshot('scripts/verify_motto_corners_mobile.png')
    
    # Find all svgs in motto card
    svgs = motto_card.find_elements(By.TAG_NAME, 'svg')
    print('Found svgs in motto card:', len(svgs))
    for i, s in enumerate(svgs):
        loc = s.location
        size = s.size
        print(f'SVG {i}: location={loc}, size={size}')
        
    # Desktop screenshot
    driver.set_window_size(1280, 900)
    driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant', block: 'center'});", motto_card)
    time.sleep(0.5)
    driver.save_screenshot('scripts/verify_motto_corners_desktop.png')

    logs = driver.get_log('browser')
    severe = [l for l in logs if l['level'] == 'SEVERE']
    print('Severe browser errors:', len(severe))

finally:
    driver.quit()

