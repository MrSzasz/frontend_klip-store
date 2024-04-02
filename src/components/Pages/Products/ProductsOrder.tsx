import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { LuFilter, LuLayoutGrid, LuLayoutList } from 'react-icons/lu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Filters from './Filters'

interface ProductsOrderProps {
  toggleGridStyle: () => void
  sortFn: (value: string) => void
}

const ProductsOrder = ({
  toggleGridStyle,
  sortFn,
}: ProductsOrderProps): React.ReactElement => {
  return (
    <div className="flex h-fit items-center justify-end gap-4 bg-primary p-2 text-white">
      <Sheet>
        <SheetTrigger className="w-full px-2 md:hidden">
          <LuFilter size="1.5em" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col bg-primary pt-navbar text-white"
        >
          <Filters />
        </SheetContent>
      </Sheet>

      <div>
        <Select
          onValueChange={e => {
            sortFn(e)
          }}
        >
          <SelectTrigger className="w-[180px] border-none bg-white text-black">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="minPrice">$ - $$</SelectItem>
            <SelectItem value="maxPrice">$$ - $</SelectItem>
            <SelectItem value="asc">A - Z</SelectItem>
            <SelectItem value="des">Z - A</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-center gap-2">
        <LuLayoutGrid size="1.5em" />
        <Switch onCheckedChange={toggleGridStyle} />
        <LuLayoutList size="1.5em" />
      </div>
    </div>
  )
}

export default ProductsOrder
