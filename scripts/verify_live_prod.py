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
    driver.get('https://kk-wedding-kavya-krishna.web.app')
    time.sleep(2)
    print('Page title:', driver.title)
    btn = driver.find_element(By.XPATH, "//button[contains(., 'TAP TO ENTER')]")
    btn.click()
    time.sleep(2)
    print('Entered live site successfully!')
    
    # Check severe errors
    logs = driver.get_log('browser')
    severe = [l for l in logs if l['level'] == 'SEVERE']
    print('Severe browser errors on live site:', len(severe))
finally:
    driver.quit()

