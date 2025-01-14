import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from 'lucide-react'

const reports = [
  {
    id: "REP001",
    name: "Q4 Campaign Performance",
    type: "Campaign",
    date: "2023-12-15",
    status: "Completed",
  },
  {
    id: "REP002",
    name: "Facebook Ads Overview",
    type: "Platform",
    date: "2023-12-10",
    status: "Completed",
  },
  {
    id: "REP003",
    name: "Holiday Sale Analysis",
    type: "Campaign",
    date: "2023-12-05",
    status: "In Progress",
  },
  {
    id: "REP004",
    name: "Google Analytics Insights",
    type: "Platform",
    date: "2023-11-30",
    status: "Completed",
  },
  {
    id: "REP005",
    name: "Black Friday Performance",
    type: "Campaign",
    date: "2023-11-25",
    status: "Completed",
  },
]

export function ReportTable() {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Report ID</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead className="hidden md:table-cell">Tipo</TableHead>
            <TableHead className="hidden md:table-cell">Fecha</TableHead>
            <TableHead className="hidden md:table-cell">Estado</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports.map((report) => (
            <TableRow key={report.id}>
              <TableCell className="font-medium">{report.id}</TableCell>
              <TableCell>{report.name}</TableCell>
              <TableCell className="hidden md:table-cell">{report.type}</TableCell>
              <TableCell className="hidden md:table-cell">{report.date}</TableCell>
              <TableCell className="hidden md:table-cell">{report.status}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Abrir menú</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                    <DropdownMenuItem
                      onClick={() => navigator.clipboard.writeText(report.id)}
                    >
                      Copiar ID de informe
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Ver informe</DropdownMenuItem>
                    <DropdownMenuItem>Descargar PDF</DropdownMenuItem>
                    <DropdownMenuItem>Enviar por correo</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

