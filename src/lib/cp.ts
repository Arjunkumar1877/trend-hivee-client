import cp from 'child_process'

export async function exitCode(child: cp.ChildProcess) {
  return new Promise<number | null>((resolve) => child.on('exit', resolve))
}

export async function processSuccessful(proc: cp.ChildProcess) {
  const code = await exitCode(proc)

  if (code !== 0) throw new Error(`A subprocess exited with code ${exitCode}.`)
}

export async function processSuccessfulOutput(proc: cp.ChildProcess) {
  const buffers: Buffer[] = []

  proc.stdout?.on('data', function (d) {
    buffers.push(d)
  })

  const stdoutEndedPromise = await new Promise((resolve) => proc.stdout?.once('end', resolve))

  await processSuccessful(proc)
  await stdoutEndedPromise

  return Buffer.concat(buffers).toString('utf-8')
}
