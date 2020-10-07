
## Requirements

- Node.js – v12.18.3
- NPM - v6.14.6
- Angular CLI - v10.0.8

### Node Version Setup

The best way to install a node version is to use `nvm`. Follow the steps described here <https://github.com/creationix/nvm#installation> to install it.

Once `nvm` is intalled, you have to run the following command:

```bash
nvm install 12.18.3
```

This will install the required `Node.js` version and will setup your node command. You can test if the node version was installed properly with:

```bash
node -v

//output
> v12.18.3
```

### NPM Version Setup

After installing correctly the version of `Node.js` we need to check if we have the correct version of `npm`

```bash
npm -v

//output
> 6.14.6
```

### AngularCli Setup

Make sure that the `Node.js` version selected in the console is the `12.18.3`, then run the following to install the required `Angular CLI` version

```bash
npm install -g @angular/cli@10.0.8
```
