import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
chrome_options.add_argument('--window-size=1280,900')

driver = webdriver.Chrome(options=chrome_options)
try:
    driver.get('http://localhost:5173')
    time.sleep(2)
    driver.save_screenshot('scripts/clean_doors_desktop.png')
    print('Clean doors desktop captured!')
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
    driver_m.save_screenshot('scripts/clean_doors_mobile.png')
    print('Clean doors mobile captured!')
finally:
    driver_m.quit()

