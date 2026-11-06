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
    
    btn = driver.find_element(By.XPATH, "//button[contains(., 'TAP TO ENTER')]")
    btn.click()
    time.sleep(2)
    
    story = driver.find_element(By.ID, 'story')
    driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant'});", story)
    time.sleep(1)
    driver.save_screenshot('scripts/verify_childhood_update_mobile.png')
    
    imgs = story.find_elements(By.TAG_NAME, 'img')
    print('Milestone 1 img src:', imgs[0].get_attribute('src'))
    
    # Desktop test
    driver.set_window_size(1280, 900)
    driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant'});", story)
    time.sleep(1)
    driver.save_screenshot('scripts/verify_childhood_update_desktop.png')

    logs = driver.get_log('browser')
    severe = [l for l in logs if l['level'] == 'SEVERE']
    print('Severe browser errors:', len(severe))
    for s in severe:
        print('  ', s['message'])

finally:
    driver.quit()

