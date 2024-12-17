How It Works

Navbar:
Always visible on all pages.
Allows navigation and updates the route dynamically.

Context API:
Manages the global authentication state (isAuth).
Handles login and logout functionality across the application.

PrivateRoute:
Ensures the /products route is accessible only when the user is logged in.
Redirects unauthorized users to the login page.

Routes:
Defined in AllRoutes to link specific components to their respective paths.


Redirections:

After a successful login, the user is redirected to the home page (/).
If the user tries to access the /products page without logging in, they are redirected to the login page (/login).
