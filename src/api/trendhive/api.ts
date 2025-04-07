import { onAuthStateChanged, User } from '@firebase/auth'
import { useAuthControl } from '@/lib/control'
import { firebaseAuth } from '@/lib/firebase'
import { OpenAPIConfig, TrendHiveTrendhiveApi } from './services/trend-hive/codegen'

export const trendHiveUrl = process.env.NEXT_PUBLIC_API_URL ?? ''

export function useFirebaseUser() {
  return useAuthControl((st: any) => st.user)
}
export function getFirebaseUser() {
  const user = firebaseAuth.currentUser
  if (!user) throw new Error('user_not_logged_in')
  return user
}

export async function getFirebaseUserWithToken(): Promise<{ user: User; token: string }> {
  return new Promise((resolve, reject) => {
    if (firebaseAuth.currentUser) {
      firebaseAuth.currentUser
        .getIdToken(true)
        .then((token) => {
          resolve({ user: firebaseAuth.currentUser!, token })
        })
        .catch(reject)
      return
    }

    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      unsubscribe()
      if (!user) {
        reject(new Error('user_not_logged_in'))
        return
      }
      const token = await user.getIdToken(true)
      resolve({ user, token })
    })
  })
}

type AcceptType = 'octet-stream' | 'json'
type CreateApiOptions = {
  config?: Partial<OpenAPIConfig>
  accept?: AcceptType
}

function getTrendHiveAcceptHeader(opts: { version: number; accept: AcceptType }) {
  return [
    `application/com.teetime-v${opts.version}+${opts.accept}`,
    opts.accept === 'octet-stream' ? 'application/json' : '',
  ].join(', ')
}

function createApi(opts?: CreateApiOptions & { headers?: Record<string, string> }) {
  const accept = opts?.accept ?? 'json'
  const config = {
    BASE: trendHiveUrl,
    HEADERS: {
      Accept: getTrendHiveAcceptHeader({ accept, version: 1 }),
      ...opts?.headers,
    },
    ...opts?.config,
  }
  return {
    trendHive: new TrendHiveTrendhiveApi(config),
  }
}

export function apiFromToken(token: string, opts?: CreateApiOptions) {
  return {
    ...createApi({ config: { TOKEN: token, ...opts?.config }, ...opts }),
    token,
  }
}

function openApi(opts?: CreateApiOptions) {
  return {
    ...createApi({ ...opts }),
  }
}

export async function getApi(opts?: CreateApiOptions) {
  const token = await getFirebaseUser().getIdToken()

  if (!token) throw new Error('token_not_found')

  return apiFromToken(token, opts)
}

export function trendHiveApiFromToken(token: string, opts?: CreateApiOptions) {
  return {
    ...createApi({ config: { TOKEN: token, ...opts?.config }, ...opts }),
    token,
  }
}

export async function getTrendHiveOpenApi(opts?: CreateApiOptions) {
  return openApi(opts)
}

export async function getTrendHiveOpenApiWithHeader(
  opts?: CreateApiOptions & { headers?: Record<string, string> }
) {
  const defaultHeaders = opts?.headers || {}
  return createApi({
    ...opts,
    headers: {
      ...defaultHeaders,
    },
  })
}
