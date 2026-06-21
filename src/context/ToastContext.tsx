import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import { Toast } from '../components/Toast'
import type { ToastType } from '../components/Toast'

interface ToastEntry {
  type: ToastType
  title: string
  description?: string
}

interface ToastContextValue {
  show: (type: ToastType, title: string, description?: string) => void
}

const ToastContext = createContext<ToastContextValue>({ show: () => {} })

export const useToast = () => useContext(ToastContext)

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [entry, setEntry] = useState<ToastEntry | null>(null)

  const show = useCallback((type: ToastType, title: string, description?: string) => {
    setEntry({ type, title, description })
    setTimeout(() => setEntry(null), 3000)
  }, [])

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      {entry && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }}>
          <Toast
            type={entry.type}
            title={entry.title}
            description={entry.description}
            onClose={() => setEntry(null)}
          />
        </div>
      )}
    </ToastContext.Provider>
  )
}
