{
  // will select which webWorker file to use, maybe there are many
  webWorker: "function-bdd",
  // additional imports, mochaChai is always included
  imports: ["some angular stuff", "some http stuck"],
  // where to inject the userData, should always be the same
  inject: '/*injectHere*/',
  // tests using mocha & chai, should always eval(userData) before expect'ing
  tests: 'tests go here',
  // problem description to be presented to the user
  // we must know the name of the function to be ran, so either prefill with skeleton function
  // or make it clear to the user the function MUST have a certain name so we can run it
  problem: 'description of problem to be displayed',
  // prefill text for the input box, could have the skeleton of a function or anything we want to give them to start with
  prefillText: 'text to put into the repl on load'
}