/* eslint-disable no-console */
import chalk from 'chalk'
import cp from 'child_process'
import dotenv from 'dotenv'
import path from 'path'
import { match } from 'ts-pattern'
import 'tsconfig-paths/register'
import { ApiService, services } from './services'
import { exitCode } from '../../src/lib/cp'
import { findRootPath } from '../../src/lib/root'

run()

export async function run() {
  const rootPath = findRootPath()

  const dotenvFileName = '.env'
  dotenv.config({ path: path.join(rootPath, dotenvFileName) })

  await Promise.all(services.map((service) => downloadService(service, rootPath)))
}

async function downloadService(service: ApiService, rootPath: string) {
  console.log(chalk.yellow(`Downloading swagger for service ${chalk.green(service)}.`))
  const apiDocsUrl = match(service)
    .with('trend-hive', () => process.env.NEXT_PUBLIC_API_URL+ '/api-docs/trend-hive')
    .exhaustive()

  const swaggerFolderPath = path.join(rootPath, 'src/api/trendhive/services', service)

  console.log(apiDocsUrl)

  if (apiDocsUrl) {
    let timeoutWarningCount = 0
    const timeout = setInterval(() => {
      console.log(
        chalk.red(
          `Downloading swagger for service ${chalk.green(service)} takes longer than ${
            10 + 10 * timeoutWarningCount
          }s.`
        )
      )
      timeoutWarningCount += 1
    }, 10000)


    const code = await exitCode(
      cp.spawn(
        `curl '${apiDocsUrl}' | jq --sort-keys | prettier --parser=json > ${swaggerFolderPath}/original.swagger.json 
    `,
        { shell: 'bash', stdio: 'inherit' }
      )
    )

    clearInterval(timeout)

    if (code !== 0) throw new Error(`Swagger download failed with code ${code}.`)
  }
}
