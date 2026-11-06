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
    driver.set_window_size(1280, 900)
    driver.get('http://localhost:5173')
    time.sleep(1.5)
    
    # Enter doors
    btn = driver.find_element(By.XPATH, "//button[contains(., 'TAP TO ENTER')]")
    btn.click()
    time.sleep(2)
    
    # Story Timeline
    story = driver.find_element(By.ID, 'story')
    driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant'});", story)
    time.sleep(1)
    
    story_imgs = story.find_elements(By.TAG_NAME, 'img')
    print(f'Found {len(story_imgs)} images in story timeline:')
    for i, img in enumerate(story_imgs):
        print(f'  Milestone {i}: {img.get_attribute("src")}')
        
    driver.save_screenshot('scripts/verify_timeline_renamed_desktop.png')
    
    # Visual Gallery
    gallery = driver.find_element(By.ID, 'gallery')
    driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant'});", gallery)
    time.sleep(1)
    gal_imgs = gallery.find_elements(By.TAG_NAME, 'img')
    print(f'Found {len(gal_imgs)} images in visual gallery:')
    for i, img in enumerate(gal_imgs):
        print(f'  Gallery {i}: {img.get_attribute("src")}')
        
    driver.save_screenshot('scripts/verify_gallery_desktop.png')

    # Mobile test
    driver.set_window_size(390, 844)
    driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant'});", story)
    time.sleep(1)
    driver.save_screenshot('scripts/verify_timeline_renamed_mobile.png')

    logs = driver.get_log('browser')
    severe = [l for l in logs if l['level'] == 'SEVERE']
    print('Severe browser errors:', len(severe))
    for s in severe:
        print('  ', s['message'])

finally:
    driver.quit()

