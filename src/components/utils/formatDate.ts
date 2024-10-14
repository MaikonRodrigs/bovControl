import { format, parseISO } from 'date-fns'
import { pt } from 'date-fns/locale'

export const formatDate = (dateString: string): string => {
  const date = parseISO(dateString)
  return format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt })
}
