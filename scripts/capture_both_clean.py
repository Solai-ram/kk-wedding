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
    divine = driver.find_element(By.ID, 'inspiration')
    driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant', block: 'center'});", divine)
    time.sleep(1)
    divine.screenshot('scripts/divine_section_desktop.png')
    card = divine.find_element(By.CSS_SELECTOR, '.purple-gold-border')
    card.screenshot('scripts/divine_card_exact.png')
    print('Desktop captures done!')
finally:
    driver.quit()

# Mobile capture in separate session to avoid renderer resize deadlock
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
    divine = driver_m.find_element(By.ID, 'inspiration')
    driver_m.execute_script("arguments[0].scrollIntoView({behavior: 'instant', block: 'center'});", divine)
    time.sleep(1)
    divine.screenshot('scripts/divine_section_mobile.png')
    card = divine.find_element(By.CSS_SELECTOR, '.purple-gold-border')
    card.screenshot('scripts/divine_card_exact_mobile.png')
    print('Mobile captures done!')
finally:
    driver_m.quit()

