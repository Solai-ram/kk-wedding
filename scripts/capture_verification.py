import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')

driver = webdriver.Chrome(options=chrome_options)
driver.set_window_size(390, 844) # iPhone 12/13/14 size
driver.get('http://localhost:5173')
time.sleep(2)

# Enter through the temple doors
driver.execute_script("""
    const btn = document.querySelector('button');
    if (btn) btn.click();
""")
time.sleep(3.2) # wait for doors to fully open

# Scroll to Divine Inspiration
driver.execute_script("""
    const el = document.querySelector('#inspiration');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
""")
time.sleep(1)
driver.save_screenshot('scripts/mobile_inspiration_verified.png')
print('Saved scripts/mobile_inspiration_verified.png')

# Scroll to The Couple
driver.execute_script("""
    const el = document.querySelector('#couple');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
""")
time.sleep(1)
driver.save_screenshot('scripts/mobile_couple_verified.png')
print('Saved scripts/mobile_couple_verified.png')

# Scroll to Timeline
driver.execute_script("""
    const el = document.querySelector('#story');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
""")
time.sleep(1)
driver.save_screenshot('scripts/mobile_story_verified.png')
print('Saved scripts/mobile_story_verified.png')

driver.quit()

