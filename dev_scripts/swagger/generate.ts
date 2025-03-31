/* eslint-disable no-console */
import chalk from 'chalk'
import cp from 'child_process'
import dotenv from 'dotenv'
import path from 'path'
import 'tsconfig-paths/register'
import { ApiService, services } from './services'
import { findRootPath } from '@/lib/root'
import { exitCode } from '@/lib/cp'

run()

export async function run() {
  const rootPath = findRootPath()

  dotenv.config({ path: path.join(rootPath, '.env.development') })

  await Promise.all(services.map((service) => generateService(service, rootPath)))
}

async function generateService(service: ApiService, rootPath: string) {
  const swaggerFolderPath = path.join(rootPath, 'src/api/trendhive/services', service)
  const requestTemplatePath = path.join(rootPath, 'src/api/trendhive/codegen-request-template.ts')
  console.log(chalk.yellow(`Generating client for service ${chalk.green(service)}.`))

  const codegenPath = path.join(swaggerFolderPath, 'codegen')

  const apiName = [
    'TrendHive',
    service
      .replace(/-/g, '')
      .split('')
      .map((x, i) => (i === 0 ? x.toUpperCase() : x))
      .join(''),
    'Api',
  ].join('')

  const code = await exitCode(
    cp.spawn(
      `rm -r ${codegenPath}; mkdir -p ${codegenPath} && openapi --input ${path.join(
        swaggerFolderPath,
        'swagger.json'
      )} --output ${codegenPath} --useOptions --useUnionTypes --name ${apiName} --request ${requestTemplatePath} && prettier "${codegenPath}/**/*.ts|tsx|js|css|json" --write`,
      { shell: 'bash', stdio: 'inherit' }
    )
  )

  // if (code !== 0) throw new Error(`Swagger download failed with code ${code}.`)
}