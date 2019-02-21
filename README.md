# Azure DevOps npm auth

The `vsts-npm-auth` utility only works for Windows. For the rest of the node.js community, we have the excellent `better-vsts-npm-auth` package. However, it is inconvenient to have to have this installed globally. There's a chicken & egg problem of having this package installed locally.

This package webpacks all the dependencies for `better-vsts-npm-auth`. The "binary" is built as one single .js that you can save in your project to be called inside your `preinstall` scripts inside the package.json.
