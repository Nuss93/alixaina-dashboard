# React JS Argon Boilerplate

Boilerplate that uses Argon UI theme from Creative Tim.


## Quick start

Quick start options:

- `npm install` : install node_modules
- `npm run-script build` : build latest production for FTP uplaod


## Documentation
The documentation for the Argon UI Dashboard React is hosted at [Creative Tim](https://demos.creative-tim.com/argon-dashboard-react/).


## Important Files and Folders to Note

Directories and files:
- `config.js`
    
```
    // Checks configuration
    // 1 = production build
    // 0 = development build

    const CONFIG = 1;
```

- `index.js` (Uncomment the necessary API keys)

```
// firebase.initializeApp(API_KEY_DEVELOPMENT);
firebase.initializeApp(API_KEY_PRODUCTION);
```

- `package.json` (Leave a '//' at the neccessary homepage)

```
    "homepage": "https://dev.serv.my/api/v1/prod/partner/boost/v1",
    "//": "https://dev.serv.my/api/v1/staging/partner/boost/v1",
```

- `routes/dashbord.jsx` (Array of routes to be called in `sidebar.jsx`
- `components/Sidebar/Sidebar.jsx` (Display sidebar to change pages)
- `components/index.js` (Export of all JSX files in `components` folder)
- `views` (For main JSX files appearing in routes)


## Resources
This dashboard uses the template from Creative Tim. For any references, refer to these pages
- Demo: https://demos.creative-tim.com/argon-dashboard-react/
- Download Page: https://demos.creative-tim.com/argon-design-system-react/#/
- Documentation: https://demos.creative-tim.com/argon-dashboard-react/#/documentation/tutorial
- Reactstrap: https://reactstrap.github.io/

## Licensing

- Copyright 2018 Creative Tim (https://www.creative-tim.com)
- Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-nodejs/blob/master/LICENSE.md)

## Useful Links

More products from Creative Tim: <https://www.creative-tim.com/products>

Tutorials: <https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w>

Freebies: <https://www.creative-tim.com/products>

Affiliate Program (earn money): <https://www.creative-tim.com/affiliates/new>

Social Media:

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Google+: <https://plus.google.com/+CreativetimPage>

Instagram: <https://instagram.com/creativetimofficial>