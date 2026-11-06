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
    driver.set_window_size(1280, 800)
    driver.get('http://localhost:5173')
    time.sleep(2)
    
    print('Page title:', driver.title)
    driver.save_screenshot('scripts/verify_doors_desktop.png')
    
    btn = driver.find_element(By.XPATH, "//button[contains(., 'TAP TO ENTER')]")
    print('Found button:', btn.text)
    btn.click()
    
    time.sleep(2)
    driver.save_screenshot('scripts/verify_hero_desktop.png')
    
    video = driver.find_element(By.TAG_NAME, 'video')
    print('Desktop Video src:', video.get_attribute('src'))
    print('Desktop Video poster:', video.get_attribute('poster'))
    
    # Mobile test
    driver.set_window_size(390, 844)
    driver.get('http://localhost:5173')
    time.sleep(2)
    driver.save_screenshot('scripts/verify_doors_mobile.png')
    btn_m = driver.find_element(By.XPATH, "//button[contains(., 'TAP TO ENTER')]")
    btn_m.click()
    time.sleep(2)
    driver.save_screenshot('scripts/verify_hero_mobile.png')
    video_m = driver.find_element(By.TAG_NAME, 'video')
    print('Mobile Video src:', video_m.get_attribute('src'))
    print('Mobile Video poster:', video_m.get_attribute('poster'))

    logs = driver.get_log('browser')
    severe_errors = [l for l in logs if l['level'] == 'SEVERE']
    print('Severe console errors:', len(severe_errors))
    for err in severe_errors:
        print('  ', err['message'])

finally:
    driver.quit()

