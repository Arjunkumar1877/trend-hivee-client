import chalk from 'chalk'
import cp from 'child_process'
import fs from 'fs/promises'
import path from 'path'
import 'tsconfig-paths/register'
import { match } from 'ts-pattern'
import { ApiService, services } from './services'
import { findRootPath } from '../../src/lib/root'

run()

export async function run() {
  const rootPath = findRootPath()

  await Promise.all(services.map((service) => updateService(service, rootPath)))
}

async function updateService(service: ApiService, rootPath: string) {
  console.log(chalk.yellow(`Updating swagger for service ${chalk.green(service)}.`))

  const swaggerFolderPath = path.resolve(rootPath, 'src/api/trendhive/services', service)
  const swaggerJsonPath = path.resolve(swaggerFolderPath, 'swagger.json')
  const originalSwaggerJsonPath = path.resolve(swaggerFolderPath, 'original.swagger.json')

  // load
  const swaggerJson = JSON.parse(
    await fs.readFile(originalSwaggerJsonPath).then((buffer) => buffer.toString('utf-8'))
  )

  // update
  const updatedSwaggerJson = match(service)
    .with('trend-hive', () => swaggerJson)
    .exhaustive()

  // save
  await fs.writeFile(swaggerJsonPath, JSON.stringify(updatedSwaggerJson, null, 3))

  // format the same way to make it diffable
  cp.execSync(
    `cat ${swaggerJsonPath} | jq --sort-keys | prettier --parser=json | sponge ${swaggerJsonPath}`
  )
}