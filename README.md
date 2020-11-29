# Social Lending React Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It uses the custom FinTech Challenge template which integrates by default typescript, emotion and react testing library.

For its Component Library, it uses [Chakra UI](https://chakra-ui.com/).

## Setting up development environment

First of all, ensure all dependencies have been installed correctly.

### `yarn install`

Then, you can run one of the two following commands.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

Additionally by default the proxy is pointing to the SIT environment for the API so there is no need to spin up the API locally.
To change this behaviour please modify `package.json`.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Style guide

Always prefer 4 spaces for tabulation.

Always prefer single quotes when applicable.
The exception are HTML attributes without binding and when you need to use an apostrophe in the text.

Prefer trailing commas in multiline statements.

Because Chakra UI relies on `styled-system`, prefer to use its CSS properties in simple cases.
When they number reaches 4 or more consider moving the styling to a separate class made using `emotion` in a separate file.

To the above limit we do not count properties tied with a given specialized layout component, such as `<Flex>` or `<Stack>`.

Try to always rely on such layout components before falling back to using a `<Box>` or other more generic variants.

Prefer the usage of `<Box>` over `<div>` and other base html components.

When using SVG icons, always run them by an SVG optimizer of choice to reduce their size as much as possible while retaining acceptable quality. Keep in mind, the quality won't be noticable as much when an icon is small enough.

Store all created icons using the `createIcon` utility in a separate file. Example of this is the `<DrawerMenu>` component.
