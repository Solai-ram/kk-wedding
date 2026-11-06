import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')

driver = webdriver.Chrome(options=chrome_options)
driver.set_window_size(390, 844)
driver.get('https://kk-wedding-kavya-krishna.web.app')
time.sleep(2)

# Click Enter
driver.execute_script("document.querySelector('button').click();")
t0 = time.time()

# Check visibility after 500ms
time.sleep(0.5)
t_500 = driver.execute_script("""
    const hero = document.querySelector('#hero');
    const doors = document.querySelector('.fixed.inset-0.z-\\\\[100\\\\]') || document.querySelector('.fixed.inset-0');
    return {
        heroVisible: !!hero && window.getComputedStyle(hero).opacity !== '0',
        doorsPresent: !!doors
    };
""")
print('At 500ms:', t_500)

# Check after 1.4s
time.sleep(1.0)
t_1500 = driver.execute_script("""
    const doors = document.querySelector('.fixed.inset-0.z-\\\\[100\\\\]');
    return {
        doorsDismissed: !doors
    };
""")
print('At 1500ms:', t_1500)

driver.quit()

