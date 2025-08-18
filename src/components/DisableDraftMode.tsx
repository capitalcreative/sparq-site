'use client'
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { disableDraftMode } from '@/app/actions'

export function DisableDraftMode() {
  const router = useRouter()
  const [pending, start] = useTransition()

  // si está embebido dentro del Studio, ocultar
  if (typeof window !== 'undefined' && (window !== window.parent || !!window.opener)) return null

  return (
    <button
      onClick={() => start(async () => { await disableDraftMode(); router.refresh() })}
      style={{ position: 'fixed', right: 16, bottom: 16, padding: '8px 12px', borderRadius: 12 }}
    >
      {pending ? 'Saliendo…' : 'Salir de draft'}
    </button>
  )
}