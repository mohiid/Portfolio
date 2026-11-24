# Site Test Plan

Run all tests on the live GitHub Pages site: https://mohiid.github.io/Portfolio/.

| ID | Testing | Steps | Expected | Result |
| --- | --- | --- | --- | --- |
| T1 | Navigation links — Home | Open Home. Click each navigation link: Home, About Me, Projects, Skills, and Contact. | Each link opens its matching page, and no page returns a 404. | Pass |
| T2 | Navigation links — About | Open About Me. Click each navigation link: Home, About Me, Projects, Skills, and Contact. | Each link opens its matching page, and no page returns a 404. | Pass |
| T3 | Navigation links — Projects | Open Projects. Click each navigation link: Home, About Me, Projects, Skills, and Contact. | Each link opens its matching page, and no page returns a 404. | Pass |
| T4 | Navigation links — Skills | Open Skills. Click each navigation link: Home, About Me, Projects, Skills, and Contact. | Each link opens its matching page, and no page returns a 404. | Pass |
| T5 | Navigation links — Contact | Open Contact. Click each navigation link: Home, About Me, Projects, Skills, and Contact. | Each link opens its matching page, and no page returns a 404. | Pass |
| T6 | Layout — Home | Open Home in a laptop-sized browser window, then use responsive mode at 375px wide. Check horizontal scrolling and text readability at each size. | No sideways scrolling occurs, and all text is readable at both sizes. | Pass |
| T7 | Layout — About | Open About Me in a laptop-sized browser window, then use responsive mode at 375px wide. Check horizontal scrolling and text readability at each size. | No sideways scrolling occurs, and all text is readable at both sizes. | Pass |
| T8 | Layout — Projects | Open Projects in a laptop-sized browser window, then use responsive mode at 375px wide. Check horizontal scrolling and text readability at each size. | No sideways scrolling occurs, and all text is readable at both sizes. | Pass |
| T9 | Layout — Skills | Open Skills in a laptop-sized browser window, then use responsive mode at 375px wide. Check horizontal scrolling and text readability at each size. | No sideways scrolling occurs, and all text is readable at both sizes. | Pass |
| T10 | Layout — Contact | Open Contact in a laptop-sized browser window, then use responsive mode at 375px wide. Check horizontal scrolling and text readability at each size. | No sideways scrolling occurs, and all text is readable at both sizes. | Pass |
| T11 | Mobile menu | At 375px wide, open any page. Click Menu, verify the navigation links appear, then click Menu again. | The menu links open on the first click and close on the second click. | Pass |
| T12 | Menu keyboard | At 375px wide, use Tab until Menu is focused. Press Enter to open the menu, then press Escape. | Enter opens the menu and Escape closes it. | Pass |
| T13 | Form validation — invalid input | On Contact, submit an empty form. Then enter a malformed email and a message shorter than the minimum, and submit again. | Error messages appear for the required empty fields, invalid email, and too-short message. | Pass |
| T14 | Form validation — valid input | On Contact, enter a valid name, email, and message, then submit. Observe the success status and page. | A success message appears and the page does not reload. | Pass |
| T15 | Keyboard navigation — Home | On Home, use only Tab and Enter to visit every link and button on the page. Check the focus indicator at each stop. | Every link and button can be reached and activated with the keyboard, with a visible focus outline. | Pass |
| T16 | Keyboard navigation — About | On About Me, use only Tab and Enter to visit every link and button on the page. Check the focus indicator at each stop. | Every link and button can be reached and activated with the keyboard, with a visible focus outline. | Pass |
| T17 | Keyboard navigation — Projects | On Projects, use only Tab and Enter to visit every link and button on the page. Check the focus indicator at each stop. | Every link and button can be reached and activated with the keyboard, with a visible focus outline. | Pass |
| T18 | Keyboard navigation — Skills | On Skills, use only Tab and Enter to visit every link and button on the page. Check the focus indicator at each stop. | Every link and button can be reached and activated with the keyboard, with a visible focus outline. | Pass |
| T19 | Keyboard navigation — Contact | On Contact, use only Tab and Enter to visit every link, button, and form field. Check the focus indicator at each stop. | Every link, button, and form field can be reached and activated with the keyboard, with a visible focus outline. | Pass |
| T20 | Lighthouse Accessibility — Home | Open Home in Chrome DevTools Lighthouse. Run an Accessibility audit for the mobile or desktop view. | Accessibility score is 90 or higher. | 100 |
| T21 | Lighthouse Accessibility — About | Open About Me in Chrome DevTools Lighthouse. Run an Accessibility audit for the mobile or desktop view. | Accessibility score is 90 or higher. | 100 |
| T22 | Lighthouse Accessibility — Projects | Open Projects in Chrome DevTools Lighthouse. Run an Accessibility audit for the mobile or desktop view. | Accessibility score is 90 or higher. | 100 |
| T23 | Lighthouse Accessibility — Skills | Open Skills in Chrome DevTools Lighthouse. Run an Accessibility audit for the mobile or desktop view. | Accessibility score is 90 or higher. | 100 |
| T24 | Lighthouse Accessibility — Contact | Open Contact in Chrome DevTools Lighthouse. Run an Accessibility audit for the mobile or desktop view. | Accessibility score is 90 or higher. | 100 |
| T25 | Console errors | Open each page (Home, About Me, Projects, Skills, and Contact) and inspect the browser Console after the page loads and after interacting with its controls. | No red errors appear in the Console on any page. | Pass |
