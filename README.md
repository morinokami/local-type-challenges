# local-type-challenges

Solve TypeScript [type challenges](https://tsch.js.org/) locally and interactively. This project is inspired by [rustlings](https://rustlings.cool/) and aims to provide a similar experience for type challenges.

## Prerequisites

You need to have [Deno](https://deno.land/) installed on your machine.

## Usage

Clone or download the repository to your local machine. If you have `gh` installed, you can use the following command:

```sh
gh repo clone morinokami/local-type-challenges
```

`cd` into the repository and run the following command:

```sh
deno task watch
```

This command type-checks the challenges located under the `challenges/` directory and displays progress. By default, it checks the challenges in the following order: `warm`, `easy`, `medium`, `hard`, `extreme`. If a check fails, the error details are output to the console. Type checking is retriggered whenever files under challenges are updated.

If you wish to attempt challenges at a specific difficulty level only, you can specify the difficulty as an argument. For example, to attempt only `easy` challenges, run the following command:

```sh
deno task watch easy
```

It is also possible to specify multiple difficulty levels:

```sh
deno task watch easy medium
```

You can also type check only once without watching for changes:

```sh
deno task check
deno task check medium # Check only medium challenges
```

## Syncing Challenges

To sync challenges with the latest version, run the following command:

```sh
deno task sync
```

Note that this command overwrites the existing challenges, so make sure to back up your changes if you have made any.
