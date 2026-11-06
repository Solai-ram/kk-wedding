import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')

driver = webdriver.Chrome(options=chrome_options)

for vp in [768, 820, 900, 1024]:
    driver.set_window_size(vp, 800)
    driver.get('http://localhost:5173')
    time.sleep(1)
    driver.execute_script("const b = document.querySelector('button'); if(b) b.click();")
    time.sleep(1.5)
    
    info = driver.execute_script("""
        const nav = document.querySelector('header nav');
        const header = document.querySelector('header');
        const btn = document.querySelector('header button');
        const links = Array.from(document.querySelectorAll('header nav a'));
        const totalLinksWidth = links.reduce((acc, el) => acc + el.getBoundingClientRect().width, 0);
        return {
            navDisplay: nav ? window.getComputedStyle(nav).display : null,
            totalLinksWidth: Math.round(totalLinksWidth),
            btnDisplay: btn ? window.getComputedStyle(btn).display : null,
            headerWidth: header ? Math.round(header.getBoundingClientRect().width) : null
        };
    """)
    print(f"Viewport {vp}px:", info)

driver.quit()

