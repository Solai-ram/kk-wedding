import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')

driver = webdriver.Chrome(options=chrome_options)
driver.set_window_size(390, 844)

print("Opening live Firebase production URL...")
driver.get('https://kk-wedding-kavya-krishna.web.app')
time.sleep(2)

# Click Enter
driver.execute_script("document.querySelector('button').click();")
time.sleep(1.5)

# Verify sections are live
sections_found = driver.execute_script("""
    const ids = ['hero', 'inspiration', 'story', 'couple', 'invitation', 'events', 'gallery', 'location'];
    return ids.map(id => ({ id, exists: !!document.getElementById(id) }));
""")

print("Sections on live site:")
for s in sections_found:
    print(f"  #{s['id']}: {'FOUND' if s['exists'] else 'MISSING'}")

# Verify no console errors
logs = driver.get_log('browser')
severe_errors = [l for l in logs if l['level'] == 'SEVERE']
if severe_errors:
    print("\nConsole errors:", severe_errors)
else:
    print("\nZero console errors on live site!")

driver.quit()

