import { useState } from 'react'
import { useRouter } from '@tanstack/react-router'
import { AlertCircleIcon } from 'lucide-react'
import { ReusableDialog } from './ui/dialog'
import { Alert, AlertTitle } from './ui/alert'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const admin = 'admin@admin.com'
const adminPassword = 'admin'
const user = 'user@user.com'
const userpassword = 'user'
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (email === admin && password === adminPassword) router.navigate({ to: '/admin' })
    if (email === user && password === userpassword) router.navigate({ to: '/user' })
     
    setError('Credenciais inválidas!')
    
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      {error && (
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full cursor-pointer">
                  Login
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{' '}
              <ReusableDialog
                trigger={
                  <a href="#" className="underline underline-offset-4">
                    Sign up
                  </a>
                }
                title="Sign up"
                description="Preencha os campos para criar sua conta."
                onConfirm={() => {
                  console.log('Usuario adicionado!')
                }}
              >
                <form>
                  <label htmlFor="nome">Nome:</label>
                  <input
                    type="text"
                    placeholder="Nome"
                    id="nome"
                    className="w-full border rounded p-2 mb-2"
                    required
                  />
                  <label htmlFor="nome">Email:</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border rounded p-2 mb-2"
                    required
                  />
                  <label htmlFor="nome">Senha:</label>
                  <input
                    type="password"
                    placeholder="Senha"
                    className="w-full border rounded p-2 mb-2"
                    required
                  />
                </form>
              </ReusableDialog>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
