from behave import given, when, then

@given("I open the login page")
def step_open_login(context):
    print("Opening the login page...")

@when("I enter valid username and password")
def step_enter_credentials(context):
    print("Typing username and password...")

@when("I click the login button")
def step_click_login(context):
    print("Clicking the login button...")

@then("I should see the appointment page")
def step_see_appointment(context):
    print("User is redirected to the appointment page ✅")
