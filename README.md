# :warning::warning: DEPRECATED :warning::warning:

This project, and it's related TestArmada projects, will no longer be supported. No further work from the owners will be done, and no PRs will be reviewed.

## Important Notes About Versions

Important: `testarmada-magellan-fast-bail-strategy` is only supported by Magellan version `10.1.0` or higher.

## What does this executor do
 
 1. It works as a Magellan strategy to help Magellan make decision when to do what
 2. It tells Magellan to terminate current test suite as long as one test has failed

## How To Use

Please follow the following steps:

 1. `npm install testarmada-magellan-fast-bail-strategy --save`
 2. Add following line to your `magellan.json` (if there isn't a `magellan.json` please create one under your folder root):

 ```javascript
 "strategy_bail": "testarmada-magellan-fast-bail-strategy"
 ```

 3. Or, instead of adding above line in `magellan.json`, add following argument in your command line

 ```bash
 --strategy_bail testarmada-magellan-fast-bail-strategy
 ```

## Example

To enable this strategy with default threshold
```console
$ ./node_modules/.bin/magellan --strategy_bail testarmada-magellan-fast-bail-strategy --test xxx
```

## License
Documentation in this project is licensed under Creative Commons Attribution 4.0 International License. Full details available at https://creativecommons.org/licenses/by/4.0
