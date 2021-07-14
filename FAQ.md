# FAQ

## Why a mono repository?

The reason to use a mono repository is to speed up initial development. In the future, the projects in the repository may
be moved to their own repositories.

## Why do I have to install node_modules in the referenced web-component projects before I can compile the databrowser app?

Before you can compile the databrowser app project, you need to install the dependencies of the referenced Web Components (see [web-component](../web-component)).

The reason is, that the web-components need their dependencies to compile. They expect those dependencies in their own
`node_modules` folder.

It is advised to invoke `npm run bootstrap` in the repository root, because that in turn uses [lerna](https://lerna.js.org/)
to take care of the dependencies.

## How can I solve dependency issues?

If you have any dependencies issues, consider removing all `node_modules` folders of all projects and try to invoke
`npm run bootstrap` in the repository root.

## Where do I import / register my Web Component for the Databrowser application?

You can import and register your Web Component globally in the [web-component.import.ts](./databrowser/plugins/web-component.import.ts) file.