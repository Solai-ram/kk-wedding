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
    time.sleep(2)
    btn = driver.find_element(By.XPATH, "//button[contains(., 'TAP TO ENTER')]")
    btn.click()
    time.sleep(2)
    divine = driver.find_element(By.ID, 'inspiration')
    driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant'});", divine)
    time.sleep(1)
    divine.screenshot('scripts/divine_section_desktop.png')
    
    driver.set_window_size(390, 844)
    driver.get('http://localhost:5173')
    time.sleep(2)
    btn = driver.find_element(By.XPATH, "//button[contains(., 'TAP TO ENTER')]")
    btn.click()
    time.sleep(2)
    divine = driver.find_element(By.ID, 'inspiration')
    driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant'});", divine)
    time.sleep(1)
    divine.screenshot('scripts/divine_section_mobile.png')
    print('Screenshots saved successfully!')
finally:
    driver.quit()

