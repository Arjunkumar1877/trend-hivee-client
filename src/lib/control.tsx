import { User } from '@firebase/auth'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type AuthState = {
  status: 'loading' | 'logged_in' | 'logout_triggered' | 'logged_out'
  firebaseUser?: User
  currentUser?: any
}

export type LogoutSource = 'user_changed_password' | 'user_changed_email' | 'user_click'

export type AuthControl = AuthState & {
  actions: {
    loggedInUserReceived(currentUser: any): void
    loggedInFirebaseUserRecieved(firebaseUser: User): void
    userLoggedOut(): void
  }
}

export const useAuthControl = create<AuthControl>()(
  persist(
    (set) => {
      return {
        status: 'loading',
        actions: {
          loggedInUserReceived(currentUser) {
            set({ status: 'logged_in', currentUser })
          },
          loggedInFirebaseUserRecieved(firebaseUser) {
            set({ status: 'logged_in', firebaseUser })
          },
          userLoggedOut() {
            set({ status: 'logged_out', firebaseUser: undefined, currentUser: undefined })
          },
        },
      }
    },
    {
      name: 'auth-storage',
      partialize: (state) => ({
        status: state.status,
        currentUser: state.currentUser,
        firebaseUser: state.firebaseUser,
      }),
    }
  )
)
