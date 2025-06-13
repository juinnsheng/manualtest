from playwright.sync_api import sync_playwright

def test_login():
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=False, slow_mo=300)  # Slow down actions
            page = browser.new_page()
            page.goto("http://localhost:3000")

            # Wait until login input appears
            page.wait_for_selector("input[placeholder='Username']", timeout=5000)

            # Interact with the page
            page.fill("input[placeholder='Username']", "testuser")
            page.fill("input[placeholder='Password']", "password123")
            page.click("button[type='submit']")

            # Wait to confirm login
            page.wait_for_timeout(2000)  # wait 2 seconds
            content = page.content()

            if "Appointment" in content:
                print("✅ Login Test Passed")
            else:
                print("❌ Login Test Failed")

            browser.close()

    except Exception as e:
        print("❌ Error:", e)

if __name__ == "__main__":
    test_login()
