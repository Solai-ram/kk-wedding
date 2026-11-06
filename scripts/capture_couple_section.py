import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
chrome_options.add_argument('--window-size=1280,900')

driver = webdriver.Chrome(options=chrome_options)
try:
    driver.get('http://localhost:5173')
    time.sleep(2)
    btn = driver.find_element(By.XPATH, "//button[contains(., 'TAP TO ENTER')]")
    btn.click()
    time.sleep(2)
    couple_sec = driver.find_element(By.ID, 'couple')
    driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant', block: 'center'});", couple_sec)
    time.sleep(1)
    couple_sec.screenshot('scripts/couple_section_desktop.png')
    print('Desktop couple section captured!')
finally:
    driver.quit()

chrome_options_m = Options()
chrome_options_m.add_argument('--headless')
chrome_options_m.add_argument('--no-sandbox')
chrome_options_m.add_argument('--disable-dev-shm-usage')
chrome_options_m.add_argument('--window-size=390,844')

driver_m = webdriver.Chrome(options=chrome_options_m)
try:
    driver_m.get('http://localhost:5173')
    time.sleep(2)
    btn = driver_m.find_element(By.XPATH, "//button[contains(., 'TAP TO ENTER')]")
    btn.click()
    time.sleep(2)
    couple_sec = driver_m.find_element(By.ID, 'couple')
    driver_m.execute_script("arguments[0].scrollIntoView({behavior: 'instant', block: 'start'});", couple_sec)
    time.sleep(1)
    couple_sec.screenshot('scripts/couple_section_mobile.png')
    print('Mobile couple section captured!')
finally:
    driver_m.quit()

