#!/bin/sh
':' //; exec /usr/bin/env TS_NODE_COMPILER_OPTIONS='{"module": "commonjs"}' ts-node "$0" "$@"
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.join(__dirname, '../.env.development'),
})

const envName = process.argv[2]
const env = process.env[envName ?? '']
if (!env) {
  console.error(`Could not find the environemnt variable ${envName}.`)
  process.exit(1)
}
process.stdout.write(env ?? '')
process.exit(0)

export {}

