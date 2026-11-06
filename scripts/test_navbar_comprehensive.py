import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')

driver = webdriver.Chrome(options=chrome_options)

def test_screen(width, height, name):
    print(f"\n--- Testing {name} ({width}x{height}) ---")
    driver.set_window_size(width, height)
    driver.get('http://localhost:5173')
    time.sleep(1)
    
    # Open doors
    driver.execute_script("const b = document.querySelector('button'); if(b) b.click();")
    time.sleep(1.5)
    
    # Check navbar visibility
    header_info = driver.execute_script("""
        const header = document.querySelector('header');
        const nav = document.querySelector('header nav');
        const hamburger = document.querySelector('header button');
        const logoText = document.querySelector('header a span');
        return {
            headerOpacity: header ? window.getComputedStyle(header).opacity : null,
            navDisplay: nav ? window.getComputedStyle(nav).display : null,
            hamburgerDisplay: hamburger ? window.getComputedStyle(hamburger).display : null,
            logoTextVisible: logoText ? window.getComputedStyle(logoText).display : null
        };
    """)
    print("Header State:", header_info)
    
    if width < 1024:
        assert header_info['hamburgerDisplay'] != 'none', f"Hamburger should be visible at {width}px"
        assert header_info['navDisplay'] == 'none', f"Desktop nav should be hidden at {width}px"
        
        # Open mobile menu
        hamburger = driver.find_element(By.CSS_SELECTOR, "header button")
        hamburger.click()
        time.sleep(0.5)
        
        drawer_info = driver.execute_script("""
            const drawer = document.querySelector('div[aria-hidden="false"]');
            const links = drawer ? drawer.querySelectorAll('nav a') : [];
            const bodyOverflow = document.body.style.overflow;
            return {
                drawerFound: !!drawer,
                drawerVisible: drawer ? window.getComputedStyle(drawer).visibility : null,
                linksCount: links.length,
                bodyOverflow: bodyOverflow
            };
        """)
        print("Drawer opened:", drawer_info)
        assert drawer_info['drawerFound'], "Drawer must be found"
        assert drawer_info['drawerVisible'] == 'visible', "Drawer must be visible"
        assert drawer_info['linksCount'] == 7, "All 7 links must be rendered"
        assert drawer_info['bodyOverflow'] == 'hidden', "Body scroll must be locked when drawer open"
        
        # Click a link (e.g. Gallery)
        driver.execute_script("""
            const links = Array.from(document.querySelectorAll('div[aria-hidden="false"] nav a'));
            const galleryLink = links.find(l => l.textContent.includes('Gallery'));
            if (galleryLink) galleryLink.click();
        """)
        time.sleep(1.5)
        
        after_click = driver.execute_script("""
            return {
                scrollY: window.scrollY,
                bodyOverflow: document.body.style.overflow,
                activeSection: document.querySelector('header') ? 'ok' : 'fail'
            };
        """)
        print("After clicking Gallery:", after_click)
        assert after_click['scrollY'] > 500, "Page should have scrolled to Gallery"
        assert after_click['bodyOverflow'] == '', "Body overflow should be unlocked"
        
    else:
        assert header_info['hamburgerDisplay'] == 'none', f"Hamburger should be hidden at {width}px"
        assert header_info['navDisplay'] == 'flex', f"Desktop nav should be visible at {width}px"
        
        # Test desktop link click
        driver.execute_script("""
            const links = Array.from(document.querySelectorAll('header nav a'));
            const coupleLink = links.find(l => l.textContent.includes('The Couple'));
            if (coupleLink) coupleLink.click();
        """)
        time.sleep(1.5)
        scroll_pos = driver.execute_script("return window.scrollY;")
        print(f"Desktop scroll pos after clicking The Couple: {scroll_pos}")
        assert scroll_pos > 500, "Page should have scrolled"

try:
    test_screen(360, 740, "Mobile Portrait (Galaxy S20)")
    test_screen(375, 812, "Mobile Portrait (iPhone X/12/13)")
    test_screen(812, 375, "Mobile Landscape (iPhone Landscape)")
    test_screen(768, 1024, "Tablet Portrait (iPad Mini)")
    test_screen(820, 1180, "Tablet Portrait (iPad Air)")
    test_screen(1280, 800, "Desktop / Laptop (1280x800)")
    print("\n>>> ALL RESPONSIVE NAVBAR TESTS PASSED PERFECTLY! <<<")
finally:
    driver.quit()

