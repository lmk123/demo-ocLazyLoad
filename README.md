# A demo blog project for [ocLazyLoad](https://github.com/ocombe/ocLazyLoad)

This is a demo blog project created for how to use [ocLazyLoad](https://github.com/ocombe/ocLazyLoad) in your project.
It provided a build tool (use [gulp](https://github.com/gulpjs/gulp)) to combine, minify files and rename them as a content hash (by use [gulp-rev-all](https://github.com/smysnk/gulp-rev-all)),
so you can put them on CDN.

For a real app which is use this structure please refer to [a branch on this project](https://github.com/lmk123/app-another-one/tree/try-use-ocLazyLoad/app).

P.S. My English is very bad, I hope you can understand what I mean :)

## Introduce

This blog has three modules : `Home`, `Blog` and `About`. Every module has a folder under [app/modules](https://github.com/lmk123/demo-ocLazyLoad/tree/master/app/modules).

Module `Home` just a introduce, which is now you are reading :)

Routers are defined in [app/app.js](https://github.com/lmk123/demo-ocLazyLoad/blob/master/app/app.js), which can show you how ocLazyLoad works on `Blog` module with [ui-router](https://github.com/angular-ui/ui-router).
`Blog` module has few controllers, they are used to Create, Delete, Update the blogs.

`About` module only has a button, When you click it, it will show you a modal by using [ui-bootstrap](https://github.com/angular-ui/bootstrap) --
but `ui-bootstrap-tpls.js` only load when you first click this button.

## Build files for production
Download this project, then do:
```
npm install
gulp
```

## E2E Test
Install [Protractor](https://github.com/angular/protractor), then:
```
npm test
```

## Thanks
Thanks to [@ocombe](https://github.com/ocombe) for his working on [ocLazyLoad](https://github.com/ocombe/ocLazyLoad).
It's really a awesome project.

## License
MIT

