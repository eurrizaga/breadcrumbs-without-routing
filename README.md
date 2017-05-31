# breadcrumbs-without-routing
A skeleton for breadcrumbs based angular application without routing mechanisms.

The purpose of this application is to showcase an app with dynamic module loading without being limited to specific paths. It aims to be as light and fast as possible keeping only the necessary element loaded in the DOM, as well as loading controllers lazily with require JS

Information about the state of the various modules loaded is stored in the url, so the state can be restored when refreshing the app.
