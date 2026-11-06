import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')

driver = webdriver.Chrome(options=chrome_options)
driver.set_window_size(375, 812) # iPhone size
driver.get('http://localhost:5173')
time.sleep(1)

# Open doors
driver.execute_script("const b = document.querySelector('button'); if(b) b.click();")
time.sleep(1.5)

# Click hamburger menu
hamburger = driver.find_element("css selector", "header button")
print("Hamburger button found, clicking...")
hamburger.click()
time.sleep(0.5)

# Check mobile overlay
menu_state = driver.execute_script("""
    const menu = document.querySelector('.fixed.inset-0.z-50');
    return {
        menuFound: !!menu,
        menuOpacity: menu ? window.getComputedStyle(menu).opacity : null,
        menuPointerEvents: menu ? window.getComputedStyle(menu).pointerEvents : null,
        linksCount: menu ? menu.querySelectorAll('a').length : 0
    };
""")
print("Mobile menu state:", menu_state)

# Click 'Invitation' link in mobile menu
link = driver.execute_script("""
    const links = Array.from(document.querySelectorAll('.fixed.inset-0.z-50 a'));
    const targetLink = links.find(l => l.textContent.includes('Invitation'));
    if (targetLink) {
        targetLink.click();
        return true;
    }
    return false;
""")
print("Clicked invitation link:", link)
time.sleep(1.5)

scroll_pos = driver.execute_script("return { scrollY: window.scrollY, bodyOverflow: document.body.style.overflow };")
print("After link click:", scroll_pos)

driver.quit()

