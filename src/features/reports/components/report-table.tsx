import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Report ID</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Fecha</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead className="text-right">Acción</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reports.map((report) => (
          <TableRow key={report.id}>
            <TableCell className="font-medium">{report.id}</TableCell>
            <TableCell>{report.name}</TableCell>
            <TableCell>{report.type}</TableCell>
            <TableCell>{report.date}</TableCell>
            <TableCell>{report.status}</TableCell>
            <TableCell className="text-right">
              <Button variant="outline">Descargar</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

