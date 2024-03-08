import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from "@/components/ui/table";
import {
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationContent,
  Pagination
} from "@/components/ui/pagination";

export function Application() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex gap-6">
        <div className="flex flex-col gap-2 w-3/5">
          <Label htmlFor="address">Address</Label>
          <Input id="address" placeholder="Enter address" />
        </div>
        <div className="flex flex-col gap-2 w-1/5">
          <Label htmlFor="sort-order">Sort Order</Label>
          <Select>
            <SelectTrigger id="sort-order">
              <SelectValue placeholder="Select order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ascending">Ascending</SelectItem>
              <SelectItem value="descending">Descending</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2 w-1/5">
          <Button className="w-full">Submit</Button>
        </div>
      </div>
      <div className="grid gap-6 pt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>City</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>30</TableCell>
              <TableCell>New York</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Doe</TableCell>
              <TableCell>25</TableCell>
              <TableCell>Los Angeles</TableCell>
              <TableCell>Inactive</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mike Smith</TableCell>
              <TableCell>28</TableCell>
              <TableCell>Chicago</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Anna Johnson</TableCell>
              <TableCell>32</TableCell>
              <TableCell>Houston</TableCell>
              <TableCell>Inactive</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bill Clark</TableCell>
              <TableCell>22</TableCell>
              <TableCell>Miami</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Susan Peterson</TableCell>
              <TableCell>27</TableCell>
              <TableCell>Seattle</TableCell>
              <TableCell>Inactive</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>James Lewis</TableCell>
              <TableCell>31</TableCell>
              <TableCell>Denver</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pamela Wright</TableCell>
              <TableCell>29</TableCell>
              <TableCell>Atlanta</TableCell>
              <TableCell>Inactive</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Kevin Lopez</TableCell>
              <TableCell>24</TableCell>
              <TableCell>San Francisco</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Laura Lee</TableCell>
              <TableCell>26</TableCell>
              <TableCell>Boston</TableCell>
              <TableCell>Inactive</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-center items-center gap-2 pt-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
