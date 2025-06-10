import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/fornecedores')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/user/user-fornecedores"!</div>
}
