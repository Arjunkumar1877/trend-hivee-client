import fs from 'fs'
import path from 'path'

export function findRootPath() {
  const maxIterations = 10
  let current = __dirname
  for (let i = 0; i < maxIterations; i += 1) {
    if (isRootPath(current)) return current
    current = path.resolve(current, '..')
  }
  throw new Error('Could not find root path.')
}

function isRootPath(path: string) {
  const files = fs.readdirSync(path)

  return files.some((file) => file === 'package.json') && files.some((file) => file === 'src')
}

export const ROOT_PATH = findRootPath()
