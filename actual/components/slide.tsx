import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface SlideProps {
  title: string
  content: ReactNode
}

export default function Slide({ title, content }: SlideProps) {
  return (
    <Card className="w-full max-w-3xl shadow-lg border-slate-200">
      <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-8 text-lg">{content}</CardContent>
    </Card>
  )
}
