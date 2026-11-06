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
    # 1. Desktop Test
    driver.set_window_size(1280, 900)
    driver.get('http://localhost:5173')
    time.sleep(1.5)
    
    # Click to enter through doors
    btn = driver.find_element(By.XPATH, "//button[contains(., 'TAP TO ENTER')]")
    btn.click()
    time.sleep(2)
    
    # Scroll to Divine Inspiration section
    divine = driver.find_element(By.ID, "inspiration")
    driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant'});", divine)
    time.sleep(1)
    driver.save_screenshot('scripts/verify_divine_desktop.png')
    
    # Find image in Divine Inspiration
    divine_img = divine.find_element(By.TAG_NAME, "img")
    print('Divine Inspiration image src:', divine_img.get_attribute('src'))
    
    # Scroll to Story Timeline section
    story = driver.find_element(By.ID, "story")
    driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant'});", story)
    time.sleep(1)
    driver.save_screenshot('scripts/verify_story_desktop.png')
    
    # Find childhood memory image
    story_imgs = story.find_elements(By.TAG_NAME, "img")
    if story_imgs:
        print('Childhood memory image src:', story_imgs[0].get_attribute('src'))
        
    # 2. Mobile Test
    driver.set_window_size(390, 844)
    driver.get('http://localhost:5173')
    time.sleep(1.5)
    btn_m = driver.find_element(By.XPATH, "//button[contains(., 'TAP TO ENTER')]")
    btn_m.click()
    time.sleep(2)
    
    divine_m = driver.find_element(By.ID, "inspiration")
    driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant'});", divine_m)
    time.sleep(1)
    driver.save_screenshot('scripts/verify_divine_mobile.png')
    
    story_m = driver.find_element(By.ID, "story")
    driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant'});", story_m)
    time.sleep(1)
    driver.save_screenshot('scripts/verify_story_mobile.png')
    
    logs = driver.get_log('browser')
    severe = [l for l in logs if l['level'] == 'SEVERE']
    print('Severe browser errors:', len(severe))
    for s in severe:
        print('  ', s['message'])

finally:
    driver.quit()

