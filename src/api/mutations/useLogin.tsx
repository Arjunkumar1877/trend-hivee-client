import { firebaseAuth } from '@/lib/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useMutation } from '@tanstack/react-query'

export function useFirebaseLogin() {
  const mutation = useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          firebaseAuth,
          email.trim(),
          password.trim()
        )
        return userCredential.user
      } catch (error: any) {
        throw new Error(error.message || 'Login failed')
      }
    },
    onSuccess: (data) => {
      console.log('Login successful', data)
    },
    onError: (error: Error) => {
      console.error('Login failed:', error.message)
    },
  })

  return mutation
}
