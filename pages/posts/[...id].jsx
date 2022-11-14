import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter()
  return (
    <h1>Это страничка с постом № {router.query.id}</h1>
  )
}