'use client';

import { Card } from '../ui/card';
import TableToolBar from './toolbar/toolbar';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const AppTable = () => {
  return (
    <div className="px-4">
      <TableToolBar />
      <Card className="mt-4 min-h-screen">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-48">Type</TableHead>
              <TableHead className="w-64">Reviewer</TableHead>
              <TableHead className="w-16">Requested Date</TableHead>
              <TableHead className="w-16">Created Date</TableHead>
              <TableHead className="w-16">Last Updated</TableHead>
              <TableHead className="w-64">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody></TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default AppTable;
