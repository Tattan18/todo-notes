import { SearchIcon } from 'lucide-react'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Tooltip } from '../commons/tooltip'

export function Searcher() {
  return (
    <div className="mt-4 flex items-center gap-2">
      <Input className="flex-1" placeholder="Buscar notas" type="search" />
      <Tooltip text="Buscar">
        <Button size="icon" type="submit">
          <SearchIcon className="h-4 w-4" />
        </Button>
      </Tooltip>
    </div>
  )
}
