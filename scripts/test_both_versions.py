import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import shutil

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')

# Version A: with the full polaroid image as couple-divine-inspiration.jpg
shutil.copyfile("C:/Users/P S RAM/.gemini/antigravity/brain/934ef351-e36f-4c0e-97f9-b9198a531239/.user_uploaded/media_1793981354824_185868dc.jpg", "public/images/couple/couple-divine-inspiration.jpg")

driver = webdriver.Chrome(options=chrome_options)
try:
    driver.set_window_size(1280, 900)
    driver.get('http://localhost:5173')
    time.sleep(2)
    btn = driver.find_element(By.XPATH, "//button[contains(., 'TAP TO ENTER')]")
    btn.click()
    time.sleep(2)
    divine = driver.find_element(By.ID, 'inspiration')
    driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant'});", divine)
    time.sleep(1)
    divine.screenshot('scripts/test_polaroid_full.png')
    
    # Version B: with cropped inner photo as couple-divine-inspiration.jpg
    shutil.copyfile("public/images/couple/couple-divine-inspiration-cropped.jpg", "public/images/couple/couple-divine-inspiration.jpg")
    driver.refresh()
    time.sleep(2)
    divine = driver.find_element(By.ID, 'inspiration')
    driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant'});", divine)
    time.sleep(1)
    divine.screenshot('scripts/test_photo_cropped.png')
    print('Both versions captured!')
finally:
    driver.quit()

