//Dependancies
  const fs = require("fs")
  const path = require("path")
  const colors = require("colors")
  const axios = require("axios")
  const argv = require("minimist")(process.argv.slice(2), {
    alias:{t:"threshold"},
    default:{threshold:"90%"}
  })

//Parse results
  const results = JSON.parse(fs.readFileSync(path.join(__dirname, "results.json")))
  console.log(``)

//Compute threshold and success rate
  const threshold = Number(argv.threshold.replace("%", ""))||0
  const success = 100*results.numPassedTests/results.numTotalTests

//Update result
  if (process.env.BADGES_TOKEN) {
    axios.post("https://badges.lecoq.io/memory", {
      token:process.env.BADGES_TOKEN,
      rakun_tests_passed:results.numPassedTests,
      rakun_tests_total:results.numTotalTests,
      rakun_tests_accuracy:`${success.toFixed(1).padStart(3)}%`,
    })
    console.log(`Sent results to https://badges.lecoq.io/memory`)
    console.log(``)
  }

//Verdict
  console.log(`Success rate : ${success.toFixed(1).padStart(3)}%`)
  console.log(`Threshold    : ${threshold.toFixed(1).padStart(3)}%`)
  console.log(``)
  if (success >= threshold) {
    console.log(`Result       : pass`.green)
    process.exit(0)
  }
  else {
    console.log(`Result       : failed`.red)
    process.exit(1)
  }
  